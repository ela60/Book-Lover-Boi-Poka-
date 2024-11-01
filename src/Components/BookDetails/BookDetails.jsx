import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);

  const data = useLoaderData();

  const book = data.find((book) => book.bookId === id);

    const { bookId: currentBookId, image } = book;
    
    const handleMarkAsRead = () => {
        
    }

  return (
    <div className="my-12">
      <h2>Book details:{bookId}</h2>
      <img className="w-36" src={image} alt="" />
      <br />
      <button onClick={handleMarkAsRead} className="btn mr-5">Mark as Read</button>
      <button className="btn btn-secondary">WhishList</button>
    </div>
  );
};

export default BookDetails;
