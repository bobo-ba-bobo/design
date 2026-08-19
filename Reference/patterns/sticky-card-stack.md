# sticky 카드 스택

**무엇** - 카드들이 스크롤하면서 서로 위에 겹쳐 쌓인다. JS 없이 CSS만으로 80% 된다.

**CSS만으로**
```css
.stack{ max-width:1200px; margin:auto }

.card{
  position: sticky;
  top: 8vh;                    /* 여기서 멈춤 */
  height: 78vh;
  min-height: 600px;
  margin-bottom: 16vh;         /* 이 값이 카드 사이 스크롤 거리 */
  transform-origin: top;       /* GSAP로 scale 줄 때 위를 고정 */
  border: 1px solid var(--ink);
  overflow: hidden;
  padding: 30px;
}
```

**핵심 조건**
- 부모에 `overflow:hidden`이 있으면 sticky가 죽는다. 조상 체인을 확인할 것
- `height`가 `top` + 카드높이 < 100vh 여야 다음 카드가 올라오는 게 보인다. `top:8vh` + `78vh` = 86vh
- `margin-bottom`이 카드 간 스크롤 거리다. 이걸로 속도를 조절한다

**GSAP로 깊이감 추가 (선택)**
```js
gsap.utils.toArray(".card").forEach((card, i, arr) => {
  if (i === arr.length - 1) return;              /* 마지막은 그대로 */
  gsap.to(card, {
    scale: 0.92, opacity: 0.6,
    ease: "none",
    scrollTrigger: { trigger: arr[i+1], start:"top bottom", end:"top top", scrub:true }
  });
});
```

`transform-origin:top`이 있어야 축소될 때 위쪽이 안 밀린다.

**카드 내부 레이아웃** - 콘텐츠를 아래로 붙이고 배경에 거대한 숫자를 깐다.
```css
.card__mark{                       /* 40vw 짜리 번호, 8% 투명도 */
  position:absolute; top:.01em; right:-.05em;
  font: 700 40vw/.8 Manrope;
  opacity:.08; letter-spacing:-.15em;
}
.card__body{
  position:absolute; bottom:30px; left:30px; right:30px;
  display:grid; grid-template-columns:1fr 1fr; gap:5vw; align-items:end;
}
```

**모바일** - `grid-template-columns:1fr`로 무너뜨리고 높이를 `72vh`로 줄인다. sticky는 유지해도 괜찮다.

**calm 변형** - 겹치지 않게 한다. `position:sticky`는 유지하되 카드마다 배경을 불투명하게 두고 `scale`/`opacity` 애니메이션은 뺀다. 쌓이는 대신 차례로 교체되는 느낌이 된다.

**출처** - joel-jeon (`.work-card`)
