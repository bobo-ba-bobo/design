# 섹션 = 하나의 방

**무엇** - 섹션을 구분선이 아니라 full-bleed 배경색으로 나눈다. 스크롤할 때마다 방을 옮겨 다니는 느낌.

```css
.hero        { background: var(--paper) }
.manifesto   { background: var(--paper) }
.origin      { background: var(--ink); color: #f2efe7 }   /* 반전 */
.audit-story { background: #ff6635 }                       /* 오렌지 */
.now         { background: #c7baff }                       /* 라벤더 */
.future      { background: #f4efe5 }
footer       { background: var(--ink); color: #f4efe5 }
```

**규칙**
- 섹션 사이에 마진을 주지 않는다. 색이 맞닿아야 경계가 선명하다
- 반전 섹션(`--ink` 배경)은 2-3개마다 하나. 리듬을 만든다
- 색 블록 안에서는 그 색이 유일한 장식이다. 그 위에 또 카드나 그림자를 얹지 않는다

**색 고르기** - 채도 높은 색을 쓰려면 중성 베이스가 압도적으로 많아야 한다. joel-jeon은 7개 섹션 중 2개만 컬러다.

**calm 변형** - 색상 대신 **명도**만 바꾼다. 같은 뉴트럴 축에서 3-4단계.

```css
.a{ background:#fafafa } .b{ background:#f0f0ef } .c{ background:#111; color:#fafafa }
```

반전 섹션 하나만 있어도 리듬은 생긴다. bosungbaik.com의 흑백 제약과 정확히 호환된다.

**출처** - joel-jeon
