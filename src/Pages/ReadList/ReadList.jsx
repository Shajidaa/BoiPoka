import React, { useEffect, useState} from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoreBook } from '../../Utility/addtoDB';

const ReadList = () => {
    const [read,setRead]=useState([]);
    const [sort,setSort]=useState('');
    // console.log(read);
    
    const data=useLoaderData()
    // console.log(data);

    useEffect(()=>{
        const storedBookData=getStoreBook();
        console.log(storedBookData);
        
        const convertedStoredBookData=storedBookData.map(id=>parseInt(id))
        console.log(convertedStoredBookData);
        
        const myReadList=data.filter(book=>convertedStoredBookData.includes(book.bookId));
         setRead(myReadList);
        //  console.log(myReadList)
    },[data])

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
          <div className="dropdown dropdown-hover">
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
      {
   read.map(singleBook=>(
 <div className="card bg-base-100  border
                border-gray-300  shadow-xl p-5
                 flex justify-between ">
  <figure  className='bg-[#F3F3F3] ' >
    <img className='w-40 h-40 object-contain'
      src={singleBook.image}
      alt="Book Image" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-[#131313] font-bold text-2xl">
    {singleBook.bookName}
      
    </h2>
    <p>pages:{singleBook.totalPages}</p>
    <p className='font-medium text-base text-[#131313] '>{singleBook.author}</p>
    <p>{singleBook.rating}</p>
  </div>
     </div>

   ))
      }


    </TabPanel>
    <TabPanel>
      <h2>my Wish list</h2>
    </TabPanel>
  </Tabs>
    );
};

export default ReadList;