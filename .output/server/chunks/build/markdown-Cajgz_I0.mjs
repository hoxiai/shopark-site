import { marked } from 'marked';

marked.setOptions({
  gfm: true,
  breaks: true
});
function markdownToHtml(markdown) {
  if (!markdown || !markdown.trim()) return "";
  try {
    const html = marked.parse(markdown, { async: false });
    return html.trim();
  } catch (error) {
    console.error("Failed to parse markdown to html:", error);
    return markdown;
  }
}
function regexHtmlToMarkdown(html) {
  let md = html;
  md = md.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");
  md = md.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, "");
  md = md.replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, "# $1\n\n");
  md = md.replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, "## $1\n\n");
  md = md.replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, "### $1\n\n");
  md = md.replace(/<h4[^>]*>([\s\S]*?)<\/h4>/gi, "#### $1\n\n");
  md = md.replace(/<h5[^>]*>([\s\S]*?)<\/h5>/gi, "##### $1\n\n");
  md = md.replace(/<h6[^>]*>([\s\S]*?)<\/h6>/gi, "###### $1\n\n");
  md = md.replace(/<pre[^>]*><code(?: class="language-([a-zA-Z0-9_-]+)")?[^>]*>([\s\S]*?)<\/code><\/pre>/gi, (_, lang, code) => {
    return `\`\`\`${lang || ""}
${code.trim()}
\`\`\`

`;
  });
  md = md.replace(/<blockquote[^>]*>([\s\S]*?)<\/blockquote>/gi, (_, content) => {
    const lines = content.replace(/<[^>]+>/g, "").trim().split("\n");
    return lines.map((l) => `> ${l.trim()}`).join("\n") + "\n\n";
  });
  md = md.replace(/<(?:strong|b)[^>]*>([\s\S]*?)<\/(?:strong|b)>/gi, "**$1**");
  md = md.replace(/<(?:em|i)[^>]*>([\s\S]*?)<\/(?:em|i)>/gi, "*$1*");
  md = md.replace(/<(?:s|del|strike)[^>]*>([\s\S]*?)<\/(?:s|del|strike)>/gi, "~~$1~~");
  md = md.replace(/<code[^>]*>([\s\S]*?)<\/code>/gi, "`$1`");
  md = md.replace(/<a\s+[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi, "[$2]($1)");
  md = md.replace(/<img\s+[^>]*src="([^"]*)"(?:\s+alt="([^"]*)")?[^>]*>/gi, "![$2]($1)");
  md = md.replace(/<hr\s*\/?>/gi, "---\n\n");
  md = md.replace(/<br\s*\/?>/gi, "\n");
  md = md.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, "- $1\n");
  md = md.replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, "$1\n\n");
  md = md.replace(/<[^>]+>/g, "");
  return md.trim();
}
function htmlToMarkdown(html) {
  if (!html || !html.trim()) return "";
  return regexHtmlToMarkdown(html).replace(/\n{3,}/g, "\n\n").trim();
}

export { htmlToMarkdown as h, markdownToHtml as m };
//# sourceMappingURL=markdown-Cajgz_I0.mjs.map
