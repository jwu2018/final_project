import React, { ChangeEvent, FormEvent, useEffect, useState, FC } from 'react';
import './App.css';
import './skeleton/skeleton.css'
import SuicideByState from './visualizations/SuicideByState';
import WorldwideMentalIllness from './visualizations/WorldwideMentalIllness';
import USMentalIllness from './visualizations/USMentalIllness';
import WorldwideSuicide from './visualizations/WorldwideSuicide';
import PHQ9Correlation from 'visualizations/PHQ9Correlation';


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
      <form>
        <div className="row">
          <div className="six columns">
            <label htmlFor="exampleEmailInput">Your email</label>
            <input className="u-full-width" type="email" placeholder="test@mailbox.com" id="exampleEmailInput" />
          </div>
          <div className="six columns">
            <label htmlFor="exampleRecipientInput">Reason for contacting</label>
            <select className="u-full-width" id="exampleRecipientInput">
              <option value="Option 1">Questions</option>
              <option value="Option 2">Admiration</option>
              <option value="Option 3">Can I get your number?</option>
            </select>
          </div>
        </div>
        <label htmlFor="exampleMessage">Message</label>
        <textarea className="u-full-width" placeholder="Hi Dave …" id="exampleMessage"></textarea>
        <label className="example-send-yourself-copy">
          <input type="checkbox" />
          <span className="label-body">Send a copy to yourself</span>
        </label>
        <input className="button-primary" type="submit" value="Submit" />
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



    </div >
  );
}

export default App;
