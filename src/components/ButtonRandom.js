import Button  from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react';

export default function ButtonRandom () {
    const [randnomQuote, setRandomQuote] = useState({})

    useEffect(()=>{
        const getData = ()=>{
            fetch('localhost:5000/quotes/random')
            .then(response=>response.json())
            .then(data=>{
                console.log('raw data', data);
                setRandomQuote(data)
                console.log('fetched random quote', randnomQuote)
            })
            .catch(error=>{
                console.log(error)
            })
        }
        getData();
    }, [])

    const HandleClick =()=> {
    }

    return (
        <Button onClick={()=>{HandleClick()}}>Random</Button>

    )


}

