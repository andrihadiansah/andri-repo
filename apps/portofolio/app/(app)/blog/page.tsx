import { BlogPosts } from "@/components/blog-posts";
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@workspace/ui/components/page-header";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@workspace/ui/components/pagination";
import { getBlogPosts } from "./utils";

export default function Page({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const currentPage = Number(searchParams.page) || 1;
  const postsPerPage = 4;
  const allPosts = getBlogPosts();
  const totalPages = Math.ceil(allPosts.length / postsPerPage);

  // Function to generate pagination items
  const generatePaginationItems = () => {
    const items = [];
    const maxVisiblePages = 5; // Adjust this number to show more or fewer page numbers

    if (totalPages <= maxVisiblePages) {
      // If total pages are less than or equal to maxVisiblePages, show all pages
      for (let i = 1; i <= totalPages; i++) {
        items.push(
          <PaginationItem key={i}>
            <PaginationLink
              href={`/blog?page=${i}`}
              isActive={currentPage === i}
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }
    } else {
      // Always show first page
      items.push(
        <PaginationItem key={1}>
          <PaginationLink href="/blog?page=1" isActive={currentPage === 1}>
            1
          </PaginationLink>
        </PaginationItem>
      );

      // Add ellipsis if current page is far from the start
      if (currentPage > 3) {
        items.push(<PaginationEllipsis key="ellipsis-start" />);
      }

      // Show current page and surrounding pages
      for (
        let i = Math.max(2, currentPage - 1);
        i <= Math.min(totalPages - 1, currentPage + 1);
        i++
      ) {
        items.push(
          <PaginationItem key={i}>
            <PaginationLink
              href={`/blog?page=${i}`}
              isActive={currentPage === i}
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }

      // Add ellipsis if current page is far from the end
      if (currentPage < totalPages - 2) {
        items.push(<PaginationEllipsis key="ellipsis-end" />);
      }

      // Always show last page
      items.push(
        <PaginationItem key={totalPages}>
          <PaginationLink
            href={`/blog?page=${totalPages}`}
            isActive={currentPage === totalPages}
          >
            {totalPages}
          </PaginationLink>
        </PaginationItem>
      );
    }

    return items;
  };

  return (
    <>
      <PageHeader>
        <PageHeaderHeading>Blog</PageHeaderHeading>
        <PageHeaderDescription>
          Essay, writing, learning and other miscellaneous goodies.
        </PageHeaderDescription>
        <PageActions>Search...</PageActions>
      </PageHeader>
      <article className="container-wrapper py-8 px-16 max-md:px-8">
        <BlogPosts maxPosts={postsPerPage} currentPage={currentPage} />
      </article>
      <Pagination className="container-wrapper border-t py-4">
        <PaginationContent>
          {currentPage > 1 && (
            <PaginationItem>
              <PaginationPrevious href={`/blog?page=${currentPage - 1}`} />
            </PaginationItem>
          )}
          {generatePaginationItems()}
          {currentPage < totalPages && (
            <PaginationItem>
              <PaginationNext href={`/blog?page=${currentPage + 1}`} />
            </PaginationItem>
          )}
        </PaginationContent>
      </Pagination>
    </>
  );
}
