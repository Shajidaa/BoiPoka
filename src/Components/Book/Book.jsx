import React from 'react';

const Book = ({singleBook}) => {
    console.log(singleBook);
    const{bookName,author,image,rating,tags}=singleBook;
    return (
     <div className="card bg-base-100  border
                border-gray-100  shadow-xl p-2
                 flex flex-col justify-center items-center ">
  <figure  className='w-40 h-40 ' >
    <img className='object-contain'
      src={image}
      alt="Book Image" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
    {bookName}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{author}</p>
    <div className="card-actions ">
      <div className="badge badge-outline">{tags[0]}</div>
      <div className="badge badge-outline">{rating}</div>
    </div>
  </div>
</div>
    );
};

export default Book;