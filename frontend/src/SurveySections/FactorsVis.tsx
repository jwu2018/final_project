import React from "react";
import SuicideByStateChloropleth from "visualizations/SuicideByState";
import USMentalIllness from "visualizations/USMentalIllness";
import WorldwideMentalIllness from "visualizations/WorldwideMentalIllness";
import WorldwideSuicide from "visualizations/WorldwideSuicide";

const PrevelanceVis = (props: any) => {
    const data = props.data;

    const exercise = data.exercise;
    const gender = data.gender;
    const occupation = data.occupation;
    const healthcare = data.heatlhcare;

    return (
        <>
            hello world!

        </>
    )
}

export default PrevelanceVis;