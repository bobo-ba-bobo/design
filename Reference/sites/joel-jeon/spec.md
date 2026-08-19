# joel-jeon

https://joel-personal-website.vercel.app/
분석일 2026-08-18 | 빌드 해시 `main-w_zJaGbV.css` / `main-CQjIakGg.js`

개인 사이트. 파운더 스토리 + 셀렉티드 워크. Capability Factory와 같은 사람이 만들었고 같은 디자인 DNA를 쓴다.

## 스택

- Vite + React (`jsx-runtime` 청크 분리, 모듈 프리로드)
- GSAP + ScrollTrigger (`i.registerPlugin(n)`)
- 손으로 쓴 CSS 42KB. Tailwind 없음, UI 킷 없음, 컴포넌트 라이브러리 없음
- 폰트는 Google Fonts `@import` 한 줄

## 토큰

전체 팔레트가 변수 4개다.

```css
:root{
  --ink:   #11110f;      /* 거의 검정, 살짝 따뜻함 */
  --paper: #e9e6df;      /* 종이색 오프화이트 */
  --acid:  #d6ff43;      /* 라임 액센트 */
  --line:  #11110f2e;    /* ink 18% 알파 = 유일한 구분선 */
}
```

섹션 배경은 토큰이 아니라 리터럴로 박혀 있다. `#ff6635` 오렌지, `#c7baff` 라벤더, `#f4efe5` 웜 그레이.

**주목할 점** - 파일 아래쪽에 두 번째 `:root`가 있어서 같은 변수 4개를 다크로 덮어쓴다.

```css
:root{ --ink:#f4f4f4; --paper:#050505; --acid:#fff; --line:#27272a;
       font-family:Geist }
```

리디자인 전체가 토큰 스왑 + 오버라이드 40여 줄이다. 이게 변수 4개짜리 팔레트의 실질적 이득이다.

## 타이포

| 역할 | 폰트 | 스펙 |
|---|---|---|
| 디스플레이 | Manrope 500 (다크: Geist) | `clamp(64px,9.5vw,158px)` / `line-height:.79` / `letter-spacing:-.075em` |
| 세리프 액센트 | Playfair Display italic 500 | 디스플레이 안 한두 단어에만 |
| 본문 | Manrope 400 | 14-20px / `line-height:1.5-1.6` |
| 마이크로 라벨 | DM Mono (다크: JetBrains Mono) | 9-11px / `letter-spacing:.09-.15em` / 대문자 |

핵심은 **대비율**이다. 디스플레이 158px와 라벨 9px가 같은 화면에 있다. 17:1. 트래킹도 반대 방향으로 간다 (`-.075em` vs `+.12em`). 중간 크기가 거의 없다.

측정 단위는 `ch`. `max-width:12ch` (히어로), `18ch` (매니페스토), `29ch`, `39ch`, `42ch` (본문). px가 아니라 글자수로 줄길이를 잡는다.

## 공간

여백 단위가 `vh`다. 스크롤 시간으로 공간을 잰다.

```css
.manifesto  { min-height:130vh; padding:22vh 8vw 18vh }
.origin     { padding:18vh 5vw }
.origin-copy > p          { margin-bottom:30vh }
.origin-copy blockquote   { margin-bottom:35vh }
.audit-story{ min-height:110vh; padding:18vh 8vw }
.future     { min-height:150vh }
footer      { min-height:100vh }
```

가로 여백은 `vw`. `3.2vw` (nav/hero), `4vw`, `5vw`, `8vw`.

의도적 비대칭:
```css
.origin-copy blockquote { margin-left:-20vw }   /* 그리드 밖으로 삐져나감 */
.statement              { margin-left:-20vw }
.manifesto > p          { margin:0 0 13vh auto } /* 오른쪽 밀착 */
.future > p             { margin:14vh 0 20vh auto }
.future-main span:nth-child(2){ margin-left:8vw }  /* 줄마다 들여쓰기 계단 */
.future-main span:nth-child(3){ margin-left:20vw }
```

## 섹션 문법

각 섹션이 하나의 방이다. 구분선이 아니라 배경색이 통째로 바뀐다.

| 섹션 | 배경 | 하는 일 |
|---|---|---|
| `.hero` | paper + 그리드 오버레이 + 궤도 원 | 158px 헤드라인 |
| `.manifesto` | paper | 한 문장씩, 사이에 13vh |
| `.origin` | ink (반전) | 40/60 그리드, 왼쪽 sticky |
| `.audit-story` | `#ff6635` 오렌지 | 360px 숫자 + 본문 |
| `.now` | `#c7baff` 라벤더 | 가로 스크롤 레일 |
| `.selected` | paper | sticky 카드 스택 |
| `.future` | `#f4efe5` | 계단식 들여쓰기 헤드라인 |
| `footer` | ink | 390px 워드마크 |

## 모션

이징 커브가 파일 전체에 하나. `cubic-bezier(.16, 1, .3, 1)`.

1. **클립 라인 리빌** - `.clip{overflow:hidden}` + 자식 span `translateY`. → [patterns/clip-line-reveal.md](../../patterns/clip-line-reveal.md)
2. **sticky 카드 스택** - `.work-card{position:sticky; top:8vh; transform-origin:top}` → [patterns/sticky-card-stack.md](../../patterns/sticky-card-stack.md)
3. **가로 레일** - `.now-rail{width:max-content; height:86vh}` 핀 후 x 이동 → [patterns/horizontal-rail.md](../../patterns/horizontal-rail.md)
4. **인트로 커튼** - `.intro-panel` 두 장이 위아래로 갈라짐 → [patterns/intro-curtain.md](../../patterns/intro-curtain.md)
5. **스크롤 진행바** - `.page-progress{transform:scaleX(0)}` → [patterns/scroll-progress-bar.md](../../patterns/scroll-progress-bar.md)

호버는 딱 두 개. 밑줄이 왼→오 늘어나기(`right:100%` → `right:0`), 원형 링크가 `rotate(-35deg)` + 액센트 배경.

## 텍스처

```css
/* 5vw 그리드, ink 4% 알파, 위아래 페이드아웃 마스크 */
.hero:before{
  background-image:linear-gradient(#11110f0b 1px,#0000 1px),
                   linear-gradient(90deg,#11110f0b 1px,#0000 1px);
  background-size:5vw 5vw;
  mask-image:linear-gradient(#0000,#000 20% 75%,#0000);
}
```
→ [patterns/grid-overlay-masked.md](../../patterns/grid-overlay-masked.md)

궤도 링(`.hero-orbit`)은 `48vw` 정원 + 안쪽 링 + 액센트 점 하나. 이미지 없이 CSS만.

## 접근성

```css
@media (prefers-reduced-motion:reduce){
  html{scroll-behavior:auto}
  *{transition:none!important; animation:none!important}
  .intro{display:none}   /* 인트로 커튼 자체를 없앰 */
}
```

## 뭘 가져올 것인가

**가져올 것** - 타입 대비율, vh 여백, 액센트 하나, ch 단위 줄길이, 이징 하나, reduced-motion 처리.
**보성님 사이트엔 안 맞는 것** - 라임 액센트, 오렌지/라벤더 색 블록, Playfair 이탤릭, 158px 헤드라인.

차분하게 낮추는 법은 [calm-dial.md](../../calm-dial.md).
