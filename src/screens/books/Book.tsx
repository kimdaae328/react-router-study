import React from 'react'
import { useParams, Link, Outlet } from 'react-router-dom'
import { books } from '../../db'

export default function Book() {
  const { authorId, bookId } = useParams();

  const author = books.find((author) => author.address === authorId);
  const book = author ? author.bookList.find((book) => book.address === bookId) : null;

  if (!author) {
    return <div>Author not found</div>;
  }

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div>
      <h2>{book.title}</h2>
          
      <div>
        <Link to={`chapters`}>Chapters</Link>
        <br/>
        <Link to={`characters`}>Characters</Link>
      </div>

      <Outlet context={{ bookTitle: book.title, authorTitle: author.author }} />
    </div>
  )
}
