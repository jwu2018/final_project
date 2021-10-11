import React, { useEffect, useState } from "react";

const getSurveyData = async () => {
    let res = await fetch('http://localhost:5000/getAnswers').then(res => res.json());
    return res;
}

const SurveyResponses = () => {
    const [responseData, setResponseData] = useState({});

    useEffect(() => {
        getSurveyData().then(setResponseData);
    }, [])

    console.log(responseData);

    return (
        <div>hello world</div>
    )
}

export default SurveyResponses;