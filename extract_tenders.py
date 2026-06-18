import re
import json
from bs4 import BeautifulSoup

def extract_tenders(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        html = f.read()

    soup = BeautifulSoup(html, 'html.parser')
    tenders = []
    
    rows = soup.find_all('div', class_='tr')
    for row in rows:
        cols = row.find_all('div', class_='td')
        if len(cols) >= 5:
            # col 1: Tender Name + NEW badge
            name_cell = cols[1]
            a_tag = name_cell.find('a')
            name = a_tag.text.strip() if a_tag else name_cell.text.strip()
            
            # check for NEW badge
            is_new = False
            span_tag = name_cell.find('span', class_='new-badge')
            if span_tag and 'NEW' in span_tag.text:
                is_new = True

            close_date = cols[2].text.strip()
            open_date = cols[3].text.strip()
            status = cols[4].text.strip()

            tenders.append({
                'name': name,
                'isNew': is_new,
                'closeDate': close_date,
                'openDate': open_date,
                'status': status
            })
    return tenders

current = extract_tenders(r'C:\Users\Rudra Gupta\.gemini\antigravity-ide\brain\bffc7c29-b66c-48cf-85fa-6f418bb04d91\.system_generated\steps\2093\content.md')
archived = extract_tenders(r'C:\Users\Rudra Gupta\.gemini\antigravity-ide\brain\bffc7c29-b66c-48cf-85fa-6f418bb04d91\.system_generated\steps\2096\content.md')

# add ids
for i, t in enumerate(current):
    t['id'] = i + 1

for i, t in enumerate(archived):
    t['id'] = i + 1

with open(r'c:\Study\Projects\beltron-v2\src\data\currentTenders.json', 'w', encoding='utf-8') as f:
    json.dump(current, f, indent=2)

with open(r'c:\Study\Projects\beltron-v2\src\data\archivedTenders.json', 'w', encoding='utf-8') as f:
    json.dump(archived, f, indent=2)

print(f"Extracted {len(current)} current tenders and {len(archived)} archived tenders.")
