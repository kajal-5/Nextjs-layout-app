// ✅ Fake database
const posts = {
  1: { title: "Post 1", content: "This is the content of Post 1" },
  2: { title: "Post 2", content: "This is the content of Post 2" },
  3: { title: "Post 3", content: "This is the content of Post 3" },
};

// ✅ ✅ NEXT 16: params MUST be awaited
export async function generateMetadata({ params }) {
  const { id } = await params;   // ✅ FIX
  const post = posts[id];

  return {
    title: post ? `${post.title} - My Blog` : "Post Not Found - My Blog",
    description: post ? post.content : "This post does not exist",
  };
}

// ✅ ✅ NEXT 16: Page must also await params
export default async function PostPage({ params }) {
  const { id } = await params;   // ✅ FIX
  const post = posts[id];

  if (!post) {
    return (
      <main style={{ padding: 40 }}>
        <h1>Post Not Found</h1>
      </main>
    );
  }

  return (
    <main style={{ padding: 40 }}>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </main>
  );
}
