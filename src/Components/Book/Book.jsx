import React from 'react';
import { Link } from 'react-router';

const Book = ({singleBook}) => {
    // console.log(singleBook);
    const{bookName,author,bookId,image,rating,tags,price}=singleBook;
    return (
      <Link to={`/bookDetails/${bookId}`}>
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
     <p className='font-semibold text-xl text-gray-600'>Price : $ <span>{price}</span> </p>
    <div className="card-actions flex justify-between items-center ">
      <div className="badge badge-outline cursor-pointer ">{tags[0]}</div>
      <div className="badge "> <p>{rating} <span>⭐</span> </p> </div>
    </div>
  </div>
     </div>
      </Link>
     
    );
};

export default Book;