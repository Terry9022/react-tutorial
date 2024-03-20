import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  const title = "Dog Man: The Scarlet Shedder";
  const author = "Dav Pilkey";
  return (
    <article className="book">
      <img src="./images/book-1.jpg" alt="Dog Man: The Scarlet Shedder" />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
