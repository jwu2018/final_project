import NCHAAttemptedSuicide from "./ncha_attempted_suicide";
import NCHAConsideredSuicide from "./ncha_considered_suicide";
import NCHADepressedFunction from "./ncha_felt_depressed_difficult_to_function";
import NCHAFeltOverwhelmed from "./ncha_felt_overwhelmed_by_all_to_do";
import NCHAFeltOverwhelmingAnger from "./ncha_felt_overwhelming_anger";
import NCHAFeltThingsWereHopeless from "./ncha_felt_things_were_hopeless";
import NCHAFeltVeryLonely from "./ncha_felt_very_lonely";
import NCHAFeltVerySad from "./ncha_felt_very_sad";
import NCHAMentallyExhausted from "./ncha_felt_mentally_exhausted_data";
import NCHASelfHarm from "./ncha_self_harm";
import NCHAFeltOverwhelmingAnxiety from "./ncha_felt_overwhelming_anxiety";

const NCHAVisualizations = (props: any) => {
    return (
        <>
            <div>
                <h2>
                    Student Responses to National College Health Assessment
                </h2>
                <p>
                    Mental health issues can be especially prevalent in the stressful environment of college.
                    In 2019, the American College Health Association conducted a survey of approximately 70,000 college
                    students across the United States. As part of this survey, students were asked to state whether they
                    had felt or done certain things in the last 2 weeks, last 30 days, last 12 months, prior to the last
                    12 months, or never.
                </p>
                <NCHAFeltThingsWereHopeless />
                <br />
                <NCHAFeltOverwhelmed />
                <br />
                <NCHAMentallyExhausted />
                <br />
                <NCHAFeltVeryLonely />
                <br />
                <NCHAFeltVerySad />
                <br />
                <NCHADepressedFunction />
                <br />
                <NCHAFeltOverwhelmingAnxiety />
                <br />
                <NCHAFeltOverwhelmingAnger />
                <br />
                <NCHAConsideredSuicide />
                <br />
                <NCHAAttemptedSuicide />
                <br />
                <NCHASelfHarm />
                <br />
                <p>Source:</p>
                <p><a href="https://www.acha.org/documents/ncha/NCHA-II_SPRING_2019_US_REFERENCE_GROUP_EXECUTIVE_SUMMARY.pdf">
                    American College Health Association || National College Health Assessment</a></p>
            </div>
        </>
    )
}

export default NCHAVisualizations;