import React from 'react'
import { useOutletContext } from "react-router-dom";
import { books } from "../../db";

export interface BookContext {
    bookTitle: string;
    authorTitle: string;
}

export default function Chapters() {
  const { bookTitle, authorTitle } = useOutletContext<BookContext>();

  const selectedAuthor = books.find((author) => author.author === authorTitle);
  const selectedBook = selectedAuthor?.bookList.find((book) => book.title === bookTitle);

  const chapters = selectedBook?.chapters || [];

  return (
    <div>
        <h3>Chapters</h3>
        <ul>
            {chapters.map((chapter) => (
                <li key={chapter.id}>{chapter.title}</li>
            ))}
        </ul>
    </div>
  )
}
