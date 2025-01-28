import type React from "react";
import { JSX } from "react";
import Link from "next/link";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";

type ChildrenProps = {
  children: React.ReactNode;
};

type LinkProps = ChildrenProps & {
  href: string;
};

type ImageProps = {
  src: string;
  alt: string;
};

const Heading = ({
  level,
  className,
  children,
}: {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  className: string;
  children: React.ReactNode;
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return <Tag className={`scroll-m-20 ${className}`}>{children}</Tag>;
};

const components = {
  h1: (props: ChildrenProps) => (
    <Heading
      level={1}
      className="text-4xl font-bold tracking-tight"
      {...props}
    />
  ),
  h2: (props: ChildrenProps) => (
    <Heading
      level={2}
      className="border-b pb-2 text-3xl font-semibold tracking-tight mt-6"
      {...props}
    />
  ),
  h3: (props: ChildrenProps) => (
    <Heading
      level={3}
      className="text-2xl font-semibold tracking-tight mt-6"
      {...props}
    />
  ),
  h4: (props: ChildrenProps) => (
    <Heading
      level={4}
      className="text-xl font-semibold tracking-tight"
      {...props}
    />
  ),
  h5: (props: ChildrenProps) => (
    <Heading
      level={5}
      className="text-lg font-semibold tracking-tight"
      {...props}
    />
  ),
  h6: (props: ChildrenProps) => (
    <Heading
      level={6}
      className="text-base font-semibold tracking-tight"
      {...props}
    />
  ),
  a: ({ href, children }: LinkProps) => (
    <Link
      href={href}
      className="font-medium text-primary underline underline-offset-4"
    >
      {children}
    </Link>
  ),
  p: ({ children }: ChildrenProps) => (
    <p className="leading-7 mt-2">{children}</p>
  ),
  ul: ({ children }: ChildrenProps) => (
    <ul className="my-6 ml-6 list-disc [&>li]:mt-2">{children}</ul>
  ),
  ol: ({ children }: ChildrenProps) => (
    <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">{children}</ol>
  ),
  li: ({ children }: ChildrenProps) => <li>{children}</li>,
  blockquote: ({ children }: ChildrenProps) => (
    <blockquote className="mt-6 border-l-2 pl-6 italic">{children}</blockquote>
  ),
  img: ({ src, alt }: ImageProps) => (
    <Image
      src={src || "/placeholder.svg"}
      alt={alt}
      width={720}
      height={480}
      className="rounded-md border"
    />
  ),
  hr: () => <hr className="my-4 md:my-8" />,
  table: ({ children }: ChildrenProps) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className="w-full">{children}</table>
    </div>
  ),
  tr: ({ children }: ChildrenProps) => (
    <tr className="m-0 border-t p-0 even:bg-muted">{children}</tr>
  ),
  th: ({ children }: ChildrenProps) => (
    <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
      {children}
    </th>
  ),
  td: ({ children }: ChildrenProps) => (
    <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
      {children}
    </td>
  ),
  pre: ({ children }: ChildrenProps) => (
    <pre className="mb-4 mt-6 overflow-x-auto rounded-lg bg-black py-4">
      {children}
    </pre>
  ),
  code: ({ children }: ChildrenProps) => (
    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
      {children}
    </code>
  ),
  Details: ({
    children,
    ...props
  }: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDetailsElement>,
    HTMLDetailsElement
  >) => (
    <details className="my-2" {...props}>
      {children}
    </details>
  ),
  Summary: ({
    children,
    ...props
  }: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  >) => (
    <summary className="my-2 cursor-pointer text-lg font-semibold" {...props}>
      {children}
    </summary>
  ),
};

export function CustomMDX(props: any) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
