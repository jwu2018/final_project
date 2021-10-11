import React, { useState } from 'react';
import ExampleVis from 'SurveySections/ExampleVis';
import TreatmentVis from 'SurveySections/TreatmentVis';
import Factors from 'SurveySections/Factors';
import FactorsVis from 'SurveySections/FactorsVis';
import Prevelance from 'SurveySections/Prevelance';
import PrevelanceVis from 'SurveySections/PrevelanceVis';
import Prevention from 'SurveySections/Prevention';
import PreventionUserVis from 'SurveySections/PreventionUserVis';
import Treatment from 'SurveySections/Treatment';
import PreventionVizzes from 'visualizations/PreventionVizzes';


const Questions = (props: any) => {
    const [page, setPage] = useState(0);
    const [data, setData] = useState({});

    const pageArray = [
        <Prevelance data={data} dataCallback={setData} />,
        <PrevelanceVis data={data} />,
        <Factors data={data} dataCallback={setData} />,
        <FactorsVis data={data} />,
        <Treatment data={data} dataCallback={setData} />,
        <TreatmentVis data={data} />,
        <PreventionVizzes />,
        <Prevention data={data} dataCallback={setData} />,
        <PreventionUserVis data={data} />
    ]

    const { nextCallback } = props;
    const next = () => {
        console.log("data is:");

        console.log(data);
        // if (page % 2 === 1) {
        //     setData({});
        // }
        if (page === pageArray.length - 1) {
            nextCallback();
        }
        setPage(page + 1);
    }
    const back = () => {
        setPage(Math.max(0, page - 1));
    }

    const getPage = (pageNum: number) => {
        return pageArray[pageNum];
    }

    return (
        <div className="section">
            <h1>Survey</h1>
            <div>
                {getPage(page)}
                <button type="button" onClick={back}>
                    Back
                </button>
                <button className="u-pull-right" type="button" onClick={next}>
                    Next
                </button>
            </div>
        </div>
    );
}

export default Questions;