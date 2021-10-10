import React from 'react';
const Prevelance = (props: any) => {
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

            <h2>Prevalence of Suicide</h2>
            <form>
                {/* <!--<label htmlFor="country">What country are you from?</label><br/>--> */}
                <p>What country are you from?</p>
                <select id="country" name="country" onChange={onValueSelected}>
                    <option value=""></option>
                    <option value="opt1">option1</option>
                    <option value="opt2">option2</option>
                    <option value="opt3">option3</option>
                    <option value="opt4">option4</option>
                </select>
            </form>
        </>
    );
}

export default Prevelance;