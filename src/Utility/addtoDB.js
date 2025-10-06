const getStoreBook=(key)=>{
    const storedBook=JSON.parse(localStorage.getItem(key))
    if (storedBook) {
        // const storedBookData=JSON.parse(storedBookStr)
        return storedBook
    }else{
        return []
    }
}

const addToStoredDB=(key,id)=>{
    const storedBookData=getStoreBook(key)
    if (storedBookData.includes(id)) {
        alert('This book already add .........')
    }else{
        storedBookData.push(id)
        // console.log(storedBookData);
        const data=JSON.stringify(storedBookData)
        localStorage.setItem(key,data)
    }
}

const deleteStoreBook=(key,id)=>{
    console.log(key,id);
    
    const storedBookData=getStoreBook(key)

   const updateList=storedBookData.filter(p=>p !== id)
   console.log(updateList);
   
   localStorage.setItem(key,JSON.stringify(updateList))
    
}


export {addToStoredDB,getStoreBook,deleteStoreBook}