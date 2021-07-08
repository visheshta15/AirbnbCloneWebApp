import { Button } from '@material-ui/core';
import React from 'react';
import './SearchPage.css';
import SearchResult from './SearchResult';
import d1 from './images/d1.jpg'
import d2 from './images/d2.jpg'
import d3 from './images/d3.jpg'
import d4 from './images/d4.jpg'
import d5 from './images/d5.jpg'
import Explore from './Explore';

function SearchPage() {
    let date = new Date().toLocaleDateString().split('/')[0]
    let monthNames = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
   
    return (
        <div className="searchPage">
            <div className="searchPage_info">
                <p>{`62 stays · ${ new Date().getDate()} ${monthNames[date-1]} to ${ new Date().getDate() +5} ${monthNames[date-1]}· 2 guest`}</p>

                <h1>Stay Nearby</h1>

                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and beds</Button>
                <Button variant="outlined">More filters</Button>

            </div>
            

            <SearchResult 
                img={d2}
                location="Entire Flat in Bangaluru"
                title="Spacious one bedroom in the heart of Indiranagar"
                description="2 guests · 1 bedroom · 1 bed · 1.5 bathrooms"
                star={4.73}
                price="₹3,000/ night"
            />
            <SearchResult 
                img={d4}
                location="Agonda, Goa"
                title="Jacuzzi | Beach Front | Air-con | Free Breakfast"
                description="2 guests · 1 bedroom · 1 bed · 1 private bathroom"
                star={4.75}
                price="₹3,500/ night"
            />

            <Explore />

            <SearchResult 
                img={d3}
                location="Goa"
                title="Homestay in Moira village set in the heart of Goa."
                description="2 guests · 1 bedroom · 1 private bathroom"
                star={3}
                price="₹2,050/ night"
            />
            <SearchResult 
                img={d1}
                location="Mumbai, Maharashtra"
                title="Snooze House Navi Mumbai"
                description="1 guest · 1 bedroom · 7 beds · 5 shared bathroo"
                star={4.9}
                price="₹4,040/ night"
            />
            <SearchResult 
                img={d5}
                location="MH- Astrostays - Village Maan, Pangong Tso, Ladakh"
                title="Private room in house hosted by Mountain Homestays"
                description="2 guests · 1 bedroom · 3 beds · 1 private bathroom"
                star={3.5}
                price="₹1,040/ night"
            />

        </div>
    )
}

export default SearchPage
