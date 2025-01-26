import Link from "next/link";
import { cn } from "@workspace/ui/lib/utils";
import { formatDate, getAllBlogPosts } from "@/app/(app)/thoughts/utils";

interface BlogPost {
  slug: string;
  metadata: {
    publishedAt: string;
    title: string;
  };
}

function BlogPostItem({
  post,
  className,
}: {
  post: BlogPost;
  className?: string;
}) {
  return (
    <Link
      href={`/thoughts/${post.slug}`}
      className={cn("flex flex-col", className)}
    >
      <article className="flex flex-col space-y-1">
        <span className="text-sm">{formatDate(post.metadata.publishedAt)}</span>
        <h1 className="text-xl max-md:text-lg font-semibold">
          {post.metadata.title}
        </h1>
      </article>
    </Link>
  );
}

// Wrapper Komponen dengan Suspense untuk tiap item
async function BlogPostList({
  maxPosts,
  className,
}: {
  maxPosts?: number;
  className?: string;
}) {
  const blogPosts = await getAllBlogPosts();

  if (!Array.isArray(blogPosts) || blogPosts.length === 0) {
    return <p>No blog posts available.</p>;
  }

  // Urutkan berdasarkan tanggal terbaru
  const sortedPosts = blogPosts.sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
  );

  // Batasi jumlah posting berdasarkan maxPosts
  const displayedPosts = maxPosts
    ? sortedPosts.slice(0, maxPosts)
    : sortedPosts;

  return (
    <div className={cn("flex flex-col gap-2 ", className)}>
      {displayedPosts.map((post) => (
        <BlogPostItem
          key={post.slug}
          post={post}
          className="border-b last:border-0 pb-2"
        />
      ))}
    </div>
  );
}

export { BlogPostList, BlogPostItem };
