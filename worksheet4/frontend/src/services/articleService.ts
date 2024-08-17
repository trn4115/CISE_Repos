import axios from "axios";

const API_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000/api/articles";

// Fetch all articles
export const fetchArticles = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw error;
  }
};

// Fetch an article by ID
export const fetchArticleById = async (id: string) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching article with ID ${id}:`, error);
    throw error;
  }
};

// Create a new article
export const createArticle = async (articleData: any) => {
  try {
    const response = await axios.post(API_URL, articleData);
    return response.data;
  } catch (error) {
    console.error("Error creating article:", error);
    throw error;
  }
};

// Update an existing article
export const updateArticle = async (id: string, articleData: any) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, articleData);
    return response.data;
  } catch (error) {
    console.error(`Error updating article with ID ${id}:`, error);
    throw error;
  }
};

// Delete an article
export const deleteArticle = async (id: string) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting article with ID ${id}:`, error);
    throw error;
  }
};
