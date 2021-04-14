import React, { useState, useEffect } from 'react';
import Random from './Random'

export default function ChuckNorris() {
    const API_RANDOM_URL = `https://api.chucknorris.io/jokes/random`;

    const [word, setWord] = useState([]);

    useEffect(()=>{
        loadRandomWords()
      },[]);

    const loadRandomWords = async () =>{
        const response = await fetch(API_RANDOM_URL);
        const data = await response.json();
        setWord(data)
        console.log(data)
        console.log(word)
      }

    return (
      <div>
       <Random data ={word} load ={loadRandomWords}/>
     </div>
    )
    
    
}

