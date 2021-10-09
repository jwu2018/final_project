import React, { ChangeEvent, FormEvent, useEffect, useState, FC } from 'react';
import './App.css';
import './skeleton/skeleton.css'
import SuicideByState from './visualizations/SuicideByState';
import WorldwideMentalIllness from './visualizations/WorldwideMentalIllness';
import USMentalIllness from './visualizations/USMentalIllness';
import WorldwideSuicide from './visualizations/WorldwideSuicide';
import PHQ9Correlation from 'visualizations/PHQ9Correlation';
import Questions from 'Questions';
function App() {

  // const [dreams, setDreams] = useState<string[] | null>(null);

  // // get the dreams the first time
  // useEffect(() => {
  //   if (dreams === null) {
  //     fetch('http://localhost:5000/dreams')
  //       .then(res => res.json())
  //       .then(d => setDreams(d));
  //   }
  // });

  // const [newDream, setNewDream] = useState('');

  // const addDream = (newdream: string) => {
  //   fetch('http://localhost:5000/submit', {
  //     method: "POST",
  //     body: JSON.stringify({ newdream }),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },

  //   })
  //     .then(res => res.json())
  //     .then(d => {
  //       console.log(d);
  //       setDreams(d);
  //     });
  // }

  // const handleSubmit = (event: FormEvent) => {
  //   event.preventDefault();
  //   addDream(newDream);
  // }

  // const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   setNewDream(e.target.value);
  // };

  return (
    <div className="App">
      <Questions />
      {/* <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="new-dream-input"
          name="text"
          autoComplete="off"
          onChange={handleInputChange}
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add Dream
        </button>
      </form> 

      <br />
      <div style={{ "height": "600px", "width": "1000px" }}>
        <USMentalIllness />
      </div>
      <div style={{ "height": "600px", "width": "1000px" }}>
        <SuicideByState />
      </div>
      <div style={{ "height": "600px", "width": "1000px" }}>
        <WorldwideMentalIllness />
      </div>
      <div style={{ "height": "600px", "width": "100%" }}>
        <WorldwideSuicide />
      </div>
      <div style={{ "height": "600px", "width": "1000px" }}>
        <PHQ9Correlation />
      </div>
 */}
    </div >
  );
}

export default App;
