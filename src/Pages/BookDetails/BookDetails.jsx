import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../Utility/addtoDB';
import { BookCheck, Heart } from 'lucide-react';

const BookDetails = () => {
    const {id}=useParams()
      const bookConvertId = Number(id);
      const data=useLoaderData();

    const singleBook=data.find( book=>book.bookId === bookConvertId)
       const{bookName,author,category,publisher,totalPages,
        bookId,review,yearOfPublishing,
        image,price,tags,rating}=singleBook;
    
const handleMarkAsRead=(id)=>{
  
  addToStoredDB("readList",id)

 
};
const handleAsWishList=id=>{
  addToStoredDB("wishList",id)
}



    return (
  //     <div className="card bg-base-100  border
  //               border-gray-300  shadow-xl p-5
  //                flex flex-col justify-center items-center ">
  // <figure  className='bg-[#F3F3F3] w-full p-5 rounded' >
  //   <img className='w-40 h-40 object-contain'
  //     src={image}
  //     alt="Book Image" />
  // </figure>
  // <div className="card-body">
  //   <h2 className="card-title text-[#131313] font-bold text-2xl">
  //   {bookName}
      
  //   </h2>
  //   <p className='font-medium text-base text-[#131313] '>{author}</p>
  //   <hr className='border-dashed' />
  //     <p className='font-semibold text-xl text-gray-600'>Price : $ <span>{price}</span> </p>
  //   <div className="card-actions flex justify-between items-center ">
  //    <div className='flex justify-between items-center  gap-2'>

  //       <button onClick={()=>handleMarkAsRead (bookId)}
  //        className='btn btn-outline'>
  //           Read <BookCheck />
  //       </button>
  //       <button onClick={()=>handleAsWishList(bookId)}
  //        className='btn btn-secondary'>
  //          Wishlist <Heart />
  //       </button>
  //    </div>
  //   </div>
  // </div>
  //    </div>
  <div className="hero  ">
  <div className="hero-content flex  items-center flex-col lg:flex-row">
    <div className='bg-base-200 rounded-2xl shadow-2xs  max-w-[573px] flex justify-center items-center h-[711px] '>
 <img 
      src={image}
      className="rounded-lg bg-base-200 px-5  w-[425px] h-[564px] object-contain  "
    />
    </div>
   
    <div  className="max-w-1/2 ">
      <h1 className="text-5xl font-bold">{bookName}</h1>
      <p>By : {author}</p>
      <p className='border-t border-b border-gray-200'> {category}</p>
      <p className="py-6">
       <span className='font-bold text-black'>Review:</span>
       {review}
      </p>
      <div className='border-b border-gray-100'>
        <h1>Tag</h1>
        <p> <span>#</span>{tags[0]}</p>
        <p> <span>#</span>{tags[1]}</p>
      </div>
      <div>
        <div className="overflow-x-auto">
  <table className="">
    {/* head */}
   
    <tbody>
      {/* row 1 */}
      <tr>
      
        <td>Numbers of Pages:</td>
        <td>{totalPages}</td>
     
      </tr>
      {/* row 2 */}
      <tr className="hover:bg-base-300">
      
        <td>Publisher </td>
        <td>{publisher}</td>
     
      </tr>
      {/* row 3 */}
      <tr>
  
        <td>Year of Publishing</td>
        <td>{yearOfPublishing}</td>
       
      </tr>
      {/* row 4*/}
      <tr>
  
        <td>Rating </td>
        <td>{rating}</td>
       
      </tr>
    </tbody>
  </table>
</div>
      </div>
        <div className='flex justify-between items-center  gap-2'>

       <button onClick={()=>handleMarkAsRead (bookId)}
         className='btn btn-outline'>
            Read <BookCheck />
        </button>
        <button onClick={()=>handleAsWishList(bookId)}
         className='btn btn-secondary'>
           Wishlist <Heart />
        </button>
     </div>
    </div>
  </div>
</div>
     
    );
};

export default BookDetails;





  // {
  //   "bookId": 9,
  //   "bookName": "The Girl on the Train",
  //   "author": "Paula Hawkins",
  //   "image": "https://i.ibb.co.com/P6hfCmJ/Whats-App-Image-2024-05-22-at-11-21-25-2e21ae46.jpg",
  //   "review": "'The Great Gatsby' by F. Scott Fitzgerald is a timeless masterpiece that delves into the decadence and disillusionment of the Jazz Age...",
  //   "totalPages": 316,
  //   "rating": 4.2,
  //   "category": "Mystery",
  //   "tags": ["Suspense", "Psychological"],
  //   "publisher": "Riverhead Books",
  //   "yearOfPublishing": 2015,
  //   "price": 15.99
  // }


















