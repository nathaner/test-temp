import Head from 'next/head';
import Link from 'next/link';
import Container from '../../components/common/Container';

type Post = {
  title: string;
  slug: string;
  excerpt: string;
};

const { BLOG_URL, CONTENT_API_KEY } = process.env;

async function getPosts() {
  const res = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}`
  ).then((res) => res.json());

  const posts = res.posts;

  return posts;
}

export const getStaticProps = async ({ params }) => {
  const posts = await getPosts();
  return {
    props: { posts },
  };
};

export const Blog: React.FC<{ posts: Post[] }> = (props) => {
  const { posts } = props;
    
  return (
    <>
      <Head>
        <title>Vaultinum Blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="robots" content="noindex" />
      </Head>
      <Container>
        <main className="blog">
          <h1>Vaultinum Blog</h1>
          <ul>
            {posts.map((post, index) => {
              return (
                <article key={index}>
                  <header>
                    <h2>
                      <Link
                        href="/blog/post/[slug]"
                        as={`/blog/post/${post.slug}`}
                      >
                        <a>{post.title}</a>
                      </Link>
                    </h2>
                  </header>
                  <section>{post.excerpt}</section>
                </article>
              );
            })}
          </ul>
        </main>
      </Container>
    </>
  );
};

export default Blog;
