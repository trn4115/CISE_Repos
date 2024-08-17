import { FormEvent, useState, useEffect } from "react";
import formStyles from "@/styles/Form.module.scss";
import { createArticle, fetchArticles } from "@/services/articleService"; // Add fetchArticles import

const NewDiscussion = () => {
  const [title, setTitle] = useState("");
  const [authors, setAuthors] = useState<string[]>([]);
  const [source, setSource] = useState("");
  const [pubYear, setPubYear] = useState<number>(0);
  const [doi, setDoi] = useState("");
  const [claim, setClaim] = useState("");
  const [evidenceLevel, setEvidenceLevel] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [nextId, setNextId] = useState<number>(1); // Track the next available ID

  useEffect(() => {
    const fetchNextId = async () => {
      try {
        const articles = await fetchArticles(); // Fetch all articles
        if (articles.length > 0) {
          const maxId = Math.max(
            ...articles.map((article: any) => article._id)
          );
          setNextId(maxId + 1); // Set next ID to maxId + 1
        }
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchNextId(); // Fetch the next ID on component mount
  }, []);

  const submitNewArticle = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const articleData = {
      _id: nextId, // Use the next available ID
      title,
      authors: authors.join(", "),
      source,
      pubYear,
      doi,
      claim,
      evidenceLevel,
    };

    try {
      await createArticle(articleData);
      setMessage("Article submitted successfully!");
      setNextId(nextId + 1); // Increment the next ID for subsequent submissions
      setTitle("");
      setAuthors([]);
      setSource("");
      setPubYear(0);
      setDoi("");
      setClaim("");
      setEvidenceLevel("");
    } catch (error) {
      setMessage("Error submitting article. Please try again.");
    }
  };

  const addAuthor = () => {
    setAuthors(authors.concat([""]));
  };

  const removeAuthor = (index: number) => {
    setAuthors(authors.filter((_, i) => i !== index));
  };

  const changeAuthor = (index: number, value: string) => {
    setAuthors(
      authors.map((oldValue, i) => {
        return index === i ? value : oldValue;
      })
    );
  };

  return (
    <div className="container">
      <h1>New Article</h1>
      {message && <p>{message}</p>}
      <form className={formStyles.form} onSubmit={submitNewArticle}>
        <label htmlFor="title">Title:</label>
        <input
          className={formStyles.formItem}
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <label htmlFor="author">Authors:</label>
        {authors.map((author, index) => (
          <div key={`author ${index}`} className={formStyles.arrayItem}>
            <input
              type="text"
              name="author"
              value={author}
              onChange={(event) => changeAuthor(index, event.target.value)}
              className={formStyles.formItem}
            />
            <button
              onClick={() => removeAuthor(index)}
              className={formStyles.buttonItem}
              style={{ marginLeft: "3rem" }}
              type="button"
            >
              -
            </button>
          </div>
        ))}
        <button
          onClick={addAuthor}
          className={formStyles.buttonItem}
          style={{ marginLeft: "auto" }}
          type="button"
        >
          +
        </button>

        <label htmlFor="source">Source:</label>
        <input
          className={formStyles.formItem}
          type="text"
          name="source"
          id="source"
          value={source}
          onChange={(event) => setSource(event.target.value)}
        />

        <label htmlFor="pubYear">Publication Year:</label>
        <input
          className={formStyles.formItem}
          type="number"
          name="pubYear"
          id="pubYear"
          value={pubYear}
          onChange={(event) => setPubYear(parseInt(event.target.value))}
        />

        <label htmlFor="doi">DOI:</label>
        <input
          className={formStyles.formItem}
          type="text"
          name="doi"
          id="doi"
          value={doi}
          onChange={(event) => setDoi(event.target.value)}
        />

        <label htmlFor="claim">Claim:</label>
        <input
          className={formStyles.formItem}
          type="text"
          name="claim"
          id="claim"
          value={claim}
          onChange={(event) => setClaim(event.target.value)}
        />

        <label htmlFor="evidenceLevel">Evidence Level:</label>
        <input
          className={formStyles.formItem}
          type="text"
          name="evidenceLevel"
          id="evidenceLevel"
          value={evidenceLevel}
          onChange={(event) => setEvidenceLevel(event.target.value)}
        />

        <button className={formStyles.formItem} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewDiscussion;
