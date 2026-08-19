# UI/UX Concepts — Figma 직접 구현 가이드

각 개념별로 Figma에서 만들 컴포넌트/프레임 스펙. 값 그대로 사용 가능.

---

## 세팅 먼저

새 Figma 파일 만들고, 각 챕터마다 `800 × 600` 프레임 하나씩 만들면 됨.
컬러 스타일:
```
Black:    #111111
White:    #FFFFFF
Gray 100: #F5F5F5
Gray 200: #E5E5E5
Gray 400: #9E9E9E
Gray 600: #616161
Gray 800: #212121
Primary:  #4F46E5  (인디고)
Success:  #16A34A
Error:    #DC2626
Warning:  #D97706
```

---

## 01 | Affordances & Signifiers

**만들 것:** 버튼 3종 — "눌릴 것 같은 것 / 클릭 가능한 링크 / 눌릴 것 같지 않은 것" 비교

### Button A — 눌릴 것 같음 (잘 된 예)
```
Frame: 160 × 48, Radius: 8
Fill: #4F46E5
Shadow: Y=2, Blur=8, Spread=0, Color=#4F46E5 40%
Text: "계속하기", Inter SemiBold 15px, #FFFFFF
```

### Button B — 링크 텍스트
```
Frame: 없음 (텍스트만)
Text: "자세히 보기 →", Inter Regular 15px, #4F46E5
밑줄: Underline on
```

### Button C — 눌릴 것 같지 않음 (나쁜 예)
```
Frame: 160 × 48, Radius: 2
Fill: #F5F5F5
Border: 1px #E5E5E5
Text: "계속하기", Inter Regular 15px, #9E9E9E
(그림자 없음, 색 대비 낮음)
```

프레임에 세 개 나란히 놓고 레이블 달기: "Good / Link / Bad"

---

## 02 | Visual Hierarchy

**만들 것:** 카드 UI — 계층이 있는 것 vs 없는 것 비교

### 카드 A — 계층 있음
```
Frame: 320 × 200, Radius: 12, Fill: #FFFFFF
Shadow: Y=4, Blur=16, Color=#000000 10%
Padding: 24px 전체

콘텐츠 (위→아래):
  "UX 리서치의 기초"    Inter Bold 22px    #111111
  "아티클 · 5분 읽기"   Inter Regular 12px  #9E9E9E   (위에서 8px 아래)
  ——————————————————    높이 1px, Fill #E5E5E5  (위에서 16px 아래)
  "사용자 인터뷰, 설문, 관찰의 3가지 방법을 통해..."
                        Inter Regular 14px  #616161   (위에서 16px 아래)
                        Line height: 1.6
  "읽기"               Inter SemiBold 14px  #4F46E5  (위에서 20px 아래)
```

### 카드 B — 계층 없음 (나쁜 예)
```
위와 동일한 구조이지만:
모든 텍스트: Inter Regular 14px #616161
간격: 모두 8px
(크기, 굵기, 색상 차이 없애기)
```

---

## 03 | Grids, Layouts & Spacing

**만들 것:** 8px 그리드 기반 폼(Form) 레이아웃

### 폼 프레임
```
Frame: 400 × 480, Fill: #FFFFFF, Radius: 16
Shadow: Y=8, Blur=24, Color=#000000 12%
Padding: 40px

내부 레이아웃 (Auto Layout, Vertical, Gap: 24px):

  섹션 1 — 레이블 + 인풋 (Auto Layout Vertical, Gap: 8px)
    Text: "이름"         Inter SemiBold 14px  #111111
    Frame: 320 × 48, Radius: 8, Border: 1.5px #E5E5E5, Fill: #FFFFFF
    Padding: 0 16px, Placeholder: "홍길동", Regular 15px #9E9E9E

  섹션 2 — 레이블 + 인풋 (같은 구조)
    Text: "이메일"
    Placeholder: "hello@example.com"

  섹션 3 — 인풋 (같은 구조, 레이블: "비밀번호")

  버튼: 320 × 48, Radius: 8, Fill: #4F46E5
    Text: "시작하기", Inter SemiBold 15px, #FFFFFF
    (위에서 8px 추가 마진 — 버튼은 group과 분리감 주기)
```

레이아웃 그리드 설정: Column 4개, Margin 40px, Gutter 16px

---

## 04 | Typography & Font Sizing

**만들 것:** Type Scale 샘플 시트

