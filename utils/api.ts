const postQuery = `
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
`;

type posts = {
  posts: Post[];
};

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

export async function getAllPosts() {
  const data = await fetchAPI(`query Posts {
    posts{
      ${postQuery}
    }
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
          posts{
            ${postQuery}
          }
        }
      }`,
    { variables: { slug } }
  );
  return data.tags[0];
}

export async function getPostsByCategory(slug) {
  const data = await fetchAPI(
    `query Category ($slug:String!){
      posts(where:{category:{slug:$slug}}){
        ${postQuery}
      }
    }
  `,
    { variables: { slug } }
  );
  return data.categories[0];
}

export async function PagedAllPosts(page: number) {
  const perPage = +process.env.PER_PAGE;
  const curPage = perPage * page - perPage || 0;
  const data = await fetchAPI(
    `query posts ($curPage:Int!, $perPage:Int!){
      posts(limit: $perPage, start: $curPage){
        ${postQuery}
      }
      postsCount
    }
  `,
    { variables: { curPage, perPage } }
  );
  data.lastPage = Math.ceil(data.postsCount / perPage);

  return data;
}

export async function PagedPostBySlug(
  page: number,
  slug: string,
  queryTarget: string
) {
  const perPage = +process.env.PER_PAGE;
  const curPage = perPage * (page - 1) || 1;
  const data: posts = await fetchAPI(
    `query posts ($curPage:Int!, $perPage:Int!, $slug:String!){
      posts(where: {${queryTarget}: {slug: $slug}} limit: $perPage, start: $curPage){
        ${postQuery}
      }
    }
  `,
    { variables: { curPage, perPage, slug } }
  );
  data.lastPage = Math.ceil(data.posts.length / perPage);
  return data;
}
