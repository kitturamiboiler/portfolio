import { mkdirSync } from 'node:fs';
import { projects } from './data.mjs';
import { notes } from './case-notes.mjs';
import { screenStories } from './screen-stories.mjs';
import { about } from './about.mjs';
import { head, nav, footer, home, image, gallery, lightbox, special, library, designReflection, savePage, omagotchiShowcase, projectName } from './render.mjs';

savePage('index.html',head('찾기 쉽게, 행동은 분명하게','정보 구조, 반응형 UI, 상태 설계와 프론트엔드 구현을 연결한 세 프로젝트.')+nav()+home()+footer()+'</body></html>');
savePage('about.html',head('문재민 소개','문재민의 UI/UX·프론트엔드 프로젝트 경험과 담당 역할, 수상 이력.')+nav('','about')+about()+footer()+lightbox+'</body></html>');
mkdirSync('projects',{recursive:true});
for(const [index,p] of projects.entries()) {
 const n=notes[p.id];
 const chapters=[...p.chapters,...n.extraChapters];
 const primaryCount=p.id==='omagotchi'?2:p.chapters.length;
 const chapter=(c,i)=>{
  const stories=screenStories[p.id]?.[i];
  if(!stories||stories.length!==c.images.length)throw Error('Missing screen stories: '+p.id+'/'+i);
  return `<section class="chapter" id="chapter-${i}"><div class="chapter-copy"><h2>${c.title}</h2></div><div class="screen-stories">${c.images.map((entry,j)=>{const [title,text]=stories[j];const mobile=/mobile|reading-/.test(entry[0]);return `<article class="screen-story${j%2?' screen-story-reverse':''}${mobile?' screen-story-mobile':''}"><div class="screen-story-media">${gallery([entry],c.layout)}</div><div class="screen-story-copy"><h3>${title}</h3><p class="chapter-reason">${text}</p></div></article>`;}).join('')}</div></section>`;
 };
 const chapterLinks=chapters.map((c,i)=>[`chapter-${i}`,c.title]);
 const links=[...chapterLinks.slice(0,primaryCount),...(n.eventPhotos?[['event-photos','대회 현장과 실물 기기']]:[]),['context','문제와 방향'],['decisions','핵심 설계 판단'],[`thinking-${p.id}`,'설계할 때 생각한 것'],...chapterLinks.slice(primaryCount),['design-proof','구현 근거'],...(p.id==='supjigi'?[]:[['collaboration','협업과 조율']]),['reflection','결과와 검증 범위'],['evidence','전체 화면·문서']];
 const tocLinks=()=>links.map(([id,title])=>`<a href="#${id}">${title}</a>`).join('');
 const decisions=`<section class="decision-section" id="decisions"><h2>${n.focus}</h2><p class="diagram-caption">제공 화면과 문서에서 재구성한 과업 흐름 · 사용자 조사 결과가 아닙니다.</p><ol class="task-flow">${n.flow.map(step=>`<li>${step}</li>`).join('')}</ol><dl class="decision-list">${n.choices.map(([label,choice,why])=>`<div><dt>${label}</dt><dd><strong>${choice}</strong><p>${why}</p></dd></div>`).join('')}</dl></section>`;
 const next=projects[(index+1)%projects.length];
 savePage(`projects/${p.id}.html`,head(p.name,p.summary,'../')+nav('../')+`
 <main id="main" class="case-${p.id}">
  <section class="case-head wrap" id="top">
   <a class="back text-link" href="../index.html#work">프로젝트 목록</a>
   <div class="case-intro-grid">
    <div><h1>${projectName(p.name)}</h1><p class="case-tagline">${p.title.replace('\n',' ')}</p><p class="case-summary">${p.summary}</p>${p.live?`<a class="text-link" href="${p.live}" target="_blank" rel="noopener">서비스 보기</a>`:''}</div>
    <dl class="case-meta"><div><dt>프로젝트</dt><dd>${p.type}</dd></div><div><dt>담당 역할</dt><dd>${n.role}</dd></div><div><dt>${p.periodLabel}</dt><dd>${p.period}</dd></div><div><dt>자료 기준</dt><dd>${p.status}</dd></div></dl>
   </div>
  </section>
  <details class="mobile-case-nav">
   <summary><span class="toc-label">목차</span><span data-current-section>${links[0][1]}</span><span class="toc-open">열기</span><span class="toc-close">닫기</span></summary>
   <nav aria-label="모바일 사례 목차" data-case-nav>${tocLinks()}</nav>
  </details>
  <div class="case-cover ${p.color}"><div class="wrap case-cover-composition">${p.id==='omagotchi'?omagotchiShowcase('../'):image('../'+p.cover,p.coverAlt,'',true)}${p.id==='tale'?'<figure class="case-mobile-preview">'+image('../'+p.mobile,p.mobileAlt)+'<figcaption>모바일 웹 / 390×844 / dev 66b1e1e</figcaption></figure>':''}</div></div>
  <div class="case-layout wrap">
   <aside class="case-toc"><p>${projectName(p.name)}</p><nav aria-label="사례 목차" data-case-nav>${tocLinks()}</nav></aside>
   <div class="case-body">
    ${chapters.slice(0,primaryCount).map(chapter).join('')}
${n.eventPhotos?`<section class="chapter" id="event-photos"><div class="chapter-copy"><h2>화면이 실제 기기에 담기기까지</h2></div><p class="chapter-reason">GIST AI&amp;IoT 메이커톤 당시 팀의 제작 현장입니다. 실물 터치 화면에 표시된 Voice Tale 책장과 Raspberry Pi 조립, 부품과 배선을 준비한 작업 공간을 함께 담았습니다. 아래 사진은 대회 당시 기록이며, 위의 최신 dev 프론트 캡처와는 시점이 다릅니다.</p>${gallery([...n.eventPhotos.primary,...n.eventPhotos.additional],"event-photos")}</section>`:''}
    <section class="context" id="context"><p class="case-background">${p.intro}</p><div><h2>시작한 문제</h2><p>${p.context}</p></div><div><h2>선택한 방향</h2><p>${p.decision}</p></div></section>
    ${decisions}${designReflection(p)}
    ${chapters.slice(primaryCount).map((c,i)=>chapter(c,i+primaryCount)).join('')}
    ${special(p)}
    <section class="reflection" id="reflection"><h2>만든 결과와 남은 질문</h2><h3>만든 결과</h3><p>${n.outcome}</p><h3>다음에 확인할 것</h3><p>${p.next}</p><details class="source"><summary>검증 범위와 자료 기준</summary><p>${n.limitation}</p><p>2026년 11월 15일 수집 자료 기준입니다. 담당 역할은 본인 설명을 반영했으며, 팀 산출물 전체를 개인 기여로 해석하지 않습니다.</p></details></section>
    ${library(p)}
   </div>
  </div>
  <section class="next-project wrap"><p>다음 프로젝트</p><a href="${next.id}.html"><h2>${projectName(next.name)}</h2></a></section>
 </main>`+footer('../')+lightbox+'</body></html>');
}
console.log('Built 5 portfolio pages and 39 source document readers; evidence images catalogued.');
