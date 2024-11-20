// src/api.js
export const fetchNews = async (category = '', query = '', page = 1) => {
  try {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=za&category=${category}&q=${query}&page=${page}&pageSize=10&apiKey=cfd91ed7953a40549e5fb1450b17ddcb`);
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const data = await response.json();
    return data.articles;
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
};
