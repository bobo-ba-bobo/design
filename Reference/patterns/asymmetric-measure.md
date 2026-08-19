# 비대칭 배치와 ch 단위

**무엇** - 블록을 가운데 정렬하지 않는다. 좌우로 밀거나 그리드 밖으로 삐져나가게 두고, 줄길이는 `ch`로 잡는다.

**왜 먹히나** - 가운데 정렬 + px 줄길이는 템플릿처럼 보인다. 비대칭은 "누가 배치했다"는 인상을 준다.

```css
/* 오른쪽 밀착 */
.manifesto > p { margin: 0 0 13vh auto; max-width: 18ch }

/* 그리드 밖으로 삐져나가기 */
blockquote  { margin-left: -20vw; max-width: 11ch }
.statement  { margin-left: -20vw }

/* 줄마다 들여쓰기 계단 */
.stair span:nth-child(2){ margin-left:  8vw }
.stair span:nth-child(3){ margin-left: 20vw }
.stair span:nth-child(4){ margin-left:  4vw }

/* 한쪽만 쓰는 그리드 */
.hero__lower{ width:45%; margin-left:55%;
              display:grid; grid-template-columns:1.2fr 1fr }
```

**ch 단위 스케일**

| 용도 | max-width |
|---|---|
| 디스플레이 헤드라인 | `11-18ch` |
| 중간 크기 문장 | `29ch` |
| 본문 문단 | `39-42ch` |
| 푸터 미세 텍스트 | `54ch` |

`ch`는 `0` 글자 너비 기준이라 폰트가 바뀌어도 줄당 글자수가 유지된다. px로 잡으면 폰트를 바꿀 때마다 다시 잡아야 한다.

**주의** - `margin-left:-20vw`는 반드시 `overflow-x:hidden`(body)과 짝이다. 그리고 모바일에서 되돌려야 한다.

```css
@media (width <= 800px){
  blockquote, .statement{ margin-left: 0 }
  .stair span{ margin-left: 0 }
}
```

**calm 변형** - 음수 마진은 버리고 `margin-left:auto` / `margin-right:auto`로 좌우 치우침만 남긴다. `ch` 줄길이는 그대로. 이것만으로도 가운데 정렬 템플릿 느낌은 사라진다.

**출처** - joel-jeon