```
Frame: 600 × 560, Fill: #FFFFFF, Padding: 48px
Auto Layout Vertical, Gap: 0

각 행 구성: 왼쪽에 텍스트, 오른쪽에 스펙 레이블

  "Display"      Inter Bold      48px / Line-height 56px   #111111
  ——  8px gap  ——
  "Heading 1"    Inter Bold      32px / 40px               #111111
  ——  8px gap  ——
  "Heading 2"    Inter SemiBold  24px / 32px               #111111
  ——  8px gap  ——
  "Heading 3"    Inter SemiBold  20px / 28px               #212121
  ——  8px gap  ——
  "Body Large"   Inter Regular   16px / 26px               #616161
  ——  8px gap  ——
  "Body"         Inter Regular   14px / 22px               #616161
  ——  8px gap  ——
  "Caption"      Inter Regular   12px / 18px               #9E9E9E
  ——  8px gap  ——
  "Label"        Inter Medium    12px / 16px  LetterSpacing+4%  #111111 대문자

각 항목 오른쪽에 작은 텍스트 스펙:
  Inter Regular 11px #9E9E9E: "48 / Bold / 56lh"
```

---

## 05 | Color Theory

**만들 것:** 컬러 팔레트 + 사용 예시 카드

### 팔레트 시트
```
Frame: 640 × 120, Padding: 0

컬러 스왓치 7개 (각 80 × 120, 붙여서):
  #EEF2FF  (Primary 50)
  #C7D2FE  (Primary 100)
  #818CF8  (Primary 300)
  #4F46E5  (Primary 600) ← 메인
  #3730A3  (Primary 800)
  #1E1B4B  (Primary 950)
  #111111  (Neutral 900)

각 스왓치 하단에:
  hex 값  Inter Bold 13px (배경 밝으면 #111111, 어두우면 #FFFFFF)
```

### 의미론적 색상 바
```
Frame: 640 × 80, Fill: #FFFFFF, Padding: 16px
Auto Layout Horizontal, Gap: 12px

4개 pill (각 Auto Layout, Padding: 8px 16px, Radius: 99):
  Fill: #DCFCE7  Text: "✓ 저장됨"   #16A34A  Inter Medium 13px
  Fill: #FEF2F2  Text: "✕ 오류"     #DC2626  Inter Medium 13px
  Fill: #FFFBEB  Text: "⚠ 주의"     #D97706  Inter Medium 13px
  Fill: #EFF6FF  Text: "ℹ 안내"     #2563EB  Inter Medium 13px
```

---

## 06 | Dark Mode

**만들 것:** 동일한 카드를 Light / Dark로 나란히

### Light 카드
```
Frame: 300 × 180, Radius: 16, Fill: #FFFFFF
Shadow: Y=4, Blur=20, Color=#000000 10%
Padding: 24px

  "알림 설정"   Inter SemiBold 18px  #111111
  "푸시 알림을 받을 항목을 선택하세요"  Regular 14px  #616161  (위 8px)
  ——  구분선 1px #E5E5E5  (위 20px)  ——
  토글 행: "새 댓글"  Regular 14px  #111111  /  토글 ON: Fill #4F46E5
```

### Dark 카드 (동일 위치에서 오른쪽 320px)
```
Frame: 300 × 180, Radius: 16, Fill: #1E1E2E
Shadow: Y=4, Blur=20, Color=#000000 40%
Padding: 24px

  "알림 설정"   Inter SemiBold 18px  #F1F1F3
  "푸시 알림을 받을 항목을 선택하세요"  Regular 14px  #8B8B9A  (위 8px)
  ——  구분선 1px #2E2E3E  (위 20px)  ——
  "새 댓글"  Regular 14px  #E1E1E9  /  토글 ON: Fill #818CF8 (채도 낮춤)
```

포인트: 배경은 순수 검정 아닌 #1E1E2E, 색상 채도 낮춤, 그림자 더 진하게

---

## 07 | Shadows

**만들 것:** Elevation 단계 시각화 (5단계)

```
Frame: 700 × 200, Fill: #F5F5F5, Padding: 40px
5개 정사각형 (각 80 × 80, Radius: 12, Fill: #FFFFFF) 간격 40px

  Level 1 (거의 없음):   Y=1, Blur=2,  Spread=0, #000000 6%
  Level 2 (카드):        Y=2, Blur=8,  Spread=0, #000000 8%
  Level 3 (드롭다운):    Y=4, Blur=16, Spread=0, #000000 10%
  Level 4 (모달):        Y=8, Blur=24, Spread=0, #000000 12%
  Level 5 (최상위):      Y=16, Blur=48, Spread=0, #000000 16%

각 사각형 아래 레이블: "lv.1" ~ "lv.5", Inter Regular 12px #9E9E9E
```

---

## 08 | Icons & Buttons

**만들 것:** 버튼 계층 3종 + 아이콘 버튼 세트

### 버튼 3종 (Auto Layout Horizontal, Gap: 16px)
```
Primary:
  160 × 48, Radius: 8, Fill: #4F46E5
  Text: "저장하기"  Inter SemiBold 15px  #FFFFFF

Secondary:
  160 × 48, Radius: 8, Fill: #FFFFFF, Border: 1.5px #4F46E5
  Text: "취소"  Inter SemiBold 15px  #4F46E5

Tertiary:
  160 × 48, Radius: 8, Fill: transparent (없음)
  Text: "더 보기"  Inter SemiBold 15px  #4F46E5
```

