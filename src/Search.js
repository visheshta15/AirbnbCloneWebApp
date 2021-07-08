import React,{useState} from 'react';
import './Search.css'
import PeopleIcon from '@material-ui/icons/People';
import {Button} from '@material-ui/core'

import {useHistory} from 'react-router-dom';


//npm i react-date-range
//npm i react date-fns
// peerDependencies

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { Calendar } from 'react-date-range';

//date picker component
function Search() {
    let history = useHistory();
    // DateRangePicker / DateRange
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    }
    function handleSelectRange(ranges)  {
        setStartDate(ranges.selection.startDate) ;
        setEndDate(ranges.selection.endDate)
    }

    // DatePicker
    function handleSelect(date){
        console.log(date); // native Date object
      }


    return (
        <div className="search">
            <DateRangePicker 
                ranges={[selectionRange]}
                onChange={handleSelectRange}
            />
            {/* <Calendar
                date={new Date()}
                onChange={handleSelect}
            /> */}

            <h2>
                Number of guests
                <PeopleIcon />
            </h2>

            <input 
                min={0}
                defaultValue={2}
                type="number"
            />

            <Button onClick={()=> history.push('/search')} className="button">Search Airbnb</Button>
        </div>
    )
}

export default Search
