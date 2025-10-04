import React from 'react';
import Book from '../../Components/Book/Book';

const Books = (data) => {
   const booksDetails=data.data;
    
    return (
        <div>
            <h1 className='text-center font-bold text-4xl py-2'>Books</h1>
           <div className='grid grid-cols-1  my-5
                     md:grid-cols-2 lg:grid-cols-3 p-5 gap-10'>
            {
                booksDetails.map((singleBook)=><Book key={singleBook.bookId} singleBook={singleBook} ></Book>)
            }
           </div>
        </div>
    );
};

export default Books;