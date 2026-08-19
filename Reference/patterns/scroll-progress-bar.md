# 스크롤 진행 바

**무엇** - 페이지 상단/네비 하단에 1px 선. 읽은 만큼 채워진다.

```css
.progress{
  position:absolute; left:0; right:0; bottom:-1px;
  height:1px; background:var(--ink);
  transform: scaleX(0);
  transform-origin: 0;           /* 왼쪽 고정. 이거 없으면 가운데서 퍼짐 */
}
```

**CSS만으로 (스크롤 연동 애니메이션)** - 최신 브라우저.
```css
@supports (animation-timeline: scroll()){
  .progress{
    animation: grow linear both;
    animation-timeline: scroll(root block);
  }
  @keyframes grow{ to{ transform: scaleX(1) } }
}
```

**GSAP 폴백**
```js
gsap.to(".progress", {
  scaleX: 1, ease: "none",
  scrollTrigger: { trigger: document.body, start:"top top", end:"bottom bottom", scrub:true }
});
```

**왜 `transform`인가** - `width`를 애니메이션하면 매 프레임 레이아웃이 다시 계산된다. `transform:scaleX`는 컴포지터에서만 돌아서 공짜다. 진행 바는 스크롤 내내 돌아가므로 이 차이가 크다.

**같이 쓰는 것** - 고정 네비.
```css
.nav{
  position: fixed; top:0; left:0; right:0;
  background: #050505b8;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid #ffffff14;
}
```

**calm 변형** - 그대로 써도 조용하다. 굳이 낮추려면 `height:1px` 유지하고 색을 `--line`으로.

**출처** - joel-jeon (`.page-progress`)
