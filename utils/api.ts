import fs from 'fs';
import { join } from 'path';

const postQuery = `posts(where: {draft:"false"}){
  title
  created_at
  slug
  category{
    name
    color
    slug
  }
  tags{
    name
    slug
    color
  }
}`;

async function fetchAPI(query, { variables }: any = {}) {
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

export async function getAllPosts() {
  const data = await fetchAPI(`query Posts {
    ${postQuery}
  }`);
  return data.posts;
}

export async function getAllTags() {
  const data = await fetchAPI(
    `query Tags {
      tags{
        name
        slug
        color
      }
    }`
  );
  return data.tags;
}

export async function getAllCategories() {
  const data = await fetchAPI(
    `query Categories {
      categories{
        name
        slug
        color
      }
    }`
  );
  return data.categories;
}

export async function getPostBySlug(slug) {
  const data = await fetchAPI(
    `query Posts ($slug: String!){
      posts(where: {slug:$slug}) {
        id
        title
        slug
        created_at
        category{
          name
          slug
          color
        }
        tags{
          name
          slug
          color
        }
        image{
          url
        }
        content
      }
    }
  `,
    { variables: { slug } }
  );
  return data.posts[0];
}

export async function getPostsByTag(slug) {
  const data = await fetchAPI(
    `query Tags ($slug:String!){
      tags(where: {slug: $slug}){
          name
          color
          ${postQuery}
        }
      }`,
    { variables: { slug } }
  );
  return data.tags[0];
}

export async function getPostsByCategory(slug) {
  const data = await fetchAPI(
    `query Category ($slug:String!){
      categories(where: {slug: $slug}){
          name
          color
        ${postQuery}
      }
    }
  `,
    { variables: { slug } }
  );
  return data.categories[0];
}
