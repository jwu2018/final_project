import React from "react";
import BarriersNCSR from "visualizations/BarriersNCSR";
import BarriersNCSRGrouped from "visualizations/BarriersNCSRGrouped";
import FirstYearCollegeBarriers from "visualizations/FirstYearCollegeBarriers";

const TreatmentVis = (props: any) => {
    const data = props.data;
    const keys = Object.keys(data);
    return (
        <>
            {keys.map(key => {
                return <div>{key}: {data[key]}</div>
            })}
            <div style={{ "height": "600px", "width": "100%" }}>
                <FirstYearCollegeBarriers />
            </div>
            <div style={{ "height": "600px", "width": "100%" }}>
                <BarriersNCSR />
            </div>
            <div style={{ "height": "600px", "width": "100%" }}>
                <BarriersNCSRGrouped />
            </div>
            
        </>
    )
}

export default TreatmentVis;