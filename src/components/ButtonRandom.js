import Button  from 'react-bootstrap/Button';
import React, {useState } from 'react';
import { QuoteContext } from '../App';

export default function ButtonRandom () {
    /* const [randnomQuote, setRandomQuote] = useState({}) */
    const value = React.useContext(QuoteContext);

    
    const getData = ()=>{
        fetch('http://localhost:5000/quotes/random')
        .then(response=>response.json())
        .then(data=>{
            console.log('raw data', data);
            value(data)
            /* setRandomQuote(data)
            console.log('fetched random quote', randnomQuote) */
        })
        .catch(error=>{
            console.log(error)
        })
    }
    
    const HandleClick =()=> {
        getData();

    }

    return (
        <Button onClick={()=>{HandleClick()}}>Random</Button>

    )


}

