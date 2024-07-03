import React from 'react'
import { useOutletContext } from "react-router-dom";
import { books } from "../../db";

export interface BookContext {
    bookTitle: string;
    authorTitle: string;
}

export default function Characters() {
    const { bookTitle, authorTitle } = useOutletContext<BookContext>();

    const selectedAuthor = books.find((author) => author.author === authorTitle);
    const selectedBook = selectedAuthor?.bookList.find((book) => book.title === bookTitle);

    const characters = selectedBook?.characters || [];

  return (
    <div>
        <h3>Characters</h3>
        <ul>
            {characters.map((character) => (
                <li key={character.id}>{character.title}</li>
            ))}
        </ul>
    </div>
  )
}
