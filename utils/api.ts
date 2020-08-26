import fs from 'fs';
import { join } from 'path';
import { Query } from 'types/types';

async function fetchAPI(query, { variables } = {}) {
  const res = await fetch(`${process.env.API_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }

  return json.data;
}

export async function getPosts() {
  const data = await fetchAPI(`query Posts {
    posts(where: {draft:"false"}){
      id
      title
      category{
        name
        color
      }
      tags{
        name
        color
      }
    }
  }`);
  return data.posts;
}

export async function getPost(id) {
  const data = await fetchAPI(
    `query Post ($id:ID!){
      post(id: $id){
        id
        title
        content
        thumbnail{
          name
          alternativeText
        }
        tags{
          id
          name
          color
        }
      }
    }`,
    { variables: { id } }
  );
  return data.post;
}

export async function getTags() {
  const data = await fetchAPI(`
  query Tags{
    tags{
      id
      name
      color
    }
  }`);
  return data.tags;
}

export async function getTag(id) {
  const data = await fetchAPI(
    `query Tags ($id:ID!){
      tag(id:$id){
          id
          name
          color
        posts{
          id
          title
        }
      }
    }`,
    { variables: { id }}
  );
  return data.tag;
}
/*
export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

*/
