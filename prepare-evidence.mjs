import { readdirSync, readFileSync, mkdirSync, copyFileSync, writeFileSync } from 'node:fs';
import { join, relative, extname, basename } from 'node:path';
import { labels } from './case-notes.mjs';

const roots = {
  tale: 'C:/Users/mjm32/OneDrive/Desktop/portfolio-evidence',
  supjigi: 'C:/Users/mjm32/OneDrive/Desktop/portfolio-evidence1',
  omagotchi: 'C:/Users/mjm32/OneDrive/Desktop/portfolio-evidence2'
};
const walk = path => readdirSync(path, {withFileTypes:true}).flatMap(entry => entry.isDirectory() ? walk(join(path,entry.name)) : [join(path,entry.name)]);
const result = {};
for (const [id, root] of Object.entries(roots)) {
  const screens = join(root,'screens');
  const images = walk(screens).filter(path => /\.(png|jpe?g|webp|svg)$/i.test(path)).map(path => {
    const name = relative(screens,path).replaceAll('\\','/');
    const destination = `assets/${id}/evidence/${name}`;
    mkdirSync(join(destination,'..'),{recursive:true});
    copyFileSync(path,destination);
    return {src:destination, name, archive:name.startsWith('archive/'), format:extname(name).slice(1)};
  });
  if(id==='tale') {
    for(const item of images){item.archive=true;item.caption=`${labels[basename(item.name).replace(/\.[^.]+$/,'')]||item.name} / 과거 설계·검토 자료`;}
    const mobileRoot='C:/Users/mjm32/OneDrive/문서/ChatGPT/GIST/output/backend-handoff-2026-11-02/screenshots';
    for(const [file,target,label] of [['m02.jpg','mobile-books.jpg','모바일 웹 · 책 목록'],['m06.jpg','mobile-recording.jpg','모바일 웹 · 목소리 녹음'],['m08.jpg','mobile-story.jpg','모바일 웹 · 그림과 이야기 입력']]) {
      const src=`assets/tale/${target}`;
      copyFileSync(join(mobileRoot,file),src);
      images.push({src,name:target,archive:true,format:'jpg',caption:`${label} / 2026.11.02 과거 브라우저 캡처`});
    }
    const current=join('assets','tale','current');
    const titles={'kiosk-home':'Pi 동화 종류 선택','kiosk-books':'Pi 책장','kiosk-player':'Pi 플레이어','kiosk-voice-picker':'Pi 목소리 선택','kiosk-account':'Pi 기기·저장 관리','kiosk-setup':'Pi 초기 설정','mobile-books':'모바일 책 목록','mobile-voices':'모바일 목소리 입력','mobile-story':'모바일 그림·요청 입력','mobile-account':'모바일 계정·저장 관리'};
    for(const file of readdirSync(current).filter(name=>name.endsWith('.jpg'))) {
      const src=`assets/tale/current/${file}`;
      images.push({src,name:file,archive:false,format:'jpg',caption:`${titles[file.replace('.jpg','')]} / dev 66b1e1e 프론트 캡처 / 테스트 데이터`});
    }
  }
  if(id==='omagotchi') {
    for(const item of images){item.archive=true;item.caption=(item.name.startsWith('prototype')?'초기 프로토타입':'기존 Storybook')+' / '+(labels[basename(item.name).replace(/\.[^.]+$/,'')]||item.name);}
    const titles={'desktop-home.jpg':'데스크톱 홈 / 1280×1000','desktop-profile.png':'내 정보 패널 / 원본 영역 발췌','mobile-home.jpg':'모바일 홈 / 390×844','mobile-quests.png':'모바일 퀘스트 / 원본 영역 발췌'};
    for(const [file,title] of Object.entries(titles))images.push({src:'assets/omagotchi/live/'+file,name:file,archive:false,format:extname(file).slice(1),caption:title+' / omagotchi.site 운영 화면 / 2026.11.15'});
  }
  // Collection indexes contain machine paths and duplicate the authored source documents.
  const documents = walk(root).filter(path => extname(path)==='.md' && !relative(root,path).replaceAll('\\','/').match(/(^|\/)(README|sources|missing|contributions|collection-check|original-artifact-inventory|git-history|source-excerpts)\.md$|^screens\//));
  const docs = documents.map((path,index) => {
    const original = readFileSync(path,'utf8');
    const title = original.match(/^#\s+(.+)$/m)?.[1] || basename(path,'.md');
    const content = original
      .replace(/[A-Z]:[\\/](?:[^\s<>`"|]+[\\/])*[^\s<>`"|]*/g,'[로컬 원본 경로 생략]')
      .replace(/[\w.+-]+@[\w.-]+\.[a-z]{2,}/gi,'[이메일 생략]');
    const output = `evidence/${id}/document-${index+1}.txt`;
    mkdirSync(`evidence/${id}`,{recursive:true});
    writeFileSync(output,content);
    return {title,src:output, original:relative(root,path).replaceAll('\\','/')};
  });
  const repeatedTitles=new Set(docs.filter((doc,index)=>docs.findIndex(other=>other.title===doc.title)!==index).map(doc=>doc.title));
  for(const doc of docs)if(repeatedTitles.has(doc.title))doc.title+=doc.original.includes('work-notes/')?' — 개인 작업 기록':' — 프론트엔드 문서';
  result[id] = {images,docs};
  if(id==='omagotchi') {
    result[id].code = [
      'design/code/ui/GameButton.jsx', 'design/code/ui/GameButton.stories.jsx',
      'design/code/ui/GameDialog.jsx', 'design/code/ui/GameField.jsx',
      'design/code/frontend/home-react/components/CharacterStage.jsx'
    ].map(source=>{
      const src=`evidence/${id}/${basename(source)}.txt`;
      copyFileSync(join(root,source),src);
      return {title:basename(source),src};
    });
  }
}
writeFileSync('evidence-manifest.json',JSON.stringify(result,null,2));
console.log(Object.entries(result).map(([id,v])=>`${id}: ${v.images.length} images, ${v.docs.length} documents`).join('\n'));
