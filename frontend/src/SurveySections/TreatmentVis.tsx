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
            <p>Here are your answers to the previous questions:</p>

            <p>"You are not sure available treatments are very effective.": {data["avail"]}<br />
            "You would want to handle the problem on your own.": {data["handle"]}<br />
            "You would be too embarrassed.": {data["embarrassed"]}<br />
            "You would talk to friends or relatives instead.": {data["friends"]}<br />
            "You think it costs too much money.": {data["money"]}<br />
            "You are unsure of where to go or who to see.": {data["where"]}<br />
            "You anticipate problems with time, transportation, or scheduling.": {data["time"]}<br />
            "You are afraid it might harm your school or professional career": {data["harm"]}</p>

            <h3>Importance of Barriers to Treatment to First-Year College Students</h3>
            <div style={{ "height": "600px", "width": "100%" }}>
                <FirstYearCollegeBarriers />
            </div>
            <p style={{fontSize: "small", zIndex: 100}}>Questions and data acquired from&nbsp;
            <a href="https://onlinelibrary.wiley.com/doi/10.1002/mpr.1782" style={{zIndex: 100}}><em>Barriers
                of mental health treatment utilization among first-year college students: First
                cross-national results from the WHO World Mental Health International College Student
                Initiative</em></a></p>
            
            <h3>NCS-R: Reasons for Not Seeking Treatment</h3>
            <div style={{ "height": "600px", "width": "100%" }}>
                <BarriersNCSR />
            </div>
            
            <h3>NCS-R: Reasons for Not Seeking Treatment, Grouped</h3>
            <div style={{ "height": "600px", "width": "100%" }}>
                <BarriersNCSRGrouped />
            </div>
            
        </>
    )
}

export default TreatmentVis;