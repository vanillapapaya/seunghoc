# 📸 Typora 이미지 설정 가이드

## 목표
Typora에서 작성할 때나 웹사이트에서 볼 때 **동일한 경로**로 이미지가 표시되도록 설정합니다.

---

## ⚙️ Typora 설정 방법

### 1. 환경설정 열기
- **Mac**: `Typora > Preferences` (또는 `⌘ + ,`)
- **Windows**: `File > Preferences`

### 2. 이미지 설정
**Image** 탭에서 다음과 같이 설정:

#### ✅ 복사 위치 설정
```
When Insert Images...
┌─────────────────────────────────────────┐
│ ☑️ Copy image to custom folder           │
└─────────────────────────────────────────┘

Custom Folder:
┌─────────────────────────────────────────┐
│ ../../public/images/blog                 │  ← 블로그 글 작성 시
└─────────────────────────────────────────┘

또는

┌─────────────────────────────────────────┐
│ ../../public/images/projects             │  ← 프로젝트 글 작성 시
└─────────────────────────────────────────┘
```

#### ✅ 경로 설정
```
Use Image Root Path:
┌─────────────────────────────────────────┐
│ /images                                  │
└─────────────────────────────────────────┘

Apply above rules to local images:
☑️ Enabled
```

---

## 📝 사용 방법

### 블로그 글 작성 시

1. **작업 디렉토리**: `/Users/vanillamac/vanillapapaya/seunghoc/src/content/blog/`
2. **Typora 이미지 폴더 설정**: `../../public/images/blog`
3. **이미지 붙여넣기**: `⌘ + V` (Mac) 또는 `Ctrl + V` (Windows)
4. **자동 생성되는 경로**: 
   ```markdown
   ![이미지설명](/images/blog/파일명.png)
   ```

### 프로젝트 글 작성 시

1. **작업 디렉토리**: `/Users/vanillamac/vanillapapaya/seunghoc/src/content/projects/`
2. **Typora 이미지 폴더 설정**: `../../public/images/projects`
3. **이미지 붙여넣기**: `⌘ + V` (Mac) 또는 `Ctrl + V` (Windows)
4. **자동 생성되는 경로**: 
   ```markdown
   ![이미지설명](/images/projects/파일명.png)
   ```

---

## 🎯 결과

### ✅ Typora에서
- 이미지가 즉시 표시됨
- 경로: `/images/blog/파일명.png`

### ✅ 웹사이트에서
- 동일한 경로로 이미지 표시됨
- 경로: `/images/blog/파일명.png`

### ✅ 파일 탐색기에서
```
public/
└── images/
    ├── blog/
    │   ├── yumia-growth-curve.png
    │   ├── game-screenshot1.png
    │   └── ...
    └── projects/
        ├── dashboard-preview.png
        ├── analysis-chart.png
        └── ...
```

---

## 💡 권장 사항

### 이미지 파일명 규칙
- **영어 소문자 사용**: `yumia-growth-curve.png` ✅
- **하이픈으로 단어 구분**: `game-analysis-chart.png` ✅
- **공백 사용 금지**: `Pasted image 20250925.png` ❌
- **의미 있는 이름**: `screenshot1.png` ❌ → `netmarble-dashboard.png` ✅

### 이미지 최적화
- **웹 최적화**: 가능하면 JPG (사진) 또는 PNG (스크린샷/차트)
- **적절한 크기**: 블로그용은 1920px 이하 권장
- **압축**: TinyPNG 등으로 용량 최적화

---

## 🔧 문제 해결

### Q: 이미지가 Typora에서 표시되지 않아요
**A**: Image Root Path가 `/images`로 설정되어 있는지 확인하세요.

### Q: 웹사이트에서 이미지가 안 보여요
**A**: 
1. 이미지가 `/public/images/blog/` 또는 `/public/images/projects/`에 있는지 확인
2. 마크다운 경로가 `/images/blog/파일명.png` 형식인지 확인
3. 개발 서버 재시작: `pnpm dev`

### Q: 기존 이미지 경로를 변경해야 하나요?
**A**: 네, 기존에 `/blog/attachment/` 형식으로 되어 있다면:
```markdown
<!-- 이전 -->
![](/blog/attachment/image.png)

<!-- 변경 후 -->
![](/images/blog/image.png)
```

---

## ✨ 장점 정리

1. ✅ **일관성**: Typora와 웹사이트에서 동일한 경로
2. ✅ **직관성**: `/images/blog/` - 의미가 명확
3. ✅ **관리 편의**: 모든 이미지가 한 곳에 모임
4. ✅ **확장성**: 새로운 카테고리 추가 쉬움
5. ✅ **표준 준수**: Astro 권장 구조 따름
