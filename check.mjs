import assert from 'node:assert/strict';
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { projects } from './data.mjs';
const walk = dir => readdirSync(dir,{withFileTypes:true}).flatMap(entry=>entry.isDirectory()?walk(`${dir}/${entry.name}`):[`${dir}/${entry.name}`]);
const files=['index.html', ...projects.map(p=>`projects/${p.id}.html`),...walk('evidence').filter(file=>file.endsWith('.html'))];
for (const file of files) {
 const html = readFileSync(file,'utf8');
 assert(html.includes('lang="ko"'));
 assert.equal((html.match(/<h1>/g)||[]).length,1);
 for (const [,url] of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
   if (/^https?:/.test(url)) continue;
   if(url.startsWith('mailto:')) { assert(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(url.slice(7)),`${file}: invalid email link`);continue; }
   if(url.startsWith('#')) { assert(html.includes(`id="${url.slice(1)}"`),`${file}: missing anchor ${url}`);continue; }
   const path = new URL(url.split('#')[0],new URL(file,`file://${process.cwd().replaceAll('\\','/')}/`));
   assert(existsSync(path),`${file}: missing ${url}`);
 }
 assert(!/undefined|\[object Object\]/.test(html.replace(/<pre><code>[\s\S]*?<\/code><\/pre>/g,'')),`${file}: unexpected template output`);
 for(const [tag] of html.matchAll(/<img[^>]+src=[^>]+>/g)) {
   assert(/width="\d+"/.test(tag)&&/height="\d+"/.test(tag),`${file}: image needs intrinsic size`);
 }
 if(file.startsWith('projects/')) {
   assert(html.includes('aria-labelledby="zoom-title"'));
   assert(html.includes('id="evidence"'));
 }
}
const evidence=JSON.parse(readFileSync('evidence-manifest.json','utf8'));
const home=readFileSync('index.html','utf8');
assert.equal((home.match(/data-carousel-index=/g)||[]).length,3);
assert(home.indexOf('class="carousel-controls"')<home.indexOf('class="carousel-viewport"'),'Project selection must precede artwork in reading order');
assert(home.includes('귀뚜라미보일러')&&!home.includes('키투라미'));
assert(!/인턴|지원 포트폴리오/.test(home));
for(const p of projects)assert(home.includes(`id="thinking"`)&&readFileSync(`projects/${p.id}.html`,'utf8').includes(`id="thinking-${p.id}"`));
for(const id of ['omagotchi','tale'])assert(readFileSync(`projects/${id}.html`,'utf8').includes('id="collaboration"'));
for(const [id,entry] of Object.entries(evidence)) {
 const html=readFileSync(`projects/${id}.html`,'utf8');
 assert.equal((html.match(/data-case-nav/g)||[]).length,2,`${id}: desktop and mobile navigation required`);
 assert(html.indexOf('id="chapter-0"')<html.indexOf('id="decisions"'),`${id}: show examples before extended decisions`);
 const firstChapter=html.slice(html.indexOf('id="chapter-0"'),html.indexOf('id="chapter-1"'));
 assert(firstChapter.indexOf('class="gallery')<firstChapter.indexOf('class="chapter-reason"'),`${id}: show screenshot before explanation`);
 for(const item of entry.images)assert(html.includes(item.src),`${id}: missing evidence image ${item.name}`);
}
console.log(`PASS: ${files.length} pages, links, anchors, intrinsic image sizes, accessible lightboxes, and all ${Object.values(evidence).reduce((sum,entry)=>sum+entry.images.length,0)} evidence images.`);
