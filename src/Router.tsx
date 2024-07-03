import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./screens/Home";
import About from "./screens/About";
import Author from "./screens/books/Author";
import ErrorComponent from "./components/ErrorComponent";
import NotFound from "./screens/NotFound";
import Book from "./screens/books/Book";
import Chapters from "./screens/books/Chapters";
import Characters from "./screens/books/Characters";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "",
                element: <Home/>,
                errorElement: <ErrorComponent />,
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "author/:authorId",
                element: <Author />,
                children: [
                    {
                        path: ":bookId",
                        element: <Book />,
                        children: [
                            {
                                path: "chapters",
                                element: <Chapters />,
                            },
                            {
                                path: "characters",
                                element: <Characters />
                            },
                        ]
                    },
                ]
            }
        ],
        errorElement: <NotFound />,
    }
])

export default router;