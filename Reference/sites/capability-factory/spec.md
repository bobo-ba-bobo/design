# capability-factory

https://capability-factory-website.vercel.app/
분석일 2026-08-18 | 빌드 해시 `index-D4obzc7W.css` / `index-DDiK8_rj.js`

프로덕트/웨이트리스트 사이트. joel-jeon과 같은 사람, 같은 DNA. 개인 사이트가 에디토리얼이라면 이쪽은 프로덕트 쪽으로 무게가 옮겨간 버전이다.

## 스택

- Vite + React, SPA 셸 (`<div id="root">` 하나, HTML 644바이트)
- GSAP + ScrollTrigger 본격 사용 (번들 내 참조 56회, joel-jeon은 12회)
- three.js 흔적 (히어로 `<canvas>` = `.continuity-field`)
- CSS 98KB. 여기서 절반 이상이 self-host 가변폰트 `@font-face`
- BEM 네이밍 (`.continuum-hero__word--muted`)

joel-jeon과의 차이는 폰트를 self-host 한다는 것. Geist Variable을 `woff2-variations`로 직접 서빙하고 `unicode-range`로 라틴/키릴/베트남어를 쪼갠다. Google Fonts `@import` 대비 렌더 블로킹이 없다.

## 토큰

**중요** - 이 사이트는 완전한 테마를 두 벌 갖고 있고, 루트가 아니라 스코프 블록에 정의한다.

```css
/* 테마 A: continuum (애시드) */
.continuum{ --acid:#e7ff62; --ink:#0a0a0a; --paper:#efebe0; --paper-dark:#d9d5ca }

/* 테마 B: aura (사이언/인디고) */
--acid:#06b6d4; --ink:#030712; --paper:#f8fafc; --paper-dark:#18181b;
--aura-primary:#4f46e5; --aura-accent:#06b6d4; --aura-surface:#18181b;
--aura-border:#27272a; --aura-muted:#a1a1aa;
--story-indigo:#4f46e5; --story-cyan:#06b6d4; --story-line:rgba(255,255,255,.13)
```

`.route-switcher` 클래스가 있는 걸로 봐서 라우트별로 테마를 바꾼다. joel-jeon이 두 번째 `:root`로 통째 리스킨한 것과 같은 발상이고, 이쪽이 더 정돈된 형태다.

→ 패턴화: [patterns/theme-token-block.md](../../patterns/theme-token-block.md)

**런타임 변수** (JS가 씀):
```css
--pointer-x: 50%;  --pointer-y: 50%;   /* 마우스 추적 */
--ocean-x: 0px;    --ocean-y: 0px;  --ocean-scale: 1.045;   /* 패럴랙스 */
```
JS는 변수만 갱신하고 스타일은 CSS가 다 한다. 레이아웃 계산을 JS에서 빼는 좋은 분업.

## 타이포

| 역할 | 폰트 | 스펙 |
|---|---|---|
| 전부 | Geist Variable (100-900) | 가변축 하나로 다 처리 |
| 디스플레이 | Geist 520 | `clamp(3.65rem, 8.15vw, 9.35rem)` / `line-height:.88` / `letter-spacing:-.078em` |
| 마이크로 | JetBrains Mono | `.48-.71rem` / `letter-spacing:.11-.12em` / 대문자 |

`font-weight:520`을 쓴다. 가변폰트라 500과 600 사이를 집을 수 있다. 정적 폰트로는 못 하는 것.

단위가 `rem` 기반이라 joel-jeon(px)보다 접근성 배율에 잘 따라온다.

## 텍스처 3층

히어로 하나에 세 겹이 겹쳐 있다.

```css
.continuum-hero{
  background: radial-gradient(circle at 77% 55%, rgba(231,255,98,.07), transparent 22rem), #090909;
  isolation: isolate;
}
/* SVG feTurbulence 그레인, 인라인 데이터 URI */
.continuum-hero:after{
  background-image:url("data:image/svg+xml,...feTurbulence baseFrequency='.95' numOctaves='4'...");
  opacity:.24; mix-blend-mode:soft-light;
}
/* canvas 필드에 위아래 페이드 마스크 */
.continuity-field--hero{
  mask-image: linear-gradient(to bottom, transparent 0, #000 8%, #000 88%, transparent 100%);
  filter: saturate(1.05) contrast(1.08);
}
```

→ [patterns/grain-overlay.md](../../patterns/grain-overlay.md)

`mix-blend-mode:soft-light` + `opacity:.24`가 핵심. 그냥 얹으면 더러워지고, soft-light면 명암에 반응해서 필름 그레인처럼 앉는다.

## 모션

이징 커브 하나. `--ease-out: cubic-bezier(.16, 1, .3, 1)`. joel-jeon과 동일한 값이다.

keyframes 5개뿐:
```
continuity-field-reveal   히어로 캔버스 등장 (1.9s)
continuum-scroll          스크롤 큐
current-flow              흐름 표시
ocean-surface-drift       배경 드리프트
vision-marquee            무한 가로 흐름
```

나머지는 전부 GSAP ScrollTrigger. 선언적 애니메이션은 최소로 두고 스크롤 연동은 JS에 몰아준 구조.

## 섹션 문법

```
continuum-nav       고정 헤더
continuum-hero      canvas 필드 + 3층 텍스처 + 좌표 라벨
continuum-intro
continuum-story  /  continuum-boundary
acquisition-scene / -story / -chapter / -map / -toggle / -request
current-visual  /  current-proof        (CSS 규칙 최다 = 사이트의 중심)
minimum-graph / resume-graph
vision-frontier
ocean-flight
continuum-bento
continuum-waitlist  +  waitlist-form
wordmark-footer
```

이름이 다 개념어다 (`acquisition`, `boundary`, `frontier`, `continuum`). 유틸리티 클래스가 아니라 내러티브에 클래스를 붙였다. 재사용은 포기하고 이 사이트 안에서의 읽기 쉬움을 택한 것.

## 반응형

브레이크포인트가 `767 / 780 / 920 / 980 / 1180 / 359`. 컴포넌트마다 필요할 때 잡았지 통일된 스케일이 아니다. 소규모 사이트에선 이게 오히려 실용적이다.

```css
@media (max-width:767px), (prefers-reduced-motion:reduce){ ... }
```
모바일과 reduced-motion을 같은 규칙으로 묶는다. 둘 다 "핀/패럴랙스 끄고 그냥 세로로 쌓아라"라서 처리가 같다. 영리한 축약.

## 뭘 가져올 것인가

**가져올 것** - 스코프 토큰 블록으로 테마 갈아끼우기, CSS 변수를 JS 런타임 채널로 쓰기, 가변폰트 self-host, 그레인 soft-light, 모바일과 reduced-motion 묶기.
**보성님 사이트엔 안 맞는 것** - canvas 히어로, 3층 텍스처, 애시드 라임, 개념어 클래스명.

차분하게 낮추는 법은 [calm-dial.md](../../calm-dial.md).
