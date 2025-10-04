import React from 'react';

const Banner = () => {
    return (
        <div className="my-4 card lg:card-side  bg-base-300 rounded shadow-sm">
             <div className="card-body flex flex-col justify-center items-center ">
    <h2 className="card-title text-5xl text-[#131313]">Books to freshen up your bookshelf</h2>

    <div className=" justify-start ">
      <button className="btn  bg-green-500 font-bold text-white">View the list</button>
    </div>
  </div>
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
      alt="Album" />
  </figure>
 
</div>
    );
};

export default Banner;