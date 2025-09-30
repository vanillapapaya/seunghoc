---
title: "DaisyUI Mockup Code 테스트"
description: "DaisyUI mockup-code 클래스가 Markdown 코드 블록에 제대로 적용되는지 테스트"
pubDate: 2024-12-01
category: "Data Analysis"
tags: ["DaisyUI", "Code", "Styling"]
---

## DaisyUI Mockup Code 스타일 테스트

### Python 코드 예시

```python
import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split

# 데이터 로드
df = pd.read_csv('data.csv')

# 전처리
X = df.drop('target', axis=1)
y = df['target']

# 훈련/테스트 분할
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

print(f"훈련 데이터 크기: {X_train.shape}")
print(f"테스트 데이터 크기: {X_test.shape}")
```

### SQL 쿼리 예시

```sql
SELECT 
    u.user_id,
    u.username,
    COUNT(o.order_id) as total_orders,
    SUM(o.amount) as total_spent,
    AVG(o.amount) as avg_order_value
FROM users u
LEFT JOIN orders o ON u.user_id = o.user_id
WHERE u.created_at >= '2024-01-01'
GROUP BY u.user_id, u.username
HAVING COUNT(o.order_id) > 0
ORDER BY total_spent DESC
LIMIT 10;
```

### JavaScript 코드 예시

```javascript
// 비동기 데이터 처리 함수
async function fetchAndProcessData(apiUrl) {
    try {
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        // 데이터 변환
        const processedData = data.map(item => ({
            id: item.id,
            name: item.name.toLowerCase(),
            value: parseFloat(item.value) || 0,
            timestamp: new Date(item.created_at)
        }));
        
        return processedData;
        
    } catch (error) {
        console.error('데이터 처리 중 오류 발생:', error);
        return [];
    }
}

// 사용 예시
const result = await fetchAndProcessData('/api/data');
console.log(`처리된 데이터 개수: ${result.length}`);
```

### R 코드 예시

```r
library(ggplot2)
library(dplyr)

# 데이터 불러오기 및 전처리
data <- read.csv("analysis_data.csv") %>%
  filter(!is.na(value)) %>%
  mutate(
    category = as.factor(category),
    log_value = log(value + 1)
  )

# 시각화
ggplot(data, aes(x = category, y = log_value, fill = category)) +
  geom_boxplot(alpha = 0.7) +
  geom_jitter(width = 0.2, alpha = 0.5) +
  scale_fill_viridis_d() +
  labs(
    title = "카테고리별 값 분포",
    x = "카테고리",
    y = "Log(값 + 1)"
  ) +
  theme_minimal() +
  theme(legend.position = "none")

# 통계 분석
model <- lm(log_value ~ category + other_variable, data = data)
summary(model)
```

### Bash/Shell 스크립트 예시

```bash
#!/bin/bash

# 데이터 처리 스크립트
DATA_DIR="/data/raw"
OUTPUT_DIR="/data/processed"
LOG_FILE="/logs/processing.log"

# 로그 함수
log_message() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_FILE"
}

# 디렉토리 생성
mkdir -p "$OUTPUT_DIR"

log_message "데이터 처리 시작"

# CSV 파일 처리
for file in "$DATA_DIR"/*.csv; do
    if [[ -f "$file" ]]; then
        filename=$(basename "$file" .csv)
        
        log_message "처리 중: $filename"
        
        # 데이터 정제 (헤더 제거, 빈 행 삭제)
        tail -n +2 "$file" | sed '/^$/d' > "$OUTPUT_DIR/${filename}_cleaned.csv"
        
        # 파일 크기 확인
        size=$(wc -l < "$OUTPUT_DIR/${filename}_cleaned.csv")
        log_message "완료: $filename ($size 행)"
    fi
done

log_message "모든 파일 처리 완료"

# 결과 요약
echo "=== 처리 결과 ==="
ls -la "$OUTPUT_DIR"
```

### YAML 설정 예시

```yaml
# Docker Compose 설정
version: '3.8'

services:
  database:
    image: postgres:15
    environment:
      POSTGRES_DB: analytics
      POSTGRES_USER: analyst
      POSTGRES_PASSWORD: secure_password
    volumes:
      - postgres_data:/var/lib/postgresql/data
      - ./init.sql:/docker-entrypoint-initdb.d/init.sql
    ports:
      - "5432:5432"
    
  app:
    build: .
    depends_on:
      - database
    environment:
      DATABASE_URL: postgresql://analyst:secure_password@database:5432/analytics
      ENVIRONMENT: development
    volumes:
      - ./src:/app/src
      - ./data:/app/data
    ports:
      - "8000:8000"
    
volumes:
  postgres_data:
```

## 특징 확인사항

- **mockup-code 클래스**: 터미널/코드 에디터 같은 모양
- **언어별 구문 강조**: 각 언어에 맞는 하이라이팅
- **모노스페이스 폰트**: JetBrains Mono 적용
- **스크롤**: 긴 코드의 경우 가로 스크롤 지원
- **복사 가능**: 코드 선택 및 복사 기능
