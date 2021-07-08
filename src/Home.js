import React from 'react'
import './Home.css';
import Banner from './Banner';
import Card from './Card';

import c7 from './images/c7.jpg';
import c1 from './images/c1.jpg';
import c2 from './images/c22.jpg';
import c9 from './images/c9.jpg';
import c8 from './images/c8.jpg';
import c5 from './images/c5.jpg';
function Home() {
    return (
        <div className="home">
            <Banner />

            <div className="home__section">
                <Card 
                    src={c7}
                    title="Online Experience"
                    description="Unique activities we can do together, led by a world of hosts"
                />
                <Card 
                    src={c1}
                    title="Unique stays"
                    description="Spaces that are more than just a place to sleep"
                /><Card 
                    src={c2}
                    title="Entire homes"
                    description="Confortable privates places, with room for friends or family                    "
                />
            </div>
            <div className="home__section">
                <Card 
                    src={c8}
                    title="3 Bedroom Flat in Manali"
                    description="Enjoy confort with amazing environment"
                    price="₹1500/night"
                />
                <Card 
                    src={c9}
                    title="Penthouse"
                    description="Enjoy the amazing sights from your stunning penhouse"
                    price="₹2000/night"
                /><Card 
                    src={c5}
                    title="1 Bedroom apartment"
                    description="Superhost with great amenities and a fabolous shopping complex nearby"
                    price="₹1100/night"
                />
            </div>

        </div>
    )
}

export default Home

