import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
export default function Shop() {

useEffect(() => {
    fetchitems();
    }, [])

const [items, setItems] = useState([]);

const fetchitems = async ()=>{
    let url = 'https://fortnite-api.theapinetwork.com/items/list';
    let data = await fetch(url);
    let items = await data.json();
    console.log(items.data[0].item.images.icon)
    // items.data.map((item)=>{console.log(item.item.name)})
    setItems(items.data);
}

// fetchitems();
    return (
        <div className="container my-3">
            <h1>This is shop page</h1>
            <div className="row">
            {items.map((item)=>{
                return (
                
                <h3 className="col-md-3 my-3">
                    <Link to={`/shop/${item.itemId}`}>{item.item.name}</Link></h3>)
            })}
            </div>
        </div>
    );
}