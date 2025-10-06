import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Books from '../Books/Books';
import { useLoaderData } from 'react-router';
// import useBooks from '../../hooks/useBooks';

const Home = () => {
    const data=useLoaderData();
//    const{loading,error,books}=useBooks()
//     console.log(loading,error,books);
    
    
    return (
        <div>
            <Banner></Banner>
            <Books data={data} ></Books>
        </div>
    );
};

export default Home;