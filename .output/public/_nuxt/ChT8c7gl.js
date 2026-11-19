import{bU as g}from"./C5ubzM73.js";g.setOptions({gfm:!0,breaks:!0});function b(n){if(!n||!n.trim())return"";try{return g.parse(n,{async:!1}).trim()}catch(e){return console.error("Failed to parse markdown to html:",e),n}}function y(n){return!n||typeof n!="string"?!1:[/^#{1,6}\s+/m,/^\s*[-*+]\s+/m,/^\s*\d+\.\s+/m,/^\s*>\s+/m,/```[\s\S]*?```/,/`[^`\n]+`/,/\[[^\]]+\]\([^)]+\)/,/!\[[^\]]*\]\([^)]+\)/,/\*\*[^*]+\*\*/,/~~[^~]+~~/,/\|.+\|.+\|\n\|[-:\s|]+\|/m,/^---$/m].some(s=>s.test(n))}function p(n,e={depth:0,ordered:!1,index:1}){if(n.nodeType===3)return n.nodeValue||"";if(n.nodeType!==1)return"";const s=n,d=s.tagName.toLowerCase(),i=Array.from(s.childNodes),a=(r=e)=>i.map(t=>p(t,r)).join("");switch(d){case"h1":return`# ${a().trim()}

`;case"h2":return`## ${a().trim()}

`;case"h3":return`### ${a().trim()}

`;case"h4":return`#### ${a().trim()}

`;case"h5":return`##### ${a().trim()}

`;case"h6":return`###### ${a().trim()}

`;case"p":{const r=a().trim();return r?`${r}

`:""}case"strong":case"b":{const r=a().trim();return r?`**${r}**`:""}case"em":case"i":{const r=a().trim();return r?`*${r}*`:""}case"s":case"del":case"strike":{const r=a().trim();return r?`~~${r}~~`:""}case"code":{if(s.parentElement&&s.parentElement.tagName.toLowerCase()==="pre")return s.textContent||"";const r=s.textContent||"";return r?`\`${r}\``:""}case"pre":{const r=s.querySelector("code");let t="";if(r){const c=(r.getAttribute("class")||"").match(/language-([a-zA-Z0-9_-]+)/);c&&c[1]&&(t=c[1])}const o=r?r.textContent||"":s.textContent||"";return`\`\`\`${t}
${o.replace(/\n+$/,"")}
\`\`\`

`}case"blockquote":return a().trim().split(`
`).map(o=>`> ${o}`).join(`
`)+`

`;case"ul":return i.map(r=>p(r,{depth:e.depth+1,ordered:!1,index:1})).join("")+(e.depth===0?`
`:"");case"ol":{let r=1;return i.map(t=>t.nodeType===1&&t.tagName.toLowerCase()==="li"?p(t,{depth:e.depth+1,ordered:!0,index:r++}):p(t,{depth:e.depth+1,ordered:!0,index:r})).join("")+(e.depth===0?`
`:"")}case"li":{const r="  ".repeat(Math.max(0,e.depth-1)),t=e.ordered?`${e.index}. `:"- ",o=[],l=[];for(const m of i){const h=m.nodeType===1?m.tagName.toLowerCase():"";h==="ul"||h==="ol"?l.push(p(m,{depth:e.depth,ordered:h==="ol",index:1})):o.push(p(m,e))}const c=o.join("").trim(),u=l.join("");return`${r}${t}${c}
${u}`}case"hr":return`---

`;case"br":return`
`;case"a":{const r=s.getAttribute("href")||"",t=a().trim();return t?`[${t}](${r})`:r}case"img":{const r=s.getAttribute("src")||"";return`![${s.getAttribute("alt")||""}](${r})`}case"table":{const r=Array.from(s.querySelectorAll("tr"));if(r.length===0)return"";let t="";const o=r.map(l=>Array.from(l.querySelectorAll("th, td")).map(c=>(c.textContent||"").trim().replace(/\|/g,"\\|")));if(o.length>0){const l=o[0]||[];t+=`| ${l.join(" | ")} |
`,t+=`| ${l.map(()=>"---").join(" | ")} |
`;for(let c=1;c<o.length;c++){const u=o[c]||[];t+=`| ${u.join(" | ")} |
`}t+=`
`}return t}default:return a()}}function $(n){let e=n;return e=e.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,""),e=e.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi,""),e=e.replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi,`# $1

`),e=e.replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi,`## $1

`),e=e.replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi,`### $1

`),e=e.replace(/<h4[^>]*>([\s\S]*?)<\/h4>/gi,`#### $1

`),e=e.replace(/<h5[^>]*>([\s\S]*?)<\/h5>/gi,`##### $1

`),e=e.replace(/<h6[^>]*>([\s\S]*?)<\/h6>/gi,`###### $1

`),e=e.replace(/<pre[^>]*><code(?: class="language-([a-zA-Z0-9_-]+)")?[^>]*>([\s\S]*?)<\/code><\/pre>/gi,(s,d,i)=>`\`\`\`${d||""}
${i.trim()}
\`\`\`

`),e=e.replace(/<blockquote[^>]*>([\s\S]*?)<\/blockquote>/gi,(s,d)=>d.replace(/<[^>]+>/g,"").trim().split(`
`).map(a=>`> ${a.trim()}`).join(`
`)+`

`),e=e.replace(/<(?:strong|b)[^>]*>([\s\S]*?)<\/(?:strong|b)>/gi,"**$1**"),e=e.replace(/<(?:em|i)[^>]*>([\s\S]*?)<\/(?:em|i)>/gi,"*$1*"),e=e.replace(/<(?:s|del|strike)[^>]*>([\s\S]*?)<\/(?:s|del|strike)>/gi,"~~$1~~"),e=e.replace(/<code[^>]*>([\s\S]*?)<\/code>/gi,"`$1`"),e=e.replace(/<a\s+[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi,"[$2]($1)"),e=e.replace(/<img\s+[^>]*src="([^"]*)"(?:\s+alt="([^"]*)")?[^>]*>/gi,"![$2]($1)"),e=e.replace(/<hr\s*\/?>/gi,`---

`),e=e.replace(/<br\s*\/?>/gi,`
`),e=e.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi,`- $1
`),e=e.replace(/<p[^>]*>([\s\S]*?)<\/p>/gi,`$1

`),e=e.replace(/<[^>]+>/g,""),e.trim()}function S(n){if(!n||!n.trim())return"";if(typeof window<"u"&&typeof DOMParser<"u")try{const s=new DOMParser().parseFromString(`<div>${n}</div>`,"text/html"),d=s.body.firstElementChild||s.body;return p(d).replace(/\n{3,}/g,`

`).trim()}catch(e){console.warn("DOMParser htmlToMarkdown failed, falling back to regex:",e)}return $(n).replace(/\n{3,}/g,`

`).trim()}export{S as h,y as i,b as m};
