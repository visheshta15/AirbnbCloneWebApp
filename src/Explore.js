import React from 'react'
import './Explore.css';

function Explore() {
    return (
        <div className="explore">
            <h2> Explore other places</h2>
            <div className="explore__row1">
                <div className="explore__place">
                    <img src="https://a0.muscache.com/im/pictures/b948e0e0-c78f-4895-b433-c90401019981.jpg?im_q=medq&im_w=240" alt="" />
                    <div>
                        <h4>Haldwani</h4>
                        <h4 className="time">4.5-hour drive</h4>
                    </div>
                </div>
                <div className="explore__place">
                    <img src="https://a0.muscache.com/im/pictures/9ff017f4-1a62-4727-b83e-4087336f8c4a.jpg?im_q=medq&im_w=240" alt="" />
                    <div>
                        <h4>Almora</h4>
                        <h4 className="time">7-hour drive </h4>
                    </div>
                </div>
                <div className="explore__place">
                    <img src="https://a0.muscache.com/im/pictures/0810e005-87d3-4188-b95c-2d7fa2fc957b.jpg?im_q=medq&im_w=240" alt="" />
                    <div>
                        <h4>Dehradun</h4>
                        <h4 className="time">8-hour drive </h4>
                    </div>
                </div>
                <div className="explore__place">
                    <img src="https://a0.muscache.com/im/pictures/087a8dff-a609-4084-86db-f45051c6f23a.jpg?im_q=medq&im_w=240" alt="" />
                    <div>
                        <h4>Lucknow</h4>
                        <h4 className="time">2-hour drive </h4>
                    </div>
                </div>
            </div>

            <div className="explore__row2">
                <div className="explore__place">
                    <img src="https://a0.muscache.com/im/pictures/3369e34a-44bf-4e15-9892-330f97031d42.jpg?im_q=medq&im_w=240" alt="" />
                    <div>
                        <h4>Noida</h4>
                        <h4 className="time">6-hour drive</h4>
                    </div>
                </div>
                <div className="explore__place">
                    <img src="https://a0.muscache.com/im/pictures/76e5f1c6-a788-418c-a28b-f0ee29cffd41.jpg?im_q=medq&im_w=240" alt="" />
                    <div>
                        <h4>Varanasi</h4>
                        <h4 className="time">4-hour drive </h4>
                    </div>
                </div>
                <div className="explore__place">
                    <img src="https://a0.muscache.com/im/pictures/0445ba36-5684-4cca-9cb1-418a0ffdcd2f.jpg?im_q=medq&im_w=240" alt="" />
                    <div>
                        <h4>Goa</h4>
                        <h4 className="time">7-hour drive </h4>
                    </div>
                </div>
                <div className="explore__place">
                    <img src="https://a0.muscache.com/im/pictures/a7fe39da-3e57-44df-a744-9a73e482802d.jpg?im_q=medq&im_w=240" alt="" />
                    <div>
                        <h4>Pondi</h4>
                        <h4 className="time">20-hour drive </h4>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Explore
