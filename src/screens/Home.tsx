import React from 'react'
import { books } from "../db"
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <h1>Best Seller Authors</h1>
        <ul>
            {books.map((book) => (
                <li key={book.id}>
                    <Link to={`author/${book.address}`}>{book.author}</Link>
                </li>
            ))}
        </ul>
    </div>
  )
}
