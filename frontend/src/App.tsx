import React, { ChangeEvent, FormEvent, useEffect, useState, FC } from 'react';
import './App.css';
import './skeleton/skeleton.css'
import Questions from 'Questions';
import PrefabVizzes from 'PrefabVizzes';
function App() {
  const [section, setSection] = useState(0);

  const sectionArray = [
    <Welcome/>,
    <PrefabVizzes/>,
    <Questions/>,
    <Thanks/>
]

  const next = () => {
    setSection(section + 1);
  }
  const getSection = (pageNum: number) => {
    return sectionArray[pageNum];
  }

  return (
      <>
          <h1>Website Title</h1>
          <div>
              {getSection(section)}

              <button type="button" onClick={next}>
                  Next Section
              </button>
          </div>
      </>
  );

  return (
    <div className="App">
      <Welcome/>,
      <PrefabVizzes/>,
      <Questions/> 
    </div>
  )
}

const Welcome = () => {
  return (
    <div>
            <h2>Welcome!</h2>
            <p>Thank you for taking the time to come visit our site!</p>
            <p>Mental health is a broad and complicated subject. The goal of this website is to present
            statistics and information about mental health and suicide in a way that is 
            engaging on a more personal level. Through interactive visualizations and survey 
            questions, we hope to give you a chance to be more introspective on this topic.</p>

            <h2>Disclaimer</h2>
            <p>Some of the questions we will ask you are taken from the PHQ-9 questionnaire,
            which is a self-administered screening survey for depression. The results from 
            those questions do not necessarily mean that you have depression and you should 
            see a professional for a credible diagnosis.</p>
            <p>Additionally, all your answers will be stored in a cloud database for later
            analysis. We will not be storing any of your private information.</p>
    </div>
  )
}

const Thanks = () => {
  return (
    <div>
        <h1>Thank You!</h1>
        <h2>Resources</h2>

        <ul>
            <li><a href="https://suicidepreventionlifeline.org/">
                USA Suicide Prevention Hotline</a></li>
            <li><a href="https://ibpf.org/resource/list-of-international-suicide-hotlines/">
                International Suicide Hotlines</a></li>
            <li><a href="https://www.samhsa.gov/childrens-awareness-day/past-events/2019/resources-suicide-prevention">
                USA Substance Abuse and Mental Health Services Administration</a></li>
            <li><a href="https://www.sprc.org/">
                Suicide Prevention Resource Center</a></li>
            <li><a href="https://afsp.org/suicide-prevention-resources">
                American Foundation for Suicide Prevention</a></li>
            <li><a href="https://www.thetrevorproject.org/">
                The Trevor Project</a></li>
            <li><a href="https://www.veteranscrisisline.net/">
                Veterans Crisis Line</a></li>
            <li><a href="https://hotline.rainn.org/online">
                RAINN National Assault Hotline</a></li>
            <li><a href="https://locator.apa.org/">
                Psychologist Locator</a></li>
            <li><a href="https://afsp.org/become-a-suicide-prevention-public-policy-advocate">
                Become a Suicide Prevention Advocate</a></li>
            
        </ul>

        <h2>Our Sources</h2>

        <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
  )
}


export default App;
