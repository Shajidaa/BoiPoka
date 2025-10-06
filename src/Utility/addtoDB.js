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

export {addToStoredDB,getStoreBook}