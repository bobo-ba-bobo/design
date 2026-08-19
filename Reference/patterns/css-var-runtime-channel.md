# CSS 변수를 JS 런타임 채널로

**무엇** - JS는 CSS 변수만 갱신하고, 스타일 계산은 전부 CSS가 한다. 마우스 추적, 패럴랙스, 스크롤 진행률에 쓴다.

```css
.scene{
  --pointer-x: 50%;
  --pointer-y: 50%;
  --ocean-x: 0px;
  --ocean-y: 0px;
  --ocean-scale: 1.045;

  background: radial-gradient(circle at var(--pointer-x) var(--pointer-y),
                              rgba(231,255,98,.10), transparent 40%);
}
.scene__layer{
  transform: translate3d(var(--ocean-x), var(--ocean-y), 0) scale(var(--ocean-scale));
}
```

```js
const scene = document.querySelector(".scene");
let raf = null, mx = 0, my = 0;

scene.addEventListener("pointermove", e => {
  const r = scene.getBoundingClientRect();
  mx = ((e.clientX - r.left) / r.width)  * 100;
  my = ((e.clientY - r.top)  / r.height) * 100;
  if (!raf) raf = requestAnimationFrame(apply);       /* 프레임당 1회로 제한 */
});

function apply(){
  raf = null;
  scene.style.setProperty("--pointer-x", mx + "%");
  scene.style.setProperty("--pointer-y", my + "%");
  scene.style.setProperty("--ocean-x", (mx - 50) * -0.4 + "px");
  scene.style.setProperty("--ocean-y", (my - 50) * -0.4 + "px");
}
```

**왜 이렇게 하나**
- JS가 건드리는 프로퍼티가 변수 하나뿐이라, 그 변수를 쓰는 레이어가 몇 개든 코드는 안 늘어난다
- 스타일 로직이 CSS에 남아서 반응형/테마/`prefers-reduced-motion` 처리가 한 군데서 된다
- `requestAnimationFrame` 게이트로 프레임당 1회 write. `pointermove`는 초당 수백 번 온다

**reduced-motion**
```css
@media (prefers-reduced-motion: reduce){
  .scene__layer{ transform:none }     /* 변수는 갱신돼도 무시됨 */
}
```
JS를 안 고쳐도 꺼진다. 이게 이 구조의 가장 큰 이득이다.

**주의** - `transform`, `opacity`, `background-position`처럼 컴포지터에서 처리되는 프로퍼티에만 쓴다. `width`나 `top`에 물리면 매 프레임 레이아웃이 돈다.

**calm 변형** - 마우스 추적을 빼고 스크롤 진행률만 변수로 넘긴다. `--scroll: 0..1` 하나로 배경 명도나 보더 알파를 아주 미세하게 움직인다.

**출처** - capability-factory (`--pointer-x/y`, `--ocean-x/y/scale`)
