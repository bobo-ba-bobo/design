# 모션 규율: 커브 하나, 시간 세 개

**무엇** - 사이트 전체에서 이징 커브를 하나만 쓴다. duration도 3-4개로 제한한다.

```css
:root{
  --ease-out: cubic-bezier(.16, 1, .3, 1);   /* joel-jeon과 capability-factory가 쓰는 값 */
  --t-fast: .25s;    /* 호버, 색 전환 */
  --t-base: .45s;    /* UI 상태 변화 */
  --t-slow: 1.1s;    /* 등장, 리빌 */
}
* { transition-timing-function: var(--ease-out) }
```

GSAP에서 같은 커브는 `ease:"expo.out"` 계열이다. 정확히 맞추려면:
```js
gsap.defaults({ ease: CustomEase.create("out", "M0,0 C.16,1 .3,1 1,1"), duration: 1.1 });
/* CustomEase 없으면 expo.out으로 충분히 근사 */
```

**왜 하나인가** - 커브가 여러 개면 요소마다 "성격"이 달라져서 산만해진다. 하나로 통일하면 사이트 전체가 같은 물리 법칙 안에 있는 것처럼 느껴진다. 두 사이트 모두 CSS 파일 전체에 커브가 하나다.

**`cubic-bezier(.16,1,.3,1)`의 성격** - 초반에 확 나가고 끝에서 길게 정착한다. 등장 애니메이션에 맞고, 사라지는 데는 안 맞는다. 사라질 때는 그냥 `ease-in` 짧게(.2s) 쓰거나 아예 즉시 없앤다.

**keyframes는 최소로** - capability-factory는 98KB CSS에 `@keyframes`가 5개다. 나머지는 전부 스크롤 연동(GSAP)이다. 무한 루프 애니메이션(마퀴, 드리프트, 펄스)만 keyframes로 두고, 스크롤에 반응하는 건 JS에 몰아주는 분업.

**호버는 두 종류까지** - joel-jeon 전체의 호버가 두 개다.
```css
/* 1. 밑줄이 왼쪽에서 오른쪽으로 늘어남 */
a::after{ content:""; position:absolute; bottom:-5px; left:0; right:100%;
          height:1px; background:currentColor; transition:all .35s }
a:hover::after{ right:0 }

/* 2. 원형 링크 회전 + 액센트 반전 */
.round{ transition:all .3s }
.round:hover{ background:var(--acid); color:var(--ink); transform:rotate(-35deg) }
```

**reduced-motion은 전역으로 한 번**
```css
@media (prefers-reduced-motion: reduce){
  html{ scroll-behavior:auto }
  *{ transition:none !important; animation:none !important }
  .intro{ display:none }
}
```
`scroll-behavior:smooth`를 되돌리는 걸 빼먹는 경우가 많다. 스무스 스크롤은 전정기관에 가장 부담되는 요소다.

**calm 변형** - 커브를 `cubic-bezier(.4,0,.2,1)`(표준 ease-out)으로 바꾸고 `--t-slow`를 .6s로 줄인다. 오버슛 느낌이 사라지고 담백해진다. 스크롤 연동 애니메이션은 등장 페이드 하나만 남긴다.

**출처** - joel-jeon, capability-factory (동일한 커브)
