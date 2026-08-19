# vh 여백 리듬

**무엇** - 세로 여백을 px가 아니라 `vh`로 잡는다. 공간을 거리가 아니라 스크롤 시간으로 잰다.

**왜 먹히나** - 화면 크기와 무관하게 "숨 쉬는 간격"이 일정하다. px로 잡으면 큰 모니터에서 답답하고 노트북에서 과하다.

```css
section        { padding: 18vh 5vw }
section.big    { min-height: 130vh; padding: 22vh 8vw 18vh }
.copy > p      { margin-bottom: 30vh }   /* 문단 사이 한 화면 가까이 */
.copy blockquote{ margin-bottom: 35vh }
footer         { min-height: 100vh }
```

**스케일** - 3vh / 8vh / 13vh / 18vh / 22vh / 30vh 정도만 쓴다. 값을 6-7개로 제한하는 게 리듬을 만든다.

**주의**
- `vh`는 모바일 주소창 때문에 튄다. 뷰포트 전체 높이는 `100svh`를 쓴다 (`height: max(760px, 100svh)`)
- `min-height`에 `vh`를 쓰되 `padding`도 같이 줘야 짧은 콘텐츠에서 안 무너진다

**calm 변형** - 값을 절반으로. 8vh / 12vh / 16vh. 섹션 `min-height`는 빼고 콘텐츠가 높이를 정하게 둔다. 여백은 여전히 넉넉하지만 스크롤이 과장되지 않는다.

**출처** - joel-jeon
