// Reading aids reconstructed for this portfolio from supplied artifacts; not original research.
export const notes = {
  supjigi: {
    role: 'AI를 활용해 구현하고, 정보 탐색과 모바일 UI의 방향을 검토했습니다.',
    focus: '정보를 찾는 순간부터 조합을 공유하는 순간까지',
    choices: [
      ['진입점','자료의 원래 순서보다 이용자의 목적을 우선','처음 읽기·질문 검색·직업별 비교를 각각의 시작점으로 구성했습니다.'],
      ['읽는 맥락','짧은 확인은 상세창, 긴 설명은 문서로','공략을 떠나지 않고 효과를 확인하되 전체 설명과 직접 공유 경로는 유지했습니다.'],
      ['모바일 편집','슬롯에서 선택창으로 이어지는 터치 경로','드래그에 의존하지 않고 검색·필터·효과 요약으로 항목을 고르게 했습니다.']
    ],
    flow: ['질문 검색','티어표·빌드 비교','스킬 효과 확인','내 조합 편집','링크로 공유'],
    extraChapters: [
      {title:'읽던 공략을 떠나지 않고 효과 확인하기',text:'짧은 스킬 확인 때문에 전체 페이지를 오가는 대신, 공통 상세창에서 효과와 확보된 평가를 확인하도록 구성했습니다. 긴 설명과 고유 주소는 별도로 유지해 짧은 비교와 깊은 읽기를 나눴습니다.',images:[['assets/supjigi/evidence/archive/2026-11-15/skill-before.jpg','변경 전 · 당시 운영 페이지'],['assets/supjigi/evidence/archive/2026-11-15/skill-after.jpg','변경 후 · 당시 로컬 상세창']],layout:'compare'},
      {title:'정보량보다 긴 공략의 읽기를 우선하기',text:'모바일 본문을 15px에서 17px로 조정하고 행간과 보조 정보의 대비를 정리했습니다. 같은 공략 구간의 자료로 문자 크기와 밀도 차이를 살펴볼 수 있습니다.',images:[['assets/supjigi/evidence/archive/2026-11-15/reading-before.jpg','변경 전 · 당시 운영 화면'],['assets/supjigi/evidence/archive/2026-11-15/reading-after.jpg','변경 후 · 당시 로컬 검증 화면']],layout:'compare'},
      {title:'평가의 조건도 정보의 일부로',text:'티어표에 해외 평가 기준과 미평가 상태를 표시하고, 문서에는 원문·수정일·관련 근거를 연결했습니다. 한국 서버 적용이 확인되지 않은 정보는 이용자가 판단할 수 있도록 화면에 드러냈습니다.',images:[['assets/supjigi/evidence/pc-tiers.jpg','운영 화면 · 직업별 티어표'],['assets/supjigi/evidence/mobile-skill-dialog.jpg','운영 모바일 · 스킬 상세창']],layout:'mixed'}
    ],
    limitation:'전후 이미지는 당시 운영 화면과 로컬 검증 화면의 조합입니다. 질문 검색은 규칙 기반이며 모든 질문을 이해하지 않습니다. 검색 성공률·읽기 속도·편집 완료 시간은 측정하지 않았습니다. 원문 공략·번역·게임 이미지는 별도 제작자의 자료입니다.',
    outcome:'검색과 분류, 상세창, 조합 편집·저장·공유를 연결했습니다. 결과 화면은 운영 캡처로, 성능은 당시 실험실 측정 기록으로 확인할 수 있습니다.'
  },
  omagotchi: {
    role:'프론트엔드 전반을 맡아 반응형 화면과 공통 UI, 상태별 표현을 설계하고 구현했습니다.',
    additionalScope:'레벨 디자인, 사용자·기수(cohort) 관리 영역도 함께 담당했습니다. 캐릭터를 직접 제작했으며 해당 캐릭터의 저작권을 보유합니다.',
    focus:'핵심 행동이 화면 크기에 가려지지 않도록',
    choices:[
      ['화면 구조','모바일 전용 분리에서 단일 홈으로','화면별 기능 중복을 줄이고 가용 폭에 따라 정보와 행동 그룹이 흐르도록 구조를 재검토했습니다.'],
      ['상태 표현','반복 UI를 공통 컴포넌트와 상태로','버튼의 외형과 로딩·비활성을 분리하고, 서버 응답 상태를 화면 표현과 연결했습니다.'],
      ['문구','기록 조회와 현재 구간 저장을 구분','같은 ‘기록’으로 표현되던 행동을 구분하기 위해 ‘구간기록’ 문구를 검토했습니다.']
    ],
    flow:['홈 진입','출석·학습 시작','현재 구간 저장','학습 기록 조회','퀘스트·성장 확인'],
    extraChapters:[
      {title:'진입과 기록 화면도 같은 경험으로',text:'초기 로그인과 통계 시안입니다. 학습 전 진입과 학습 후 기록 확인을 홈의 앞뒤 과업으로 연결했습니다. 초기 시안의 정보 구조를 보여주는 자료로, 현재 배포 상태를 나타내지는 않습니다.',images:[['assets/omagotchi/evidence/prototype/Login.png','초기 프로토타입 · 로그인'],['assets/omagotchi/evidence/prototype/Stats.png','초기 프로토타입 · 통계']],layout:'compare'}
    ],
    limitation:'운영 화면은 2026.11.15 omagotchi.site에서 촬영했습니다. 학습 시간이나 퀘스트 상태는 촬영 시점 계정의 실제 표시값이며 서비스 성과 지표가 아닙니다. 프로토타입과 Storybook 캡처는 최종 배포 화면 또는 동일 조건의 전후 비교가 아닙니다. 공통 UI 상태는 코드·문서 근거로 설명하며 전체 서버 연동이나 기기별 사용성 검증을 뜻하지 않습니다. 캐릭터 제작 과정의 원본 작업 파일과 성장 단계별 시트는 제공 자료에 없어 새로 만들지 않았습니다.',
    outcome:'단일 홈의 반응형 구조, 정보·행동 그룹, 공통 UI 상태와 개발 인계 계약을 정리했습니다. 상태별 기준은 아래 코드 기반 정리와 원문 문서에서 확인할 수 있습니다.'
  },
  tale:{
    role:'Figma 레이아웃·베리언트 구성과 프론트엔드 UI를 맡았습니다.',
    focus:'모바일 입력과 Raspberry Pi의 감상을 연결하기',
    choices:[
      ['사용자 역할','모바일 입력과 기기 감상을 분리','보호자는 목소리·그림을 준비하고, 어린이는 전용 화면에서 콘텐츠를 선택하도록 나눴습니다.'],
      ['터치 조작','재생 상태와 목소리 선택을 감상 가까이에','최신 Pi 화면에서는 큰 재생 조작과 목소리 변경 경로를 제공하고 재생 상태에 맞춰 조작을 노출합니다.'],
      ['화면 대응','모바일과 Pi를 서로 다른 사용 환경으로','모바일은 390×844, Pi는 800×480의 최신 프론트 캡처로 정보와 조작 배치를 확인했습니다.']
    ],
    flow:['보호자: 목소리·그림 입력','동화 준비·전달 기획','어린이: 종류·책 선택','목소리 선택','터치 화면에서 감상'],
    eventPhotos:{primary:[['assets/tale/event/device-books.webp','대회 당시 · 실물 터치 화면의 Voice Tale 책장'],['assets/tale/event/pi-assembly.jpg','대회 당시 · Raspberry Pi와 디스플레이 조립'],['assets/tale/event/wiring-desk.webp','대회 당시 · 부품과 배선을 준비한 작업 책상']],additional:[['assets/tale/event/display-part.jpg','디스플레이 부품'],['assets/tale/event/speaker-part.jpg','스피커 부품'],['assets/tale/event/team-desk.jpg','팀 작업 책상'],['assets/tale/event/display-cable.jpg','터치 디스플레이 연결 케이블'],['assets/tale/event/display-assembly.jpg','디스플레이와 보드의 연결 구조']]},
    extraChapters:[
      {title:'감상 화면에는 감상에 필요한 것부터',text:'Pi 홈은 음성 동화와 창작 동화의 두 진입점에 집중합니다. 모바일과 같은 관리 메뉴를 나열하는 대신, 기기에서 고르고 듣는 과업을 우선한 전용 화면입니다.',images:[['assets/tale/current/kiosk-home.jpg','Raspberry Pi 홈 / 800×480 / 최신 dev 프론트']],layout:'resolution'},
      {title:'기기와 모바일의 저장 범위를 구분하기',text:'기기와 모바일에는 각각의 계정·저장 관리 화면이 있습니다. 같은 동화라도 어느 환경에 저장된 것인지 구분하고, 삭제가 영향을 주는 범위를 화면에서 설명합니다. 아래 계정과 기기 번호는 저장소의 테스트 데이터입니다.',images:[['assets/tale/current/kiosk-account.jpg','Pi 기기 관리 / 800×480 / 테스트 데이터'],['assets/tale/current/mobile-account.jpg','모바일 계정·저장 관리 / 390×844 / 테스트 데이터']],layout:'mixed'},
      {title:'처음 연결하는 순간도 화면의 일부로',text:'전용 디바이스의 초기 설정은 콘텐츠를 듣기 전에 거치는 흐름입니다. 최신 설정 화면을 함께 제시하되, 실제 네트워크 연결이나 기기 등록 성공을 검증한 자료로 해석하지 않습니다.',images:[['assets/tale/current/kiosk-setup.jpg','Raspberry Pi 초기 설정 / 800×480 / 최신 dev 프론트']],layout:'resolution'}
    ],
    limitation:'현재 화면은 2026년 11월 15일 dev 66b1e1e의 실제 프론트 컴포넌트를 저장소의 테스트 데이터로 렌더링한 캡처입니다. 백엔드는 실행하지 않았고, 테스트 음원은 무음 데이터입니다. 최신 프론트 캡처와 대회 당시 실물 기기 사진은 별도로 표시합니다. 현장 사진만으로 AI 생성·서버 연동·오디오 품질의 검증을 주장하지 않습니다. 예전 화면과 설계안은 과거 자료로 따로 보존했습니다. Figma 담당 역할은 본인 설명 기준입니다.',
    outcome:'모바일 입력·관리와 Pi의 선택·재생을 나눈 최신 프론트 화면을 구성했습니다. 최신 dev에서는 계정·동화·목소리·작업 상태 API를 다루는 코드도 확인했으며, 여기서는 백엔드 없이 UI만 검토했습니다.'
  }
};
export const collaborationNotes = {
 omagotchi: {
  team:'NHN Academy 8인 팀 프로젝트',
  intro:'프론트엔드 전반을 맡으면서, 화면을 만드는 일과 다른 담당자가 기능을 연결할 수 있도록 기준을 남기는 일을 함께 다뤘습니다.',
  points:[
   {title:'화면 표현과 기능 연결의 경계 정리',text:'공통 UI를 적용하면서 기존 로그인 폼·필드와 화면 제어 규칙을 유지했습니다. 기능별 연결 지도에는 담당 영역, 보존할 화면 계약, 필요한 응답과 미연결 항목을 정리해 백엔드가 어디를 연결해야 하는지 확인할 수 있도록 했습니다.'},
   {title:'완료 기준이 다른 부분을 조율 항목으로 남기기',text:'AI 추천 퀘스트는 화면에 표시돼도 완료 처리 호출이 연결되지 않은 상태였습니다. 인계서에서는 연결할 지점과 함께, 대화 1회·추천 행동 수행·세션 종료 중 무엇을 완료로 볼지 결정할 항목으로 남겼습니다. 화면 표시와 실제 보상 흐름을 구분해 논의할 수 있도록 한 사례입니다.'}
  ],
  takeaway:'협업에서는 완성된 화면뿐 아니라, 다른 담당자가 이어서 작업할 수 있는 상태·연결 지점·남은 결정을 함께 전달하는 것이 중요하다고 생각했습니다.',
  sources:[['documents/frontend/integration/frontend-backend-connection-map.md','기능별 연결 지도'],['documents/frontend/integration/ai-quest-completion-handoff.md','AI 추천 퀘스트 연동 인계서']],
  note:'당시 연결 지도와 인계서 기준입니다. 완료 조건의 최종 합의나 연동 완료를 뜻하지 않습니다.'
 },
 tale: {
  team:'GIST AI&IoT 메이커톤 404팀',
  intro:'Figma 레이아웃·베리언트와 프론트엔드 UI를 맡았습니다. 음성·이미지 처리와 기기 연결이 이어져야 하는 팀 프로젝트인 만큼, 화면의 동작과 다른 영역이 맡아야 할 일을 구분하는 것이 중요했습니다.',
  points:[
   {title:'화면에서 되는 일과 서버가 필요한 일 나누기',text:'백엔드 연결 안내에는 녹음·파일 선택·미리듣기 같은 로컬 동작과, 업로드·음성 복제·생성 결과 저장처럼 서버 연결이 필요한 동작이 구분돼 있습니다. 버튼이 보이는 상태와 기능이 실제 완료된 상태를 같은 것으로 보지 않도록 연결 기준을 정리한 자료입니다.'},
   {title:'생성과 기기 전달 사이의 상태 맞추기',text:'동화 생성과 Pi 전송을 별개의 동작으로 나누고, 준비 중인 결과를 재생 가능 상태로 보이지 않도록 대기·처리 중·완료·실패 상태가 제안돼 있습니다. 기기 연결에서도 로컬 화면 전환을 실제 등록 성공으로 처리하지 않는 기준이 남아 있습니다.'}
  ],
  takeaway:'서로 다른 영역을 연결할 때는 “이 화면이 나왔다”보다 “무엇이 끝났고, 다음 담당자가 무엇을 받아야 하는가”를 분명하게 만드는 것이 필요하다고 보았습니다.',
  sources:[['user-journey.md','사용자 이용 과정'],['interaction-design.md','상호작용 설계 근거']],
  note:'2026년 11월 2일 백엔드 연결 안내와 제공 자료 기준입니다. 생성 상태와 API는 당시 협의를 위한 제안이며, 최종 합의·통합 완료와 구분합니다.'
 }
};
export const designThoughts = {
 supjigi: { question:'정확한 이름을 몰라도 찾을 수 있을까?', reason:'검색하는 사람은 문서의 분류보다 지금 궁금한 내용을 먼저 떠올린다고 생각했습니다. 질문과 관련어를 기존 공략으로 연결하고, 찾은 정보를 바로 조합에 적용하는 흐름을 검토했습니다.', tradeoff:'검색이 답을 만들어내는 것처럼 보이지 않도록, 연결된 문서와 평가의 출처를 함께 보여주는 쪽을 택했습니다.' },
 omagotchi: { question:'화면이 작아져도 중요한 행동은 남아 있을까?', reason:'타이머·캐릭터·성장 정보를 한 화면에 담는 것만으로는 충분하지 않았습니다. 정보와 행동을 그룹으로 묶고, 화면 높이가 줄어도 스크롤로 필요한 기능에 도달할 수 있는지를 기준으로 구조를 재검토했습니다.', tradeoff:'모든 기기에서 같은 한 화면을 고집하기보다, 화면 크기에 따라 배치와 스크롤을 허용하는 방향을 택했습니다.' },
 tale: { question:'입력하는 사람과 듣는 사람에게 같은 화면이 필요할까?', reason:'목소리와 그림을 준비하는 보호자에게는 입력과 관리가, 이야기를 듣는 어린이에게는 선택과 재생이 중요하다고 보았습니다. 모바일과 터치 화면의 역할을 나누고, 감상 화면의 주요 조작을 중앙에 모았습니다.', tradeoff:'감상 화면에 준비 기능을 모두 넣기보다, 사용자와 사용 순간에 따라 기능을 나누는 방향으로 구성했습니다.' }
};
export const labels = {
 'pc-home-viewport':'데스크톱 홈 · 첫 화면','pc-home':'데스크톱 홈 · 전체','mobile-home-viewport':'모바일 홈 · 첫 화면','mobile-home':'모바일 홈 · 전체','pc-search':'데스크톱 검색','mobile-search':'모바일 검색','pc-detail':'데스크톱 문서 상세','mobile-detail':'모바일 문서 상세','pc-builder':'데스크톱 조합 편집','mobile-builder':'모바일 조합 편집','mobile-picker':'모바일 선택창','pc-skill-dialog':'데스크톱 스킬 상세창','mobile-skill-dialog':'모바일 스킬 상세창','pc-tiers':'데스크톱 티어표','mobile-tiers':'모바일 티어표',
 'mobile-build':'모바일 조합 화면','builder-before':'조합 편집 · 변경 전','builder-after':'조합 편집 · 변경 후','loadout-before':'조합 구성 · 변경 전','loadout-after':'조합 구성 · 변경 후','reading-before':'읽기 · 변경 전','reading-after':'읽기 · 변경 후','search-before':'검색 · 변경 전','search-after':'검색 · 변경 후','skill-before':'스킬 확인 · 변경 전','skill-after':'스킬 확인 · 변경 후','tier-table':'티어표 검토','performance-before':'성능 · 변경 전 기록','performance-changes':'성능 · 변경 내용','performance-check':'성능 · 확인 기록',
 'home':'홈 초기 시안','Login':'로그인 초기 시안','Stats':'통계 초기 시안','home-stage':'홈 Storybook 캡처','status-hud':'상태 HUD','action-dock':'행동 도크','timer-panel':'타이머 패널',
 '01-player-before':'기존 플레이어','02-player-overlay':'중앙 재생 오버레이','03-category-home':'카테고리 홈','04-home-landscape':'가로 화면 홈','05-home-larger':'큰 화면 홈','06-voice-picker':'목소리 선택','07-player-800x400':'800×400 플레이어','08-player-800x480':'800×480 플레이어','09-player-1024x600':'1024×600 플레이어','10-home-1280x720-concept':'1280×720 홈 시안','11-device-setup-design':'기기 설정 설계 보드','12-mobile-voice-design':'모바일 목소리 설계 보드','13-mobile-story-design':'모바일 이야기 설계 보드'
};
