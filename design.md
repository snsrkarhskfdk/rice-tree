# design.md — 미곡상사 디자인 시스템

> 모든 시각 결정의 단일 출처. 코드의 색, 타이포, 간격, 컴포넌트 값은 이 문서의 토큰과 규칙을 따른다.
> 방향: 미곡상사 v4 기준. 크림 베이스, 골드 액센트, 필드 그린 CTA, 산지 직거래 B2B 신뢰감.

## 1. 정반합 기준

정:
- 코덱스 프로토타입의 상품 큐레이션, 정기배송, Rice Finder, 산지/도정 이력, 선물/B2B, FAQ 흐름을 살린다.
- 미곡상사의 본질인 산지 직거래, 대량 공급, 도정일자, 거래 절차, 결제·출고 원칙을 앞에 둔다.

반:
- 과장된 쇼핑몰 문구, fake 리뷰 수치, 가짜 재고 부족, 결제로 오해되는 UI, 개발 설명 문구를 제거한다.
- "백엔드 없이", "프로토타입", "저장되지 않습니다", "연결 예정" 같은 화면 문구는 쓰지 않는다.

합:
- 미곡상사 v4의 브랜딩, 색감, 트럭 모션, 하루의 빛 배경 전환을 기준으로, 코덱스의 상품/퀴즈/문의 흐름을 흡수한다.
- `#roadmap`은 `문의 → 견적 → 입금 → 출고 → 하차 → 증빙` 거래 절차로 유지한다.
- "한 포대마다 이력이 따라옵니다"와 선명한 포대 이미지 오버랩을 핵심 기억점으로 둔다.

## 2. 컬러 — 미곡상사 v4 팔레트

크림, 골드, 필드 그린을 기본으로 한다. 스크롤 진행률에 따라 `--cream`, `--cream-deep`, `--line`은 아침 햇살에서 해질녘 톤으로 보간된다.

| 토큰 | HEX | 용도 |
|---|---|---|
| `--cream` | `#FBF6EC` | 페이지 기본 배경 |
| `--cream-deep` | `#F3E8D2` | 교차 섹션 배경 |
| `--rice-gold` | `#D9A441` | 쌀/벼 액센트 |
| `--amber` | `#B97F23` | 라벨, 선택 강조 |
| `--field-green` | `#2E5339` | CTA, 주요 액션 |
| `--navy-900` | `#241B12` | 다크 섹션, 푸터 |
| `--ink-900` | `#2B2117` | 헤드라인 |
| `--ink-700` | `#5F513F` | 본문 |
| `--ink-500` | `#806F59` | 보조 설명 |
| `--line` | `#E5D8BE` | 보더, 디바이더 |
| `--white` | `#FFFFFF` | 기본 배경, 카드 |

## 3. 타이포그래피

- 패밀리: Pretendard Variable
- CDN: `https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css`
- 숫자와 단위는 `font-variant-numeric: tabular-nums`로 정렬감 유지.

| 토큰 | 크기/행간 | 굵기 | 자간 | 용도 |
|---|---|---|---|---|
| `display` | 46 / 1.28 | 700 | -0.02em | 히어로 H1, 모바일 32 |
| `h2` | 32 / 1.35 | 700 | -0.015em | 섹션 타이틀, 모바일 24 |
| `h3` | 19 / 1.45 | 700 | -0.01em | 카드 타이틀 |
| `body-lg` | 18 / 1.7 | 400 | -0.01em | 히어로 서브 |
| `body` | 16 / 1.7 | 400 | -0.01em | 본문 |
| `caption` | 13.5 / 1.55 | 500 | 0 | 라벨, 표 보조 |
| `eyebrow` | 14 / 1 | 700 | 0.06em | 섹션 상단 골드 라벨 |

## 4. 레이아웃

| 토큰 | 값 | 비고 |
|---|---|---|
| `--container` | `1120px` | 콘텐츠 최대폭, 좌우 padding 24px |
| `--section-y` | `104px` | 모바일 64px |
| `--gap` | `24px` | 카드 그리드 기본 간격 |
| `--radius-lg` | `20px` | 카드 |
| `--radius-md` | `12px` | 버튼, 인풋, 칩 |
| `--shadow-card` | `0 12px 32px rgba(94,72,35,.10)` | hover 또는 강조 |

