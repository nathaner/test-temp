import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Container from '../../../components/common/Container';

const { BLOG_URL, CONTENT_API_KEY } = process.env;

async function getPost(slug: string) {
  const res = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts/slug/${slug}?key=${CONTENT_API_KEY}`
  ).then((res) => res.json());

  const posts = res.posts;

  return posts[0];
}

// Ghost CMS Request
export const getStaticProps = async ({ params }) => {
  const post = await getPost(params.slug);
  return {
    props: { post },
    revalidate: 10,
  };
};

// hello-world - on first request = Ghost CMS call is made (1)
// hello-world - on other requests ... = filesystem is called (1M)

export const getStaticPaths = () => {
  // paths -> slugs which are allowed
  // fallback ->
  return {
    paths: [],
    fallback: true,
  };
};

type Post = {
  title: string;
  html: string;
  slug: string;
  excerpt: string;
};

const Post: React.FC<{ post: Post }> = (props) => {
  const { post } = props;

  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <Head>
        <title>Vaultinum — {post.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="robots" content="noindex" />
        <meta name="Description" content={post.excerpt} />
      </Head>
      <main className="blog-article">
        <Container>
          <p>
            <Link href="/blog">
              <a>Go back</a>
            </Link>
          </p>
          <h1>{post.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
        </Container>
      </main>
    </>
  );
};

export default Post;
