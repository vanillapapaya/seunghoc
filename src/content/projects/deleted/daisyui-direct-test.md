---
title: "DaisyUI 직접 테스트"
description: "HTML에서 직접 mockup-code를 사용하여 테스트"
pubDate: 2024-12-01
category: "Data Analysis"
tags: ["Test", "DaisyUI"]
---

## 방법 1: 직접 HTML div 사용

<div class="mockup-code">
  <pre data-prefix="$"><code>npm install daisyui</code></pre>
  <pre data-prefix=">" class="text-warning"><code>installing...</code></pre>
  <pre data-prefix=">" class="text-success"><code>Done!</code></pre>
</div>

## 방법 2: 언어별 예시

<div class="mockup-code">
  <pre data-prefix="1"><code>import pandas as pd</code></pre>
  <pre data-prefix="2"><code>import numpy as np</code></pre>
  <pre data-prefix="3"><code></code></pre>
  <pre data-prefix="4"><code>df = pd.read_csv('data.csv')</code></pre>
  <pre data-prefix="5"><code>print(df.head())</code></pre>
</div>

## 방법 3: 일반 코드 블록 (자동 변환 테스트용)

```python
def hello_world():
    print("Hello, World!")
    return True

result = hello_world()
```

```sql
SELECT user_id, name, email
FROM users
WHERE active = 1
ORDER BY created_at DESC
LIMIT 10;
```

## 방법 4: 복잡한 mockup-code

<div class="mockup-code">
  <pre data-prefix="~"><code>cd /usr/local/projects/</code></pre>
  <pre data-prefix="~/projects" class="text-warning"><code>git clone https://github.com/repo.git</code></pre>
  <pre data-prefix="~/projects" class="text-success"><code>Cloning into 'repo'...</code></pre>
  <pre data-prefix="~/projects"><code>cd repo</code></pre>
  <pre data-prefix="~/projects/repo"><code>npm install</code></pre>
  <pre data-prefix="~/projects/repo" class="text-neutral"><code>added 145 packages...</code></pre>
  <pre data-prefix="~/projects/repo"><code>npm run dev</code></pre>
  <pre data-prefix="~/projects/repo" class="text-info"><code>Server running on http://localhost:3000</code></pre>
</div>
