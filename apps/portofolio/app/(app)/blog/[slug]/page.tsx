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
import { Button } from "@workspace/ui/components/button";
import { ChevronLeft, UserPen } from "lucide-react";
import { CustomMDX } from "@/components/mdx-components";

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: any }) {
  const { slug } = await params;
  const post = getBlogPosts().find((post) => post.slug === slug);

  if (!post) {
    return null;
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  const ogImage = image
    ? `${siteConfig.url}${image}`
    : `${siteConfig.url}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: formatDate(publishedTime, true),
      url: `${siteConfig.url}/blog/${post.slug}`,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function MDXPage({ params }: { params: any }) {
  const { slug } = await params;
  const post = getBlogPosts().find((post) => post.slug === slug);

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
              url: `${siteConfig.url}/thoughts/${post.slug}`,
              author: {
                type: "Person",
                name: siteConfig.name,
              },
            }),
          }}
        />

        <PageHeader className="">
          <PageHeaderHeading className="">
            {post.metadata.title}
          </PageHeaderHeading>
          <PageHeaderDescription>{post.metadata.summary}</PageHeaderDescription>
          <PageActions className="flex gap-2">
            {formatDate(post.metadata.publishedAt, true)}
            <Link href={"/about"}>
              <Button variant={"outline"} withIcon={<UserPen />} size={"sm"}>
                Author
              </Button>
            </Link>
          </PageActions>
        </PageHeader>
        <article className="  container-wrapper p-4 px-16 max-md:px-8 ">
          <CustomMDX source={post.content} />
        </article>
        <div className="container-wrapper p-4 max-md:px-4 px-8">
          <Link href={"/blog"}>
            <Button variant={"outline"} withIcon={<ChevronLeft />}>
              All Posts
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
