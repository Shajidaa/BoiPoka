import React, { useEffect, useState} from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { deleteStoreBook, getStoreBook } from '../../Utility/addtoDB';
import { ShoppingBasket, Trash } from 'lucide-react';

const ReadList = () => {
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
    // useEffect(()=>{
    //     const storedBookData=getStoreBook();
    //     // console.log(storedBookData);
        
    //     const convertedStoredBookData=storedBookData.map(id=>parseInt(id))
    //     // console.log(convertedStoredBookData);
        
    //     const myReadList=data.filter(book=>convertedStoredBookData.includes(book.bookId));
    //      setRead(myReadList);
    //     //  console.log(myReadList)
    // },[data])
//sort 

const handleAsDelete=(key,id)=>{
deleteStoreBook(key,id)
setToggle(!toggle);

}
      const handleSort=(type)=>{
        setSort(type)
        if (type === "pages") {
          const sortedByPage=
          [...read].sort((a,b)=>a.totalPages-b.totalPages)
          setRead(sortedByPage)
        }    if (type === "ratings") {
          const sortedByPage=
          [...read].sort((a,b)=>a.rating-b.rating)
          setRead(sortedByPage)
        }
      }
    
    return (
        <Tabs>
         <div className="dropdown dropdown-hover flex flex-col justify-center items-center">
           <div tabIndex={0} role="button" className="btn m-1">Sort by</div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
              <li><a onClick={()=>handleSort("pages")}>Pages</a></li>
              <li><a onClick={()=>handleSort("ratings")}>Ratings</a></li>
            </ul>
         </div>
    <TabList>
      <Tab>Read List </Tab>
      <Tab>Wise List</Tab>
    </TabList>

    <TabPanel>
      <h2>Book i read {read.length}</h2>
    {read.length===0?<p className='font-bold px-3 py-2 text-center'>There is no book read</p>: 
    <ul className="list  mb-3 rounded-box ">
      {
    read.map(singleBook=>(  <li className="list-row mb-3 shadow">
    <div><img className="size-10 rounded-box" src={singleBook.image}/>
    </div>
    <div>
      <div>{singleBook.bookName}</div>
      <div className="text-xs uppercase font-semibold opacity-60">Remaining Reason</div>

  <p>pages:{singleBook.totalPages}</p>
   
    <p>{singleBook.rating}</p>
    </div>
    <button className="btn btn-square btn-ghost">
        <ShoppingBasket />
    </button>
    <button onClick={()=>handleAsDelete("readList",singleBook.bookId)}
     className="btn btn-square btn-ghost">
     <Trash />
    </button>
  </li>
  ))
      }
      </ul>
    
    
    }
      
 


    </TabPanel>
    <TabPanel>
      <h2> Wish list {wishlist.length}</h2>
      {

     wishlist.length === 0 ? <p>
      There is no data in wishList
     </p> : <ul className="list  mb-3 rounded-box ">
      {
        wishlist.map(singleBook=>(  <li className="list-row mb-3 shadow">
    <div><img className="size-10 rounded-box" src={singleBook.image}/>
    </div>
    <div>
      <div>{singleBook.bookName}</div>
      <div className="text-xs uppercase font-semibold opacity-60">Remaining Reason</div>

  <p>pages:{singleBook.totalPages}</p>
   
    <p>{singleBook.rating}</p>
    </div>
    <button className="btn btn-square btn-ghost">
        <ShoppingBasket />
    </button>
    <button onClick={()=>handleAsDelete("wishList",singleBook.bookId)}
    className="btn btn-square btn-ghost">
     <Trash />
    </button>
  </li>
        ))
      }
      </ul>
      }
      
    </TabPanel>
  </Tabs>
    );
};

export default ReadList;


