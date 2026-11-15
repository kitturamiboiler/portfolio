export const profile = { name: '문재민', nickname: 'm00n · 귀뚜라미보일러', email: 'mjm3204@naver.com', github: 'https://github.com/kitturamiboiler', site: 'https://kitturamiboiler.github.io/portfolio/' };
export const projects = [
  {
    id: 'supjigi', name: '숲지기', type: '게임 정보 웹', title: '찾은 정보가\n나의 조합이 되기까지.',
    summary: '흩어진 게임 공략을 검색하고, 비교하고, 내 조합에 연결하는 탐색 경험.',
    cover: 'assets/supjigi/pc-home-viewport.jpg', mobile: 'assets/supjigi/mobile-home-viewport.jpg', coverAlt: '숲지기의 검색과 초보자 가이드가 배치된 홈 화면', color: 'forest',
    scope: '정보 구조 / 검색 UX / 모바일 편집', status: '2026.11 운영 화면 기준',
    intro: 'Sword × Staff 비공식 한국어 게임 위키. 공략을 읽는 것에서 끝나지 않고, 필요한 정보를 찾아 자신의 스킬 조합으로 이어지도록 구성한 프로젝트입니다.',
    context: '이름을 정확히 알지 못해도 정보를 찾고, 긴 공략을 읽는 중에도 스킬 효과를 확인하며, 휴대폰에서 조합을 수정해야 합니다.',
    decision: '읽기 → 찾기 → 비교 → 조합으로 연결되는 경로를 만들고, 이용자의 질문과 현재 작업 맥락을 탐색의 기준으로 삼았습니다.',
    chapters: [
      { title: '용어보다, 궁금한 내용에서 출발하기', text: '홈에 검색과 초보자 시작 경로를 함께 배치했습니다. 정확한 항목 이름을 모르는 상황을 고려해 한국어·영어·관련어를 검색에 연결하고, 질문에서 공략과 도구로 이동하는 경로를 마련했습니다.', images: [['assets/supjigi/pc-home-viewport.jpg','운영 홈 · 검색과 시작 경로'],['assets/supjigi/mobile-search.jpg','운영 모바일 검색 · 질문과 관련 결과']], layout: 'mixed' },
      { title: '검색의 다음 행동까지 보이도록', text: '“기사 추천 스킬”처럼 목적이 담긴 질문에서 티어표와 빌드로 이어지도록 입구를 확장했습니다. 새 답변을 생성하기보다 기존 자료에 도달하도록 연결하는 방향을 택했습니다. 아래 변경 전은 당시 운영 화면, 변경 후는 당시 로컬 검증 화면입니다.', images: [['assets/supjigi/search-before.jpg','변경 전 · 당시 운영 화면'],['assets/supjigi/search-after.jpg','변경 후 · 당시 로컬 검증 화면']], layout: 'compare' },
      { title: '작은 화면에서는 드래그 대신 선택으로', text: '모바일에서는 슬롯을 눌러 선택창을 열고, 검색과 효과 요약으로 항목을 고르는 경로를 제공합니다. 데스크톱의 조합 편집과 모바일의 터치 편집을 각 화면에 맞게 구성하고, URL 공유·복원으로 같은 조합을 함께 볼 수 있게 했습니다.', images: [['assets/supjigi/pc-builder.jpg','운영 데스크톱 · 조합 연습장'],['assets/supjigi/mobile-picker.jpg','운영 모바일 · 슬롯 선택창']], layout: 'mixed' }
    ],
    outcome: '검색·필터·상세창·조합 공유로 이어지는 화면과 구현 근거가 남아 있습니다. 사용자 검색 성공률이나 만족도는 측정 자료가 없어 성과 수치로 제시하지 않습니다.',
    next: '질문 검색에서 적절한 공략을 찾는지, 모바일에서 슬롯 변경을 완료하는지 과업 기반 사용성 검증이 필요합니다.',
    source: 'portfolio-evidence1/README.md, user-flow.md, design-decisions.md, screens/README.md', live: 'https://supjigi.xyz/'
  },
  {
    id: 'omagotchi', name: 'Omagotchi', type: '캐릭터 기반 학습 서비스', title: '공부하는 일상에\n성장하는 즐거움을.',
    summary: '출결과 학습 타이머, 캐릭터 성장을 하나의 홈으로 연결하는 경험.',
    cover: 'assets/omagotchi/live/desktop-home.jpg', coverAlt: 'Omagotchi 실제 운영 데스크톱 홈 / 2026.11.15', color: 'mint',
    scope: '반응형 구조 / 공통 UI / 상태 설계', status: '2026.11.15 운영 화면 / 초기 시안·Storybook 별도',
    intro: 'NHN Academy 8인 팀 프로젝트. 출결과 학습 기록, 캐릭터 성장과 퀘스트를 연결하는 서비스입니다. 홈의 화면비 대응과 반복 UI의 표현 기준을 중심으로 소개합니다.',
    context: '메뉴·타이머·캐릭터·성장 상태가 한 화면에 모여 있어, 고정 좌표와 높이 제약이 작은 화면의 겹침과 도달 가능성 문제로 이어졌습니다.',
    decision: '모바일 페이지를 따로 늘리는 대신 단일 홈 구조를 재검토하고, 상태 정보와 행동을 묶어 화면의 흐름 안에 배치하는 방향을 선택했습니다.',
    chapters: [
      { title: '같은 홈, 다른 화면 크기', text: '데스크톱은 메뉴를 한 줄로, 모바일은 두 줄로 배치합니다. 타이머와 캐릭터, 성장 상태를 같은 순서로 유지하면서 폭에 맞춰 행동 영역을 다시 정렬했습니다. 실제 운영 사이트에서 촬영한 화면입니다.', images: [['assets/omagotchi/live/desktop-home.jpg','데스크톱 홈 / 운영 화면 / 1280×1000'],['assets/omagotchi/live/mobile-home.jpg','모바일 홈 / 운영 화면 / 390×844']], layout: 'omagotchi-responsive' },
      { title: '학습의 현황과 다음 목표를 나누기', text: '내 정보에서는 누적 학습과 캐릭터 성장을 확인하고, 진행에서는 퀘스트와 보상을 확인합니다. 현재 상태를 읽는 화면과 다음 행동을 고르는 화면을 나눠 보여줍니다. 아래는 운영 화면의 패널 영역만 잘라낸 캡처입니다.', images: [['assets/omagotchi/live/desktop-profile.png','내 정보 / 실제 운영 패널 발췌'],['assets/omagotchi/live/mobile-quests.png','모바일 퀘스트 / 실제 운영 패널 발췌']], layout: 'omagotchi-panels' },
      { title: '화면을 더 만드는 대신, 구조를 다시 보기', text: '모바일 전용 화면을 늘리면 기능과 레이아웃이 중복됩니다. 단일 홈을 기준으로 정보·행동 그룹을 재배치하고 가용 폭과 높이에 맞춰 흐르도록 구조를 재검토했습니다. 아래는 초기 시안과 기존 Storybook 자료이며, 같은 조건의 전후 비교는 아닙니다.', images: [['assets/omagotchi/prototype-home.png','초기 홈 프로토타입'],['assets/omagotchi/home-stage.png','기존 Storybook 홈 캡처']], layout: 'compare' },
      { title: '정보와 행동에 각자의 자리 만들기', text: '이름·레벨·경험치는 상태 그룹으로, 반복 행동은 도크로 묶었습니다. 요소마다 다른 고정 좌표를 주는 방식에서 그룹 단위 정렬로 옮기고, 작은 화면에서도 스크롤로 핵심 행동에 도달하도록 구성했습니다.', images: [['assets/omagotchi/status-hud.png','기존 Storybook · 상태 HUD'],['assets/omagotchi/action-dock.png','기존 Storybook · 행동 도크']], layout: 'components' },
      { title: '같은 ‘기록’에도 다른 행동이 있으니까', text: '학습 이력을 조회하는 메뉴와 현재 학습 구간을 저장하는 행동을 구분하기 위해 ‘구간기록’이라는 문구를 검토했습니다. 공통 버튼·필드·다이얼로그와 로딩·빈 값·실패 상태도 문서와 코드로 정리해, 화면 표현과 연동 계약이 이어지도록 했습니다.', images: [['assets/omagotchi/timer-panel.png','기존 Storybook · 타이머 패널']], layout: 'single' }
    ],
    outcome: '반응형 구조 결정, 공통 UI와 상태 계약, 개발 인계 문서가 확인됩니다. 현재 모든 서버 흐름이 연결되거나 기기별 사용성이 검증되었다는 의미는 아닙니다.',
    next: '세로·가로·작은 높이에서 핵심 행동의 도달 가능성과, 기록 조회·구간 저장의 문구 이해도를 검증할 필요가 있습니다.',
    source: 'portfolio-evidence2/design-decisions.md, design/frontend-docs/, screens/README.md'
  },
  {
    id: 'tale', name: 'Voice Tale × Image Tale', type: '모바일과 Raspberry Pi를 잇는 AI 동화', title: '익숙한 목소리로,\n새로운 이야기 속으로.',
    summary: '보호자의 모바일 입력과 어린이의 터치 화면 감상을 연결하는 동화 경험.',
    cover: 'assets/tale/current/kiosk-player.jpg', coverAlt: '최신 dev의 Raspberry Pi용 800×480 동화 플레이어 프론트 화면. 테스트 데이터 사용.', mobile: 'assets/tale/current/mobile-books.jpg', mobileAlt: '최신 dev의 모바일 웹 책 목록. 테스트 데이터 사용.', color: 'sage',
    scope: '사용자 흐름 / 터치 UI / 디바이스 경험', status: 'dev 66b1e1e / 2026.11.15 프론트 캡처 / 테스트 데이터',
    intro: '제14회 GIST AI&IoT 메이커톤 404팀의 AI 동화 프로젝트. 웹을 기반으로 모바일과 Raspberry Pi 전용 터치 화면을 구성하고, 보호자의 입력에서 어린이의 감상까지 서로 다른 사용 환경을 연결했습니다.',
    context: '콘텐츠를 입력하는 보호자와 이야기를 감상하는 어린이의 과업이 다릅니다. 작은 전용 터치 화면에서는 재생 행동을 쉽게 발견하고 조작할 수 있는 구성이 필요합니다.',
    decision: '모바일 입력과 기기 감상을 나누고, 동화 종류를 먼저 선택한 뒤 중앙의 큰 조작부로 재생하는 흐름을 구성했습니다.',
    chapters: [
      { title: '입력하는 사람과 듣는 사람을 나누기', text: '보호자는 모바일에서 목소리와 그림을 준비하고, 어린이는 Raspberry Pi의 터치 화면에서 동화를 감상합니다. 최신 프론트에서는 녹음·파일 선택과 그림·요청 입력을 각각의 과업으로 나누고 하단 메뉴로 오갈 수 있게 구성했습니다.', images: [['assets/tale/current/mobile-voices.jpg','모바일 목소리 입력 / 최신 dev / 테스트 데이터'],['assets/tale/current/mobile-story.jpg','모바일 그림·요청 입력 / 최신 dev / 테스트 데이터']], layout: 'mobile-platforms' },
      { title: '재생과 목소리 선택을 감상 가까이에', text: '최신 Pi 플레이어는 표지·본문 영역 위에 큰 재생 조작을 두고, 목소리 변경을 상단과 중앙에서 접근할 수 있게 구성했습니다. 조작은 재생 상태에 따라 달라집니다. 소리 크기는 화면의 볼륨 슬라이더 대신 기기 본체에서 조절하는 구조입니다.', images: [['assets/tale/current/kiosk-player.jpg','Raspberry Pi 플레이어 / 800×480 / 최신 dev 프론트'],['assets/tale/current/kiosk-voice-picker.jpg','Raspberry Pi 목소리 선택 / 800×480 / 테스트 데이터']], layout: 'resolution' },
      { title: '목록에서 다음 행동을 구분하기', text: 'Pi의 책장은 한 번에 볼 책을 페이지 단위로 나누고, 낭독이 있는 책과 음성을 준비해야 하는 책의 행동을 구분합니다. 모바일에서는 분류·검색과 상세 진입을 통해 콘텐츠를 관리합니다.', images: [['assets/tale/current/kiosk-books.jpg','Raspberry Pi 책장 / 800×480 / 테스트 데이터'],['assets/tale/current/mobile-books.jpg','모바일 책 목록 / 390×844 / 테스트 데이터']], layout: 'mixed' }
    ],
    outcome: '모바일·터치 화면의 역할 분리, 중앙 재생 조작, 화면 크기별 검토 자료가 확인됩니다. 최신 통합 실행 상태와 실물 기기 동작은 추가 확인이 필요합니다.',
    next: '어린이의 재생 조작 이해도, 보호자의 입력 완료 흐름, 실제 디바이스 터치와 오디오 동작을 함께 검증해야 합니다.',
    source: 'portfolio-evidence/README.md, interaction-design.md, screens/index.md'
  }
];
