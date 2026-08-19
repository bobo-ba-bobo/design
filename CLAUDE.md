# CLAUDE.md

디자인 작업 공간. 레퍼런스 아카이브 + 레시피 라이브러리.

## 구조

```
Reference/
├── README.md              인덱스
├── sites/<slug>/          사이트 해부 카드 (spec.md + source.css)
├── patterns/              재사용 기법. 각 파일에 calm 변형 포함
├── calm-dial.md           화려한 기법 -> 차분한 버전 변환표
└── *.md                   UIUX 개념 노트 (기존)

starters/base-kit/         tokens.css + motion.js 드롭인
skills/                    Anthropic 스킬 저장소 클론 (gitignored, 건드리지 말 것)
```

## 규칙

**웹 UI 작업을 할 때는 `Reference/patterns/README.md`를 먼저 읽는다.** 기법을 새로 지어내기 전에 이미 정리된 게 있는지 본다.

**차분한 사이트(bosungbaik.com 등)를 만들 때는 `Reference/calm-dial.md`를 읽는다.** 화려한 레퍼런스의 구조만 가져오고 톤은 낮추는 변환표와 완성된 토큰 블록이 있다.

**새 레퍼런스 추가는 `/design-ref <url>`.** 수동으로 하지 말 것. 스킬이 추출 절차와 spec.md 형식을 강제한다.

**패턴 추가 기준** - 서로 다른 사이트 2곳 이상에서 본 기법만 `patterns/`에 넣는다. 한 곳에서만 본 건 그 사이트 spec.md에 남긴다. 그리고 calm 변형 없는 패턴은 넣지 않는다.

**컴포넌트 라이브러리를 만들지 않는다.** 에디토리얼 사이트의 컴포넌트는 그 사이트 밖에서 의미가 없다. 옮겨다니는 건 기법이지 컴포넌트가 아니다.

## 문서 톤

- 한국어, 보통 말투
- 인터펑트(·)와 긴 대시(—) 금지. 짧은 대시(-)만
- 값은 실제 소스에서 인용. 추정하지 않는다
- 장식적 형용사 없이

## 관련 위치

- 개인 사이트: `../bosungbaik.com/` (디자인 가이드는 `docs/design-guide.md`)
- 원격: `github.com/bobo-ba-bobo/design` (push 전 gh 계정 전환 필요)
