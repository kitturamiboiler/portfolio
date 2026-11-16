import { profile, projects } from './data.mjs';
import { image, contactLinks, projectName } from './render.mjs';
const projectPeriod=id=>{const p=projects.find(p=>p.id===id);return `<p class="resume-context">${p.periodLabel}<br> ${p.period}</p>`;};

export const about=()=>`<main id="main" class="resume wrap">
 <header class="resume-header" id="top">
  <div class="resume-identity">
   <h1>${profile.name}</h1>
   <p class="resume-alias">${profile.nickname}</p>
   <p class="resume-discipline">UI/UX Design & Frontend</p>
   <p class="resume-lead">사용 흐름을 설계하고,<br>화면으로 구현합니다.</p>
  </div>
  <figure class="resume-portrait">${image('assets/profile/moon-jaemin-restored.png','문재민 프로필 사진','',true)}</figure>
  <div class="resume-contact">${contactLinks()}</div>
 </header>
 <section class="resume-intro" aria-labelledby="resume-intro-title">
  <h2 id="resume-intro-title">소개</h2>
  <div><p>정보 구조와 화면 상태를 설계하고, 프론트엔드에서 실제 동작으로 연결합니다. 작은 화면에서 필요한 기능에 도달할 수 있는지, 다음 행동이 분명한지를 살피며 UI를 다듬습니다.</p><p>Figma에서 레이아웃과 베리언트를 구성하고, 구현 과정에서는 반응형 배치와 공통 UI 상태를 검토합니다. 팀원이 기능을 이어 붙일 수 있도록 연결 지점과 남은 결정을 문서로 정리합니다.</p></div>
 </section>
 <section class="resume-statement" aria-labelledby="resume-statement-title">
  <h2 id="resume-statement-title">자기소개서</h2>
  <div class="resume-statement-body">
   <h3>지원동기</h3>
   <p>프론트엔드를 구현하면서 기능이 동작하는 것과 편하게 사용할 수 있는 화면을 만드는 것은 다르다는 점을 배웠습니다. 화면을 어떤 순서로 보여주고, 사용자의 다음 행동을 어떻게 도울지 고민하는 과정에 관심이 생겼습니다. 직접 구현해 온 경험을 바탕으로 설계 의도를 화면에 담고, 피드백을 통해 발전시키는 UI/UX 디자이너로 일하고 싶습니다.</p>
   <h3>프로젝트 경험과 피드백</h3>
   <p>Voice Tale × Image Tale에서는 프론트엔드와 UI 작업 대부분을 맡았습니다. 구현에는 AI를 적극 활용했고, 화면의 구성과 동작을 검토하며 수정했습니다. 처음 플레이어를 만들었을 때 팀원에게 “굳이 이렇게 만든 이유가 있어?”, “어떤 의도로 만든 화면이야?”라는 질문을 받았습니다.</p>
   <p>그 질문을 계기로 우리 서비스가 이야기를 듣는 것뿐 아니라 글을 함께 읽는 리딩 서비스라는 점을 다시 생각했습니다. 본문도 함께 보여주자는 의견을 받아들여 Spotify와 YouTube Music의 플레이어 구성을 참고하고, 글과 재생 조작을 함께 볼 수 있도록 화면을 수정했습니다. 피드백을 통해 제가 놓친 서비스의 목적을 다시 확인하고, 설계를 바꾼 경험입니다.</p>
   <h3>성격의 장단점</h3>
   <p>제 강점은 부족한 부분을 인정하고 다시 시도하는 끈기입니다. 수정할 점을 들으면 더 잘 만들 기회가 생겼다고 생각하며, 시도한 방법이 잘되지 않더라도 원인을 살피고 다른 방법을 찾으려 합니다. 다만 작은 정렬이나 간격 차이가 눈에 들어오면 이를 바로잡는 데 시간을 오래 쓰기도 합니다. 이를 보완하기 위해 사용에 영향을 주는 문제부터 해결하고, 세부적인 표현은 이후에 다듬는 식으로 작업 순서를 잡으려 합니다.</p>
   <h3>앞으로의 성장</h3>
   <p>앞으로 몇 년 동안은 제가 만든 화면이 왜 이렇게 생겼는지, 왜 이 위치에 이 기능이 있어야 하는지 제 말로 설명할 수 있는 디자이너가 되고 싶습니다. 지금은 구현에 AI의 도움을 많이 받고 있지만, 화면을 판단하고 결과를 책임지는 능력은 제가 길러야 한다고 생각합니다. 먼저 팀의 피드백과 실제 사용자의 반응을 통해 제 판단이 맞았는지 확인하는 경험을 쌓고 싶습니다. 그렇게 경험을 쌓아, 몇 년 뒤에는 주어진 화면을 만드는 데서 더 나아가 무엇을 고쳐야 하는지 먼저 발견하고 팀과 함께 해결하는 사람이 되고 싶습니다. 지금도 부족한 점을 들으면 다시 만들어 보고 싶어지는 마음이 있습니다. 실력이 쌓인 뒤에도 그 태도는 잃지 않고 싶습니다.</p>
  </div>
 </section>
 <section class="resume-education" aria-labelledby="resume-education-title">
  <h2 id="resume-education-title">학력</h2>
  <div><h3>조선대학교</h3><p>재학 · 졸업예정</p><p class="resume-context">2021.03 ~</p><p>취업계 가능</p></div>
 </section>
 <section class="resume-projects" aria-labelledby="resume-projects-title">
  <h2 id="resume-projects-title">프로젝트에서 맡은 일</h2>
  <article class="resume-project">
   <div><h3><a href="projects/omagotchi.html">Omagotchi</a></h3><p class="resume-context">캐릭터 기반 학습 서비스<br> NHN Academy 8인 팀 프로젝트</p>${projectPeriod('omagotchi')}</div>
   <div><p class="resume-responsibility">반응형 UI와 공통 컴포넌트 설계·구현</p><ul><li>프론트엔드 전반을 맡아 홈의 반응형 구조와 상태별 UI를 구현했습니다.</li><li>기능별 연결 기준과 인계 문서를 정리해 개발 협업을 지원했습니다.</li></ul><a class="resume-case-link" href="projects/omagotchi.html">설계와 구현 과정 보기</a></div>
  </article>
  <article class="resume-project">
   <div><h3><a href="projects/tale.html">${projectName('Voice Tale × Image Tale')}</a></h3><p class="resume-context">모바일과 Raspberry Pi를 잇는 AI 동화<br> GIST 메이커톤 404팀</p>${projectPeriod('tale')}</div>
   <div><p class="resume-responsibility">Figma 레이아웃과 베리언트, 프론트엔드 UI</p><ul><li>보호자의 모바일 입력과 어린이의 기기 감상을 나눠 화면을 구성했습니다.</li><li>전용 터치 화면의 선택·재생 흐름과 서로 다른 기술 영역의 연결을 고려했습니다.</li></ul><a class="resume-case-link" href="projects/tale.html">모바일과 기기 UI 보기</a></div>
  </article>
  <article class="resume-project">
   <div><h3><a href="projects/supjigi.html">숲지기</a></h3><p class="resume-context">게임 정보 탐색·조합 웹</p>${projectPeriod('supjigi')}</div>
   <div><p class="resume-responsibility">AI를 활용한 웹 구현 · 정보 탐색과 모바일 UI 검토</p><ul><li>질문 검색에서 공략을 찾고 스킬 조합으로 이어지는 탐색 흐름을 검토했습니다.</li><li>모바일에서 슬롯을 선택하고 효과를 비교하며 조합을 편집할 수 있도록 구성했습니다.</li></ul><a class="resume-case-link" href="projects/supjigi.html">정보 탐색 사례 보기</a></div>
  </article>
 </section>
 <section class="resume-awards" aria-labelledby="resume-awards-title">
  <h2 id="resume-awards-title">수상</h2>
  <div class="resume-award-entry">
   <div class="resume-award-copy"><time datetime="2026-11-07">2026.11.07</time><h3>우수상</h3><p>제14회 GIST AI&IoT 메이커톤<br>GIST 창업진흥센터장상</p><p>404팀 · Voice Tale × Image Tale</p><a class="resume-case-link" href="projects/tale.html">수상 프로젝트 보기</a></div>
   <figure class="resume-award-photo"><button class="image-zoom" data-zoom aria-label="메이커톤 우수상 수상 사진 확대 보기" title="이미지 확대"><span class="zoom-label" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m15.5 15.5 4.5 4.5M7.5 10.5h6m-3-3v6"/></svg></span>${image('assets/profile/gist-excellence-2026.png','404팀이 함께 촬영한 메이커톤 우수상 수상 기념 사진')}</button><figcaption>팀원들과 함께 남긴 수상 기념 사진</figcaption></figure>
  </div>
 </section>
 <p class="resume-bottom-link"><a href="index.html#work">프로젝트 전체 보기</a></p>
</main>`;
