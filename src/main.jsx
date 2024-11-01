import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import ErrorPage from './ErrorPage/ErrorPage';
import Home from './Home/Home';
import Dhashboard from './Components/Dhashboard/Dhashboard';
import BookDetails from './Components/BookDetails/BookDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element:<Home/>
      },
      {
        path: 'books/:bookId',
        element: <BookDetails />,
        loader:()=> fetch('/booksData.json')
      },
      {
        path: 'dashboard',
        element:<Dhashboard/>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
