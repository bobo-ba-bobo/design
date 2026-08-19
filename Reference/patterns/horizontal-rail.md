# 가로 스크롤 레일

**무엇** - 섹션을 화면에 고정(pin)하고, 세로 스크롤을 가로 이동으로 바꾼다.

**CSS**
```css
.rail-section{ height:100vh; overflow:hidden; padding:5vh 4vw }

.rail{
  display:flex; align-items:center;
  width: max-content;          /* 콘텐츠만큼 늘어남. 이게 핵심 */
  height: 86vh;
  gap: 10vw;
  padding-left: 10vw;
}
.rail > article{ width:70vw; max-width:950px }
```

**GSAP**
```js
const rail = document.querySelector(".rail");
gsap.to(rail, {
  x: () => -(rail.scrollWidth - window.innerWidth),
  ease: "none",
  scrollTrigger: {
    trigger: ".rail-section",
    pin: true,
    scrub: 1,                                              /* 1 = 약간의 관성 */
    end: () => "+=" + (rail.scrollWidth - window.innerWidth),
    invalidateOnRefresh: true                              /* 리사이즈 대응 */
  }
});
```

**주의**
- `end`와 `x`를 함수로 써야 리사이즈 때 다시 계산된다. 하드코딩하면 모바일 회전에서 깨진다
- 아이템은 3-5개. 그 이상이면 사용자가 갇힌 느낌을 받는다
- `scrub:1`이 `scrub:true`보다 부드럽다. 0.5-1.5 사이에서 조절
- pin 구간에서는 스크롤 진행 표시가 있으면 좋다 ([scroll-progress-bar.md](scroll-progress-bar.md))

**모바일과 reduced-motion에서 끄기** - capability-factory가 쓰는 방식. 둘을 같은 규칙으로 묶는다.
```css
@media (max-width:767px), (prefers-reduced-motion:reduce){
  .rail-section{ height:auto; overflow:visible }
  .rail{ width:auto; height:auto; flex-direction:column; gap:6vh; padding-left:0 }
  .rail > article{ width:auto }
}
```
```js
if (window.matchMedia("(max-width:767px),(prefers-reduced-motion:reduce)").matches) {
  /* ScrollTrigger 아예 만들지 않음 */
}
```

**calm 변형** - pin을 쓰지 말고 그냥 `overflow-x:auto` + `scroll-snap-type:x mandatory`로 둔다. 사용자가 직접 미는 가로 리스트. 스크롤 하이재킹이 없어서 훨씬 얌전하다.

```css
.rail{ display:flex; gap:4vw; overflow-x:auto; scroll-snap-type:x mandatory;
       scrollbar-width:none }
.rail > article{ scroll-snap-align:start; flex:0 0 70vw }
```

**출처** - joel-jeon (`.now-rail`)
