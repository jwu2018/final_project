import React from "react";
import ExerciseDepression from "visualizations/ExerciseDepression";
import GenderFactor from "visualizations/GenderFactor";
import SuicideByStateChloropleth from "visualizations/SuicideByState";
import USMentalIllness from "visualizations/USMentalIllness";
import WorldwideMentalIllness from "visualizations/WorldwideMentalIllness";
import WorldwideSuicide from "visualizations/WorldwideSuicide";

const FactorsVis = (props: any) => {
    const data = props.data;

    const exercise = data.exercise;
    const gender = data.gender;
    const occupation = data.occupation;
    const healthcare = data.heatlhcare;

    return (
        <>
            <h2>Exercise and Depression</h2>
            <h4>Correlation Between Exercise Fequency and Self Reported Depression</h4>
            <div style={{ "display": "flex", "justifyContent": "center" }} >
                <ExerciseDepression />
            </div>
            <h2>Gender Identity and Mental Health</h2>
            <h4>Percentage of People with Clinically Significant Deperessoin and Anxiety By Gender Identity</h4>
            <div style={{ "display": "flex", "justifyContent": "center" }} >
                <GenderFactor />
            </div>


        </>
    )
}

export default FactorsVis;