섹션 배경 리듬:
`hero cream gradient → trust strip → trace cream-deep → products cream → process cream → dark policy → contact cream-deep → dark footer`

## 5. 컴포넌트

### Header
- 72px desktop, 64px mobile.
- 로고 좌측, 메뉴 우측. 모바일은 햄버거 메뉴.
- CTA는 desktop에서만 header에 노출.

### Button
- Primary: `--field-green` 배경, white text, radius 12, height 52.
- Secondary/Ghost: white 배경, `--line` 보더, hover 시 green.

### Card
- border `1px solid --line-200`, radius 20, padding 32.
- hover: border amber 40%, `--shadow-card`, translateY(-2px).
- 내부는 좌측 정렬 고정.
- 선택 상태는 `is-selected`로 관리한다. border는 amber 78%, 외곽 3px gold tint ring, 우상단 `선택됨` pill을 사용한다.
- 상품 카드, 정기배송 플랜, 이력 카드, 신뢰 카드, 절차 단계, 후기 카드, B2B 항목, FAQ는 클릭/키보드 선택 시 같은 그룹 내 하나만 선택 상태로 남긴다.

### Product Card
필수 정보:
- 카테고리
- 상품명
- 품종
- 산지
- 도정
- 중량
- 추천 가구/용도
- 배송 유형
- 태그
- 문의/상담 CTA

### Rice Finder
- 5단계 퀴즈 형식.
- 우측 카드 안에서 한 질문씩 진행.
- progress bar 5개.
- 선택한 답변은 다음 질문으로 넘어가기 전 green border, warm tint background, check mark로 즉시 피드백을 준다.
- 결과에는 추천 품종, 중량, 배송 주기, 보관법, CTA를 표시.

### Delivery / Trade Roadmap
- 6단계 수평 트랙, 모바일은 좌측 수직 타임라인.
- 단계: 문의 → 견적 → 입금 → 출고 → 하차 → 증빙.
- 트럭은 투명 인라인 SVG를 사용한다. 적재함에는 米 마킹 쌀포대 5개가 보인다.
- 트럭은 점선 트랙 위를 16s linear loop로 주행하고, 바퀴 회전과 미세한 상하 바운스를 사용한다.
- reduced-motion 또는 1024px 이하에서는 트럭 모션을 숨긴다.

### Origin / Traceability Card
제목은 `한 포대마다 이력이 따라옵니다`.
- `assets/migoksangsa-shindongjin-10kg.png` 포대 이미지를 배경성 비주얼로 사용하고, 제목/본문이 이미지 위에 겹치도록 배치한다.
- 포대 이미지는 opacity 100%, `mix-blend-mode: normal`로 선명하게 유지한다. 읽기 보정은 이미지가 아니라 텍스트 패널에만 준다.
- 포대의 기존 브랜드 영역은 페이지 오버레이로 `미곡상사`가 보이게 처리한다.
필드:
- 산지
- 품종
- 수확연도
- 도정일
- 도정소
- 보관 방식
- 포장 단위
- 배송 유형
- 검사 정보

### FAQ
- native `details/summary`.
- 질문은 구매 판단에 필요한 도정일, 중량, 정기배송, 배송일, 보관, 사업자 주문 중심.

## 6. 모션

- Reveal: opacity 0→1, translateY 16→0, 0.6s cubic-bezier(.2,.7,.3,1).
- 카드 스태거 80ms.
- Hero 쌀알 모션은 매우 약하게.
- Delivery truck은 16s linear loop.
- Daylight background: 스크롤 진행률로 `--cream`, `--cream-deep`, `--line`을 4단계 보간한다.
- `prefers-reduced-motion: reduce`에서 모든 장식 모션 비활성.

## 7. 카피 톤

- 짧은 평서문, 능동태, 숫자로 말하기.
- 감탄사, 과장, 순위 표현 금지.
- 개발 설명 문구 금지.
- 미확정 데이터는 `상품별 확인`, `출고 시 안내`, `상담 후 확정`, `지역별 안내`로 표현.

핵심 카피:
- H1: `산지에서 바로, 안정적인 쌀 대량 공급`
- Hero label: `전날 주문 · 익일 차량 출고`
- Section: `문의부터 세금계산서까지, 여섯 단계`
- Section: `한 포대마다 이력이 따라옵니다`
- Section: `다섯 번만 누르면 우리 집 쌀이 나옵니다`
