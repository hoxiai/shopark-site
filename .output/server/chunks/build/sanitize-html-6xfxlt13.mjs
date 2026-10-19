const DROPPED_TAGS = ["script", "iframe", "object", "embed", "style", "link", "meta", "base", "form", "svg", "math", "template", "noscript"];
const unsafeUrl = (value) => /^(?:\s|\/|\\)*(?:javascript|vbscript|data):/i.test(value);
function sanitizeRichHtml(value) {
  let html = value.replace(/<!--[\s\S]*?-->/g, "");
  for (const tag of DROPPED_TAGS) {
    const paired = new RegExp(`<${tag}\\b[^>]*>[\\s\\S]*?<\\/${tag}\\s*>`, "gi");
    const single = new RegExp(`<${tag}\\b[^>]*\\/?>`, "gi");
    html = html.replace(paired, "").replace(single, "");
  }
  html = html.replace(/\s+on[a-z0-9:-]+\s*=\s*("[^"]*"|'[^']*'|[^\s"'=<>`]+)/gi, "").replace(/\s+style\s*=\s*("[^"]*"|'[^']*'|[^\s"'=<>`]+)/gi, "");
  const quotedUrl = /\s+(href|src|xlink:href|action|formaction)\s*=\s*(['"])\s*([^'"]*)\2/gi;
  const bareUrl = /\s+(href|src|xlink:href|action|formaction)\s*=\s*([^\s"'=<>`]+)/gi;
  return html.replace(quotedUrl, (match, _attr, _quote, url) => unsafeUrl(String(url)) ? "" : match).replace(bareUrl, (match, _attr, url) => unsafeUrl(String(url)) ? "" : match);
}

export { sanitizeRichHtml as s };
//# sourceMappingURL=sanitize-html-6xfxlt13.mjs.map
