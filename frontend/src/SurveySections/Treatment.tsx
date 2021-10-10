import React from 'react';
const Treatment = (props: any) => {
    const setData = props.dataCallback;
    const data = props.data;
    const onValueSelected = (event: any) => {
        const { name, value } = event.target;
        const newData = { ...data };
        newData[name] = value;
        setData(newData);
    }
    return (
        <>
            <h2>How Mental Illnesses Are Treated</h2>
            <form>
                <p>Are you currently being treated for a common mental disorder (anxiety, depressive, or panic disorder)?</p>
                <input type="radio" id="treatment_yes" name="treatment" value="Yes" onChange={onValueSelected} />
                <label htmlFor="treatment_yes">Yes</label><br />
                <input type="radio" id="treatment_no" name="treatment" value="No" onChange={onValueSelected} />
                <label htmlFor="treatment_no">No, I have never been treated</label><br />
                <input type="radio" id="treatment_no_past" name="treatment" value="Past" onChange={onValueSelected} />
                <label htmlFor="treatment_no_past">No, but I have been treated in the past</label>
            </form>
        </>
    );
}
export default Treatment;
