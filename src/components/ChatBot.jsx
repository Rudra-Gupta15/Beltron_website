import React, { useState, useRef, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { FiMessageCircle, FiX, FiSend } from 'react-icons/fi'
import { buildKnowledgeBase } from '../data/siteKnowledge'

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY
const MODEL = 'gemini-2.0-flash'
const ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`

const KNOWLEDGE = buildKnowledgeBase()

const SYSTEM_PROMPT = `You are "BELTRON Assistant", a friendly AI helper embedded on the official
website of BELTRON (Bihar State Electronics Development Corporation Limited).

Your job is to answer visitor questions about BELTRON — its services, projects,
tenders, vacancies, leadership, contact details, and how to find things on this
website. Use ONLY the knowledge provided below. If something is not covered,
say you don't have that information and point the visitor to the Contact Us page.

Guidelines:
- Be concise, warm, and professional. Prefer short paragraphs or bullet points.
- When relevant, tell the user which page to visit and include its path (e.g. "see the Services page at /services").
- Do not invent tenders, dates, phone numbers, or names. Stick to the facts below.
- You may answer in the language the user writes in (English or Hindi).

=== BELTRON KNOWLEDGE BASE ===
${KNOWLEDGE}
=== END KNOWLEDGE BASE ===`

const WELCOME = {
  role: 'model',
  text: 'Hi! 👋 I\'m the BELTRON Assistant. Ask me about our services, tenders, projects, vacancies, or how to find anything on this website.',
}

const SUGGESTIONS = [
  'What services does BELTRON offer?',
  'Show me current tenders',
  'How do I contact BELTRON?',
  'Are there any job vacancies?',
]

export default function ChatBot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([WELCOME])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const scrollRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, loading, open])

  const send = async (text) => {
    const question = (text ?? input).trim()
    if (!question || loading) return

    const nextMessages = [...messages, { role: 'user', text: question }]
    setMessages(nextMessages)
    setInput('')
    setLoading(true)

    try {
      if (!API_KEY) throw new Error('Missing API key')

      // Build conversation history (skip the static welcome bubble).
      const contents = nextMessages
        .filter((m, i) => !(i === 0 && m === WELCOME))
        .map((m) => ({
          role: m.role === 'user' ? 'user' : 'model',
          parts: [{ text: m.text }],
        }))

      const res = await fetch(`${ENDPOINT}?key=${API_KEY}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
          contents,
          generationConfig: { temperature: 0.4, maxOutputTokens: 800 },
        }),
      })

      if (!res.ok) {
        const errBody = await res.text()
        throw new Error(`API ${res.status}: ${errBody}`)
      }

      const data = await res.json()
      const reply =
        data?.candidates?.[0]?.content?.parts?.map((p) => p.text).join('') ||
        "Sorry, I couldn't generate a response. Please try rephrasing."

      setMessages((m) => [...m, { role: 'model', text: reply }])
    } catch (err) {
      console.error('ChatBot error:', err)
      setMessages((m) => [
        ...m,
        {
          role: 'model',
          text: 'Sorry, I ran into a problem reaching the assistant. Please try again, or visit the Contact Us page at /contact-us.',
        },
      ])
    } finally {
      setLoading(false)
    }
  }

  const onKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      send()
    }
  }

  // Turn /path references in a reply into clickable in-app links.
  const renderText = (text) =>
    text.split(/(\s)/).map((token, i) => {
      const match = token.match(/^(\/[a-z0-9/-]*)([.,!?)]*)$/i)
      if (match && match[1].length > 1) {
        return (
          <React.Fragment key={i}>
            <button
              onClick={() => {
                navigate(match[1])
                setOpen(false)
              }}
              className="text-[#0a4f9e] underline font-medium hover:text-[#1d75d8]"
            >
              {match[1]}
            </button>
            {match[2]}
          </React.Fragment>
        )
      }
      return <React.Fragment key={i}>{token}</React.Fragment>
    })

  return (
    <>
      {/* Floating launcher button */}
      <motion.button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'Close chat' : 'Open chat assistant'}
        className="fixed bottom-5 right-5 z-[1000] w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-white"
        style={{ background: 'linear-gradient(135deg, #0a4f9e, #1d75d8)' }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={open ? 'close' : 'open'}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            {open ? <FiX size={26} /> : <FiMessageCircle size={26} />}
          </motion.span>
        </AnimatePresence>
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed bottom-24 right-5 z-[1000] w-[92vw] max-w-[380px] h-[560px] max-h-[80vh] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div
              className="px-4 py-3 flex items-center gap-3 text-white shrink-0"
              style={{ background: 'linear-gradient(135deg, #003366, #0a4f9e)' }}
            >
              <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center">
                <FiMessageCircle size={20} />
              </div>
              <div className="leading-tight">
                <p className="font-semibold text-[15px]">BELTRON Assistant</p>
                <p className="text-[11px] text-blue-100 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
                  Online • Ask me anything
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="ml-auto p-1.5 rounded-lg hover:bg-white/15 transition-colors"
              >
                <FiX size={20} />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto px-3 py-4 space-y-3 bg-[#F8FAFF]">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl text-[14px] leading-relaxed whitespace-pre-wrap break-words ${
                      m.role === 'user'
                        ? 'bg-[#0a4f9e] text-white rounded-br-md'
                        : 'bg-white text-gray-800 border border-gray-100 shadow-sm rounded-bl-md'
                    }`}
                  >
                    {m.role === 'user' ? m.text : renderText(m.text)}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-gray-100 shadow-sm rounded-2xl rounded-bl-md px-4 py-3">
                    <div className="flex gap-1">
                      {[0, 1, 2].map((d) => (
                        <motion.span
                          key={d}
                          className="w-2 h-2 rounded-full bg-gray-400"
                          animate={{ y: [0, -4, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: d * 0.15 }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Quick suggestions (only before the first user message) */}
              {messages.length === 1 && !loading && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => send(s)}
                      className="text-[12.5px] px-3 py-1.5 rounded-full border border-[#0a4f9e]/30 text-[#0a4f9e] bg-white hover:bg-[#0a4f9e] hover:text-white transition-colors"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-3 border-t border-gray-100 bg-white shrink-0">
              <div className="flex items-end gap-2">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={onKeyDown}
                  rows={1}
                  placeholder="Type your question…"
                  className="flex-1 resize-none max-h-24 px-3.5 py-2.5 rounded-xl border border-gray-200 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#0a4f9e]/40"
                />
                <button
                  onClick={() => send()}
                  disabled={loading || !input.trim()}
                  aria-label="Send message"
                  className="w-10 h-10 shrink-0 rounded-xl flex items-center justify-center text-white disabled:opacity-40 transition-opacity"
                  style={{ background: 'linear-gradient(135deg, #0a4f9e, #1d75d8)' }}
                >
                  <FiSend size={18} />
                </button>
              </div>
              <p className="text-[10.5px] text-gray-400 text-center mt-2">
                AI assistant • Answers based on BELTRON website content
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
