// pages/articles/index.tsx

import { GetServerSideProps, GetStaticProps, NextPage } from "next";
import SortableTable from "@/components/table/SortableTable";
import { fetchArticles } from "@/services/articleService";

interface ArticlesInterface {
  _id: number;
  title: string;
  authors: string;
  source: string;
  pubYear: number;
  doi: string;
  claim: string;
  evidenceLevel: string;
}

type ArticlesProps = {
  articles: ArticlesInterface[];
};

const Articles: NextPage<ArticlesProps> = ({ articles }) => {
  const headers: { key: keyof ArticlesInterface; label: string }[] = [
    { key: "title", label: "Title" },
    { key: "authors", label: "Authors" },
    { key: "source", label: "Source" },
    { key: "pubYear", label: "Publication Year" },
    { key: "doi", label: "DOI" },
    { key: "claim", label: "Claim" },
    { key: "evidenceLevel", label: "Evidence" },
  ];

  return (
    <div className="container">
      <h1>Articles Index Page</h1>
      <p>Page containing a table of articles:</p>
      <SortableTable headers={headers} data={articles} />
    </div>
  );
};

// Use getStaticProps to fetch data at build time (or getServerSideProps for server-side rendering)
export const getServerSideProps: GetServerSideProps<ArticlesProps> = async (
  _
) => {
  try {
    const articles = await fetchArticles();
    return {
      props: {
        articles,
      },
    };
  } catch (error) {
    console.error("Failed to fetch articles:", error);
    return {
      props: {
        articles: [],
      },
    };
  }
};

export default Articles;
