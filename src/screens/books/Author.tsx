import { useParams, Outlet, Link } from "react-router-dom";
import { books } from '../../db'

export default function Author() {
    const { authorId } = useParams();
    const authorBooks = books.find((book) => book.address === authorId);

    if (!authorBooks) {
        return <div>Author not found</div>;
    }
    
  return (
    <div>
        <h1>{authorBooks.author}</h1>
        <ul>
            {authorBooks.bookList.map((book) => (
                <li key={book.id}>
                    <Link to={`/author/${authorId}/${book.address}`}>{book.title}</Link>
                </li>
            ))}
        </ul>
      <Outlet />
    </div>
  )
}
