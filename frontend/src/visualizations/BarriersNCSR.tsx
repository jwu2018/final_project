import { ResponsiveBar } from "@nivo/bar";
import barriers from "data/treatment-barriers/barriers_ncs-r";

const BarriersNCSR = (props: any) => {
    return (
        <>
        <h3>NCS-R: Reasons for Not Seeking Treatment</h3>
        <ResponsiveBar
            data={barriers}
            keys={['mild', 'moderate', 'severe']}
            indexBy="reason"
            groupMode="grouped"
            margin={{ top: 10, right: 100, bottom: 100, left: 100 }}
            padding={0.3}
            // valueScale={{ type: 'linear' }}
            // indexScale={{ type: 'band', round: true }}
            valueFormat='.1%'
            colors={{ scheme: 'nivo' }}
            borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                // legend: 'Diagnosis',
                legendPosition: 'middle',
                legendOffset: 32
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                // legend: 'Percentage',
                legendPosition: 'middle',
                legendOffset: -50,
                format: '.1%'
            }}
            maxValue={0.8}
            // labelSkipWidth={12}
            // labelSkipHeight={12}
            enableLabel={false}
            // labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
            isInteractive={true}
        />
        </>
    );
};

export default BarriersNCSR;