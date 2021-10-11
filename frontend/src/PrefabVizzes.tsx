import React, { useState } from 'react';
import PreventionVizzes from 'visualizations/PreventionVizzes';
import PHQ9Correlation from 'visualizations/PHQ9Correlation';
import SuicideByStateChloropleth from 'visualizations/SuicideByState';
import USMentalIllness from 'visualizations/USMentalIllness';
import WorldwideMentalIllness from 'visualizations/WorldwideMentalIllness';
import WorldwideSuicide from 'visualizations/WorldwideSuicide';


const PrefabVizzes = () => {
    const [page, setPage] = useState(0);

    const pageArray = [
        // todo replace with pages for each section
        // <PHQ9Correlation/>,
        // <SuicideByStateChloropleth/>,
        // <USMentalIllness/>,
        // <WorldwideMentalIllness/>,
        // <WorldwideSuicide/>,

        // todo this one we can keep
        <PreventionVizzes/>
    ]
    const next = () => {
        setPage(page + 1);
    }
    const back = () => {
        setPage(Math.max(0, page - 1));
    }

    const getPage = (pageNum: number) => {
        return pageArray[pageNum];
    }

    return (
        <>
            <h1>Visualizations</h1>
            <div>
                {getPage(page)}

                <button type="button" onClick={back}>
                    Back
                </button>
                <button type="button" onClick={next}>
                    Next
                </button>
            </div>
        </>
    );
}

export default PrefabVizzes;