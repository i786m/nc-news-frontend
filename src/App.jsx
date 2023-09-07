import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Article from "./components/Article";
import ArticleList from "./components/ArticleList";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  const [topic, setTopic] = useState("");

  return (
    <>
      <Header />
      <Navbar setTopic={setTopic} />

      <Routes>
        <Route path="/" element={<ArticleList />} />
        <Route path="/articles/:article_id" element={<Article />} />
      </Routes>
    </>
  );
}

export default App;
