import { notFound } from "next/navigation";
import { formatDate, getBlogPosts } from "@/app/(app)/blog/utils";
import { siteConfig } from "@/config/site";
import {
  PageActions,
  PageHeader,
  PageHeaderHeading,
  PageHeaderDescription,
} from "@workspace/ui/components/page-header";
import Link from "next/link";
import { buttonVariants } from "@workspace/ui/components/button";
import { ChevronLeft, UserPen } from "lucide-react";
import { CustomMDX } from "@/components/mdx-components";
import { cn } from "@workspace/ui/lib/utils";

export const dynamicParams = false;
export async function generateStaticParams() {
<<<<<<< HEAD
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: any }) {
  const { slug } = await params;
  const post = getBlogPosts().find((post) => post.slug === slug);

=======
  let posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  let post = getBlogPosts().find(
    async (post) => post.slug === (await params).slug
  );
>>>>>>> 7acec3681b60a771a7fb0d704bf4074d72ab3c85
  if (!post) {
    notFound();
  }
  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image
    ? image
    : `${siteConfig}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
<<<<<<< HEAD
      publishedTime: formatDate(publishedTime, true),
      url: `${siteConfig.url}/blog/${post.slug}`,
      images: [{ url: ogImage }],
=======
      publishedTime,
      url: `${siteConfig}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
>>>>>>> 7acec3681b60a771a7fb0d704bf4074d72ab3c85
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

<<<<<<< HEAD
export default async function MDXPage({ params }: { params: any }) {
  const { slug } = await params;
  const post = getBlogPosts().find((post) => post.slug === slug);
=======
export default async function MDXPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  let post = getBlogPosts().find(
    async (post) => post.slug === (await params).slug
  );
>>>>>>> 7acec3681b60a771a7fb0d704bf4074d72ab3c85

  if (!post) {
    notFound();
  }

  return (
    <>
      <section>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              type: "BlogPosting",
              headline: post.metadata.title,
              datePublished: post.metadata.publishedAt,
              dateModified: post.metadata.publishedAt,
              description: post.metadata.summary,
              image: post.metadata.image
                ? `${siteConfig.url}${post.metadata.image}`
                : `/og?title=${encodeURIComponent(post.metadata.title)}`,
              url: `${siteConfig.url}/blog/${post.slug}`,
              author: {
                type: "Person",
                name: siteConfig.name,
              },
            }),
          }}
        />

        <PageHeader>
          <PageHeaderHeading>{post.metadata.title}</PageHeaderHeading>
          <PageHeaderDescription>{post.metadata.summary}</PageHeaderDescription>
          <PageActions className="flex gap-2">
            {formatDate(post.metadata.publishedAt, true)}
            <Link href={"/about"}>about</Link>
          </PageActions>
        </PageHeader>
        <article className="  container-wrapper p-4 px-16 max-md:px-8 ">
          <CustomMDX source={post.content} />
        </article>
        <div className="container-wrapper p-4 max-md:px-4 px-8">
<<<<<<< HEAD
          <Link href={"/blog"}>
            <Button variant={"outline"} withIcon={<ChevronLeft />}>
              All Posts
            </Button>
=======
          <Link
            href={"/blog"}
            className={cn(buttonVariants({ variant: "secondary" }))}
          >
            <ChevronLeft />
            All Posts
>>>>>>> 7acec3681b60a771a7fb0d704bf4074d72ab3c85
          </Link>
        </div>
      </section>
    </>
  );
}
