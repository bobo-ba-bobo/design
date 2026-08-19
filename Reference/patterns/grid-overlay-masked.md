# 마스크 씌운 그리드 오버레이

**무엇** - 배경에 옅은 격자를 깔되, 그라디언트 마스크로 위아래를 페이드시켜 "끝나는 지점"을 안 보이게 한다.

```css
.hero{ position:relative }
.hero::before{
  content:"";
  position:absolute; inset:0;
  background-image:
    linear-gradient(#11110f0b 1px, transparent 1px),           /* 가로선 */
    linear-gradient(90deg, #11110f0b 1px, transparent 1px);    /* 세로선 */
  background-size: 5vw 5vw;
  mask-image: linear-gradient(transparent, #000 20% 75%, transparent);
  -webkit-mask-image: linear-gradient(transparent, #000 20% 75%, transparent);
}
```

**포인트**
- 선 색은 `--ink`의 4% 알파 (`#11110f0b`). 이보다 진하면 방眼지가 된다
- 셀 크기를 `5vw`로 잡으면 화면 폭에 비례해서 항상 20칸이다. px면 모바일에서 촘촘해진다
- 마스크가 없으면 격자가 섹션 경계에서 뚝 끊겨서 싸구려로 보인다. 마스크가 전부다

**다크 버전** - 알파만 뒤집는다.
```css
background-image: linear-gradient(#ffffff0b 1px, transparent 1px),
                  linear-gradient(90deg, #ffffff0b 1px, transparent 1px);
mask-image: linear-gradient(transparent, #000 12% 85%, transparent);
```

**변형: 궤도 링** - 같은 발상으로 이미지 없이 기하 장식을 만든다.
```css
.orbit{
  position:absolute; top:16%; right:-8vw;
  width:48vw; height:48vw;
  border:1px solid #11110f1f; border-radius:50%;
  pointer-events:none;
}
.orbit::before{ content:""; position:absolute; inset:17%;
                border:1px solid #11110f21; border-radius:50% }
.orbit::after {                                     /* 궤도 위의 점 */
  content:""; position:absolute; top:10%; left:20%;
  width:11px; height:11px; border-radius:50%;
  background:var(--acid); border:1px solid var(--ink);
  box-shadow: 0 0 0 8px var(--paper);               /* 배경색 후광으로 선을 끊음 */
}
```

`box-shadow`를 배경색으로 주는 게 트릭이다. 점 주변의 궤도선이 지워져서 점이 선 위에 "앉은" 것처럼 보인다.

**calm 변형** - 격자를 유지하되 셀을 키우고(`8vw`) 알파를 더 낮춘다(`#1111110a`). 궤도 링은 빼거나 선 하나만 남긴다.

**출처** - joel-jeon
