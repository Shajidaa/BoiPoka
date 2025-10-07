import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoreBook } from '../Utility/addtoDB';

const useBookList = () => {
        const [read,setRead]=useState([]);
    // const [read,setRead]=useState(()=>getStoreBook('readList'));
    const [wishlist,setWishList]=useState([]);
    const [sort,setSort]=useState('');
    // console.log(read);
    const [toggle,setToggle]=useState(true);

    const data=useLoaderData()
    // console.log(data);

 

useEffect(()=>{
  const storedReadBook=getStoreBook('readList')|| [];
  const storedWishListBook=getStoreBook('wishList')|| [];

  const myReadList=data.filter(book=>storedReadBook.includes(book.bookId))

  const myWishList=data.filter(book=>storedWishListBook.includes(book.bookId))

  setRead(myReadList)

  setWishList(myWishList)
},[toggle,data])


return {read,wishlist,setRead,sort,setSort,setToggle,data}

};

export default useBookList;