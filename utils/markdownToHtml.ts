import remark from 'remark';
import toc from 'remark-toc';
import remark2rehype from 'remark-rehype';
import html from 'rehype-stringify';

export default async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(toc)
    .use(remark2rehype)
    .use(html)
    .process(markdown);
  return result.toString();
}
