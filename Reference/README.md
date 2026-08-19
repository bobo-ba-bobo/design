# Reference

취향 아카이브 + 레시피 라이브러리.

## 구조

```
Reference/
├── sites/          사이트별 해부 카드 (spec.md + source.css)
├── patterns/       사이트에서 뽑아낸 재사용 가능한 기법
├── calm-dial.md    화려한 기법을 차분하게 낮추는 변환표
└── *.md            기존 UIUX 개념 노트
```

## 쓰는 법

**사이트를 추가할 때** - Claude에게 `/design-ref <url>` 실행. HTML을 받아 CSS/JS 번들을 찾고 토큰, 타입 스케일, 모션, 섹션 문법을 추출해 `sites/<slug>/spec.md`로 저장한다.

**작업할 때** - `patterns/`를 먼저 본다. 각 파일은 그대로 붙여넣을 수 있는 CSS/JS와, 톤을 낮춘 calm 변형을 같이 담고 있다.

**차분한 사이트를 만들 때** - `calm-dial.md`를 본다. bosungbaik.com처럼 절제된 사이트에 화려한 레퍼런스의 구조만 가져오는 방법.

## 원칙

컴포넌트 라이브러리를 만들지 않는다. 에디토리얼 사이트의 컴포넌트는 그 사이트 밖에서 의미가 없다. 옮겨다니는 건 **기법**이지 컴포넌트가 아니다.

패턴은 10개 사이트쯤 모으면 거의 다 나온다. 그 뒤로는 새 사이트를 넣어도 새 패턴이 안 나오는 게 정상이다. 그때부터 `sites/`는 취향 기록용, `patterns/`는 작업용으로 역할이 갈린다.

## 현재 사이트

| 사이트 | 스택 | 한 줄 |
|---|---|---|
| [joel-jeon](sites/joel-jeon/spec.md) | Vite + React + GSAP | 종이/애시드 라임 에디토리얼, 다크 리스킨 내장 |
| [capability-factory](sites/capability-factory/spec.md) | Vite + React + GSAP + canvas | 같은 DNA의 다크 프로덕트 사이트 |
