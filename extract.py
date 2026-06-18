import re
import json

with open(r'C:\Users\Rudra Gupta\.gemini\antigravity-ide\brain\bffc7c29-b66c-48cf-85fa-6f418bb04d91\.system_generated\steps\1980\content.md', 'r', encoding='utf-8') as f:
    html = f.read()

pattern = r'<div class="proj-thumb-title">\s*<a[^>]*>\s*(.*?)\s*</a>'
matches = re.findall(pattern, html, re.DOTALL)

projects = [{'title': match.strip()} for match in matches]

with open(r'c:\Study\Projects\beltron-v2\src\data\projects.json', 'w', encoding='utf-8') as f:
    json.dump(projects, f, indent=2)

print(f'Extracted {len(projects)} projects.')
