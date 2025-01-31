import Link from "next/link";
import { formatDate, getBlogPosts } from "@/app/(app)/blog/utils";

interface BlogPostsProps {
  maxPosts?: number;
  currentPage?: number;
}

export function BlogPosts({ maxPosts, currentPage = 1 }: BlogPostsProps) {
  const allBlogs = getBlogPosts();

  const sortedBlogs = allBlogs.sort((a, b) => {
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
      return -1;
    }
    return 1;
  });

  const startIndex = (currentPage - 1) * (maxPosts || sortedBlogs.length);
  const endIndex = startIndex + (maxPosts || sortedBlogs.length);
  const paginatedBlogs = sortedBlogs.slice(startIndex, endIndex);

  return (
    <div>
      {paginatedBlogs.map((post) => (
        <Link
          key={post.slug}
          className="flex flex-col space-y-1 mb-3 last:mb-0"
          href={`/blog/${post.slug}`}
        >
          <div className="w-full flex flex-row space-x-2 rounded-lg  border p-1">
            <p className="text-muted-foreground min-w-[80px] max-w-[80px] text-xs tabular-nums">
              {formatDate(post.metadata.publishedAt, false)}
            </p>
            <p className="text-wrap">{post.metadata.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}