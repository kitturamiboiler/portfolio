import { profile, projects } from './data.mjs';
import { image, contactLinks } from './render.mjs';
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
  <div class="resume-statement-body"><p class="resume-pending">추후 작성 예정</p></div>
 </section>
 <section class="resume-education" aria-labelledby="resume-education-title">
  <h2 id="resume-education-title">학력</h2>
  <p class="resume-pending">추후 작성 예정</p>
 </section>
 <section class="resume-projects" aria-labelledby="resume-projects-title">
  <h2 id="resume-projects-title">프로젝트에서 맡은 일</h2>
  <article class="resume-project">
   <div><h3><a href="projects/omagotchi.html">Omagotchi</a></h3><p class="resume-context">캐릭터 기반 학습 서비스<br> NHN Academy 8인 팀 프로젝트</p>${projectPeriod('omagotchi')}</div>
   <div><p class="resume-responsibility">반응형 UI와 공통 컴포넌트 설계·구현</p><ul><li>프론트엔드 전반을 맡아 홈의 반응형 구조와 상태별 UI를 구현했습니다.</li><li>기능별 연결 기준과 인계 문서를 정리해 개발 협업을 지원했습니다.</li></ul><a class="resume-case-link" href="projects/omagotchi.html">설계와 구현 과정 보기</a></div>
  </article>
  <article class="resume-project">
   <div><h3><a href="projects/tale.html">Voice Tale × Image Tale</a></h3><p class="resume-context">모바일과 Raspberry Pi를 잇는 AI 동화<br> GIST 메이커톤 404팀</p>${projectPeriod('tale')}</div>
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
