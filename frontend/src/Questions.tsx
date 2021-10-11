import React, { useState } from 'react';
import ExampleVis from 'SurveySections/ExampleVis';
import Factors from 'SurveySections/Factors';
import Prevelance from 'SurveySections/Prevelance';
import Prevention from 'SurveySections/Prevention';
import PreventionUserVis from 'SurveySections/PreventionUserVis';
import Treatment from 'SurveySections/Treatment';
import PreventionVizzes from 'visualizations/PreventionVizzes';


const Questions = () => {
    const [page, setPage] = useState(0);
    const [data, setData] = useState({});

    const pageArray = [
        <Prevelance data={data} dataCallback={setData} />,
        <ExampleVis data={data} />,
        <Factors data={data} dataCallback={setData} />,
        <ExampleVis data={data} />,
        <Treatment data={data} dataCallback={setData} />,
        <ExampleVis data={data} />,
        <Prevention data={data} dataCallback={setData} />,
        <PreventionUserVis data={data}/>
    ]
    const next = () => {
        console.log("data is:");

        console.log(data);
        if (page % 2 === 1) {
            setData({});
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
        <>
            <h1>Survey</h1>
            <div>
                {getPage(page)}
                {/* <h2>Prevalence of Suicide</h2>
                <form>
                    <p>What country are you from?</p>
                    <select id="country" name="country">
                        <option value="">option1</option>
                        <option value="">option2</option>
                        <option value="">option3</option>
                        <option value="">option4</option>
                    </select>
                </form>

                <h2>Factors That Contribute to Suicide and/or Mental Illness</h2>
                <form>
                    <p>How frequently do you exercise?</p>
                    <input type="radio" id="exercise_always" name="exercise" value="Always" />
                    <label htmlFor="exercise_always">Always</label><br />
                    <input type="radio" id="exercise_often" name="exercise" value="Often" />
                    <label htmlFor="exercise_often">Often</label><br />
                    <input type="radio" id="exercise_sometimes" name="exercise" value="Sometimes" />
                    <label htmlFor="exercise_sometimes">Sometimes</label><br />
                    <input type="radio" id="exercise_rarely" name="exercise" value="Rarely" />
                    <label htmlFor="exercise_rarely">Rarely</label><br />
                    <input type="radio" id="exercise_never" name="exercise" value="Never" />
                    <label htmlFor="exercise_never">Never</label>

                    <p>Does your gender identity match your sex assignment at birth?</p>
                    <input type="radio" id="gender_yes" name="gender" value="Yes" />
                    <label htmlFor="gender_yes">Yes</label><br />
                    <input type="radio" id="gender_no" name="gender" value="No" />
                    <label htmlFor="gender_no">No</label>

                    <p>Are you either employed or enrolled as a full-time student?</p>
                    <input type="radio" id="occupation_yes" name="occupation" value="Yes" />
                    <label htmlFor="occupation_yes">Yes</label><br />
                    <input type="radio" id="occupation_no" name="occupation" value="No" />
                    <label htmlFor="occupation_no">No</label>

                    <p>How is the quality of the healthcare in your community?</p>
                    <input type="radio" id="healthcare_verygood" name="healthcare" value="Very Good" />
                    <label htmlFor="healthcare_verygood">Very Good</label><br />
                    <input type="radio" id="healthcare_good" name="healthcare" value="Good" />
                    <label htmlFor="healthcare_good">Good</label><br />
                    <input type="radio" id="healthcare_fair" name="healthcare" value="Fair" />
                    <label htmlFor="healthcare_fair">Fair</label><br />
                    <input type="radio" id="healthcare_poor" name="healthcare" value="Poor" />
                    <label htmlFor="healthcare_poor">Poor</label><br />
                    <input type="radio" id="healthcare_verypoor" name="healthcare" value="Very Poor" />
                    <label htmlFor="healthcare_verypoor">Very Poor</label>
                </form> */}

                {/* <h2>How Mental Illnesses Are Treated</h2>
                <form>
                    <p>Are you currently being treated for a common mental disorder (anxiety, depressive, or panic disorder)?</p>
                    <input type="radio" id="treatment_yes" name="treatment" value="Yes" />
                    <label htmlFor="treatment_yes">Yes</label><br />
                    <input type="radio" id="treatment_no" name="treatment" value="No" />
                    <label htmlFor="treatment_no">No, I have never been treated</label><br />
                    <input type="radio" id="treatment_no_past" name="treatment" value="Past" />
                    <label htmlFor="treatment_no_past">No, but I have been treated in the past</label>
                </form>

                <h2>Suicide Prevention Methods</h2>
                <form>
                    <p>Are you willing to help prevent suicides in your community?</p>
                    <input type="radio" id="willing_yes" name="willing" value="Yes" />
                    <label htmlFor="willing_yes">Yes</label><br />
                    <input type="radio" id="willing_no" name="willing" value="No" />
                    <label htmlFor="willing_no">No</label>

                    <p>Do you have your country’s suicide hotline saved on your phone? (if applicable)</p>
                    <input type="radio" id="number_yes" name="number" value="Yes" />
                    <label htmlFor="number_yes">Yes</label><br />
                    <input type="radio" id="number_no" name="number" value="No" />
                    <label htmlFor="number_no">No</label><br />
                    <input type="radio" id="number_na" name="number" value="Not Applicable" />
                    <label htmlFor="number_na">Not Applicable</label>

                    <p>How often are you engaged with your community?</p>
                    <input type="radio" id="engaged_always" name="engaged" value="Always" />
                    <label htmlFor="engaged_always">Always</label><br />
                    <input type="radio" id="engaged_often" name="engaged" value="Often" />
                    <label htmlFor="engaged_often">Often</label><br />
                    <input type="radio" id="engaged_sometimes" name="engaged" value="Sometimes" />
                    <label htmlFor="engaged_sometimes">Sometimes</label><br />
                    <input type="radio" id="engaged_rarely" name="engaged" value="Rarely" />
                    <label htmlFor="engaged_rarely">Rarely</label><br />
                    <input type="radio" id="engaged_never" name="engaged" value="Never" />
                    <label htmlFor="engaged_never">Never</label>

                    <p>Does your community/country have a suicide prevention plan?</p>
                    <input type="radio" id="plan_yes" name="plan" value="Yes" />
                    <label htmlFor="plan_yes">Yes</label><br />
                    <input type="radio" id="plan_maybe" name="plan" value="Maybe" />
                    <label htmlFor="plan_maybe">Maybe</label><br />
                    <input type="radio" id="plan_no" name="plan" value="No" />
                    <label htmlFor="plan_no">No</label>
                </form>

                <h2>How Society and Different Organizations Like Colleges Can Address
                    Mental Health in the Community</h2> */}

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

export default Questions;