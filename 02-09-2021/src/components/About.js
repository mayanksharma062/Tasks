import React from 'react'
import { useHistory, useLocation } from 'react-router';
export default function About() {

    const history = useHistory();
    const location = useLocation();
    console.log(history)
    console.log(location)
    console.log(history.location.pathname)

    function changeToHome(){
     history.push('/home')   
    }

    function changeToShop(){
     history.push('/shop')   
    }

    return (
        <>
        <div className="container my-3">
            <h1>This is about page</h1>
        <button className="btn btn-success" onClick={changeToHome}>Go Back To Home</button>
        <button className="btn btn-success mx-3" onClick={changeToShop}>Go Back To shop</button>
        </div>
        </>
    );
}