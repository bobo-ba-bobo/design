# 클립 라인 리빌

**무엇** - 헤드라인이 한 줄씩 아래에서 올라오며 등장. 스크롤 사이트에서 가장 많이 보이는 기법이고, 구조는 두 줄이다.

**CSS**
```css
.clip{ display:block; overflow:hidden; padding-bottom:.08em }
.clip > span{ display:block }
```

`padding-bottom:.08em`이 없으면 `g`, `y` 같은 디센더가 잘린다. 거의 모든 구현이 여기서 실수한다.

**마크업**
```html
<h1>
  <span class="clip"><span class="line">Continue past</span></span>
  <span class="clip"><span class="line">the edge</span></span>
</h1>
```

**GSAP**
```js
gsap.from(".line", {
  yPercent: 110,          /* 100이 아니라 110. 여유를 둬야 완전히 숨음 */
  duration: 1.1,
  ease: "expo.out",       /* = cubic-bezier(.16,1,.3,1) 계열 */
  stagger: 0.08,
  scrollTrigger: { trigger: "h1", start: "top 80%" }
});
```

**GSAP 없이 (IntersectionObserver)**
```css
.line{ transform: translateY(110%); transition: transform 1.1s cubic-bezier(.16,1,.3,1) }
.is-in .line{ transform: translateY(0) }
.is-in .line:nth-child(2){ transition-delay: .08s }
```
```js
new IntersectionObserver((es)=>es.forEach(e=>e.isIntersecting&&e.target.classList.add("is-in")),
  {threshold:.3}).observe(document.querySelector("h1"));
```

**주의**
- `stagger`는 .06-.10초. 그 이상이면 느려 보인다
- 접히는 줄 수는 3줄까지. 그 이상이면 마지막 줄까지 기다리기 지루하다
- 첫 화면(above the fold) 헤드라인은 스크롤 트리거가 아니라 로드 즉시 재생

**reduced-motion**
```css
@media (prefers-reduced-motion: reduce){
  .line{ transform:none; transition:none }
}
```

**calm 변형** - `yPercent`를 110 대신 40으로 줄이고 `opacity` 페이드를 같이 준다. 움직임이 작아서 "등장"이 아니라 "이미 거기 있었던 것"처럼 보인다.

**출처** - joel-jeon (`.clip` / `.hero-line`), capability-factory (`.continuum-hero__clip`)