### 아이콘 버튼 (텍스트+아이콘 병행 vs 아이콘만)
```
아이콘+텍스트 버튼:
  Auto Layout Horizontal, Gap: 8px, Padding: 12px 20px
  Radius: 8, Fill: #4F46E5
  아이콘: 16×16 (Phosphor Icons에서 "Upload" 사용)
  Text: "업로드"  Inter SemiBold 14px  #FFFFFF

아이콘만 (Bad 예):
  동일하지만 아이콘만, 텍스트 없음
  레이블: "← 이건 뭐하는 버튼인지 모름"
```

---

## 09 | Feedback & States

**만들 것:** 버튼 6가지 상태 시트

```
Frame: 700 × 120, Fill: #F5F5F5, Padding: 24px
6개 버튼 (각 100 × 48, Radius: 8) 간격 12px

Default:
  Fill: #4F46E5
  Text: "제출하기"  SemiBold 14px  #FFFFFF

Hover:
  Fill: #4338CA  (약간 어둡게)
  Text: 동일

Active/Pressed:
  Fill: #3730A3  (더 어둡게)
  Shadow 없앰, Scale 살짝 작게 느낌 (98% 정도)
  Text: 동일

Focused:
  Fill: #4F46E5
  Border: 3px #818CF8  (Outline)
  Text: 동일

Disabled:
  Fill: #E5E5E5
  Text: "제출하기"  SemiBold 14px  #9E9E9E
  Cursor: not-allowed (설명 텍스트로)

Loading:
  Fill: #4F46E5
  내부에 스피너 아이콘(16px) + "처리 중..."  Regular 14px  #FFFFFF 70%
```

---

## 10 | Micro Interactions

**만들 것:** 인터랙션 Before/After 프레임 쌍 (Figma Prototype 연결용)

### 좋아요 버튼 토글
```
Frame A (Before):
  48 × 48, Radius: 99, Fill: #F5F5F5
  하트 아이콘: 24×24, Stroke: 1.5px #9E9E9E (채우기 없음)

Frame B (After):
  48 × 48, Radius: 99, Fill: #FEF2F2
  하트 아이콘: 24×24, Fill: #DC2626  (채워진 하트)
  (크기: 26×26으로 살짝 키움 — Bounce 느낌)

Prototype 연결:
  A → B: On Click / Smart Animate / Spring (Stiffness 400, Damping 30) / 300ms
  B → A: On Click / Smart Animate / Ease Out / 200ms
```

### 체크박스 완료
```
Frame A (Before):
  24 × 24, Radius: 6, Fill: #FFFFFF, Border: 1.5px #9E9E9E

Frame B (After):
  24 × 24, Radius: 6, Fill: #4F46E5, Border: 1.5px #4F46E5
  체크 아이콘: 14×14, #FFFFFF

Prototype: On Click / Smart Animate / Ease Out / 200ms
```

---

## 11 | Overlays

**만들 것:** Modal + Toast + Tooltip 3종

### Modal
```
배경 딤 레이어: 1440 × 960, Fill: #000000 50%

모달 카드: 480 × auto, Radius: 20, Fill: #FFFFFF
Shadow: Y=24, Blur=64, Color=#000000 20%
Padding: 40px

  제목: "정말 삭제할까요?"  Inter Bold 20px  #111111
  본문: "이 작업은 되돌릴 수 없습니다."  Regular 15px  #616161  (위 8px)

  버튼 row (위 32px, Auto Layout Horizontal Gap 12px, 우측 정렬):
    취소: 100 × 44, Radius 8, Fill #F5F5F5, Text "취소" SemiBold 14px #111111
    삭제: 100 × 44, Radius 8, Fill #DC2626, Text "삭제" SemiBold 14px #FFFFFF
```

### Toast
```
Frame: 320 × 52, Radius: 10, Fill: #111111
Shadow: Y=8, Blur=24, Color=#000000 20%
Auto Layout Horizontal, Gap: 12px, Padding: 0 16px
Align: Center

  체크 아이콘: 18×18, Fill: #16A34A
  Text: "변경사항이 저장되었습니다"  Regular 14px  #FFFFFF

(화면 하단 중앙에서 24px 위에 위치)
```

### Tooltip
```
Frame: auto × 32, Radius: 6, Fill: #212121
Padding: 6px 12px

  Text: "마지막 수정: 2시간 전"  Regular 12px  #FFFFFF

아래쪽 화살표: 8×4 삼각형, Fill: #212121
(타겟 요소에서 8px 위에 위치)
```

---

## 실습 순서 추천

1. 01 Affordances → 02 Visual Hierarchy (가장 임팩트 큰 비교 작업)
2. 07 Shadows (빠르고 결과 잘 보임)
3. 09 States (체계적 컴포넌트 감 익히기)
4. 나머지 순서대로
