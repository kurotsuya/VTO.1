import React, {useState, useEffect}   from 'react'
import './NewCollections.css'
import Item from '../Item/Item'

const NewCollections = () => {
  //The NewCollections component is a functional React component designed to fetch and display a collection of new products from a server endpoint.

 const [new_collection,setNew_collection] = useState([]); //new_collection state will hold the new collections fetched from the server

    useEffect(()=>{ //The useEffect hook is used to perform side effects in functional components, such as data fetching.
      //the function inside useEffect runs after the component mounts (when the component is rendered for the first time) because of the empty dependency array []
      fetch('http://localhost:4000/newcollections')//Sends a GET request to the specified URL to retrieve new collection
      .then((response)=>response.json())//Converts the response into JSON format.
      .then((data)=>setNew_collection(data)) //Updates the state variable new_collection with the fetched data.

    },[])
  return (
    <div className='newcollections'>
        <h1>NEW COLLECTIONS</h1>
    <hr/>      
       <div className="collections">
        {new_collection.map((item,i)=>{
    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}

       </div>
    </div>
  )
}

export default NewCollections
