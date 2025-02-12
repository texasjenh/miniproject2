import React from "react"
import './home.css'
import SubscribeForm from "../components/Subscribe"

const HomePage=() => {
    return (
        <>
            <h2 className="head2"><i className="fa-solid fa-book-open-reader"/> Find your next great read...</h2>     
                <div className="about">
                    <p className="about2"> Sign-up to receive our weekly New Reads email:</p>
                    <form action="#">
                        <label for="fname" className="label">First name: </label>
                            <input type="text" id="fname" name="fname"/>
                    </form>
                    <form action="#">
                        <label for="email" className="email">Email: </label>
                        <input type="email" id="email" name="email"/>
                    <div> 
                        <input className="submit" type="submit"/>
                    </div>
                    </form>              
                </div>  
        </>
    )
}

export default HomePage