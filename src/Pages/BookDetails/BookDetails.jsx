import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const {id}=useParams()
      const bookConvertId = Number(id);
      const data=useLoaderData();

    const singleBook=data.find( book=>book.bookId === bookConvertId)
       const{bookName,author,bookId,image,rating,tags}=singleBook;
    
    return (
      <div className="card bg-base-100  border
                border-gray-300  shadow-xl p-5
                 flex flex-col justify-center items-center ">
  <figure  className='bg-[#F3F3F3] w-full p-5 rounded' >
    <img className='w-40 h-40 object-contain'
      src={image}
      alt="Book Image" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-[#131313] font-bold text-2xl">
    {bookName}
      
    </h2>
    <p className='font-medium text-base text-[#131313] '>{author}</p>
    <hr className='border-dashed' />
    <div className="card-actions flex justify-between items-center ">
     <div className='flex justify-between items-center  gap-2'>
        <button className='btn btn-outline'>
            Read
        </button>
        <button className='btn btn-secondary'>
           Wishlist
        </button>
     </div>
    </div>
  </div>
     </div>
    );
};

export default BookDetails;