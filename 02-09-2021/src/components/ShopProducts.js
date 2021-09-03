import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';

export default function ShopProducts(){
    useEffect(() => {
        fetchspecific();
        // console.log(match)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const [item, setItem] = useState({
        data: {
            item: {
                images: {}
            }
        }
    })

    const { id } = useParams();
    
    const fetchspecific = async ()=>{
        // let fetchurl = `https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`;
        let fetchdata = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${id}`);
        console.log("ID Is", id)
        let fetchitems = await fetchdata.json();
        // console.log(fetchitems.data.item.name)
        setItem(fetchitems)
        // console.log(item.data.item.name)
        // console.log(item.data.item.images.icon)
        // items.data.map((item)=>{console.log(item.item.name)})
        // setItems(items.data);
    }

        return (
            <div className="container my-3">
                <h1>{item.data.item.name?item.data.item.name:"Still Looking For it"}</h1>
                <img src={item.data.item.images.icon} alt="Nothing"/>
            </div>
        )
    }
