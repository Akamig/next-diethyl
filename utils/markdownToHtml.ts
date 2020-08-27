import unified from 'unified';
import mdparse from 'remark-parse';
import remark2rehype from 'remark-rehype';
import html from 'rehype-stringify';

export default async function markdownToHtml(markdown: string) {
  const result = await unified()
    .use(mdparse)
    .use(remark2rehype)
    .use(html)
    .process(markdown);
  return result.toString();
}
