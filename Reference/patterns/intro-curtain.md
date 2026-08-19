# 인트로 커튼

**무엇** - 로드 시 전체 화면 오버레이. 워드마크 + 진행 표시가 보이다가 위아래로 갈라지며 사이트가 드러난다.

```css
.intro{
  position:fixed; inset:0; z-index:100;
  background:#050505; color:#fff; overflow:hidden;
}
.intro-panel{                       /* 위아래 두 장 */
  position:absolute; left:0;
  width:100%; height:50%;
  background:#050505; z-index:-1;
}
.intro-panel-a{ top:0;    border-bottom:1px solid #27272a }
.intro-panel-b{ bottom:0 }

.intro-word{                        /* 거대 워드마크 */
  position:absolute; inset:0;
  display:flex; align-items:center; justify-content:center;
  font: 500 clamp(110px,28vw,430px)/.7 Geist;
  letter-spacing:-.11em;
  overflow:hidden;
}
.intro-progress{
  position:absolute; bottom:34px; left:3.2vw; right:3.2vw;
  display:grid; grid-template-columns:auto 1fr; align-items:center; gap:24px;
  font: 9px "JetBrains Mono", monospace; letter-spacing:.14em; color:#a1a1aa;
}
.intro-progress i{ height:1px; background:#fff; transform:scaleX(0); transform-origin:0 }
```

**시퀀스**
```js
const tl = gsap.timeline({ defaults:{ ease:"expo.out" } });
tl.to(".intro-progress i", { scaleX:1, duration:1.2, ease:"power2.inOut" })
  .to(".intro-word span",  { yPercent:-110, duration:.9, stagger:.05 }, "-=.2")
  .to(".intro-panel-a",    { yPercent:-100, duration:1.1 }, "<.1")
  .to(".intro-panel-b",    { yPercent: 100, duration:1.1 }, "<")
  .set(".intro", { display:"none" });
```

**반드시 지킬 것**

1. **reduced-motion에서 통째로 없앤다.** 페이드아웃이 아니라 `display:none`이다.
```css
@media (prefers-reduced-motion: reduce){ .intro{ display:none } }
```

2. **1.8초를 넘기지 않는다.** 재방문자에게는 순수한 손해다.

3. **재방문 시 건너뛴다.**
```js
if (sessionStorage.getItem("seen")) document.querySelector(".intro").remove();
else sessionStorage.setItem("seen", "1");
```

4. **뒤 콘텐츠는 이미 렌더돼 있어야 한다.** 커튼은 가리기만 하고 로딩을 미루지 않는다. 진행 바는 실제 진행률이 아니라 연출이다. 진짜 로딩을 기다리게 만들면 안 된다.

**calm 변형** - 커튼을 쓰지 말 것. 개인 사이트/포트폴리오에서 인트로는 대체로 마이너스다. 대신 히어로 콘텐츠에 로드 즉시 [clip-line-reveal](clip-line-reveal.md)을 한 번 재생하면 "등장했다"는 인상은 그대로 남고 대기 시간은 0이다.

**출처** - joel-jeon (다크 테마 `.intro`)
