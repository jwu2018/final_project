import { ResponsiveBar } from '@nivo/bar';
import WORLDWIDE_MENTAL_ILLNESS, { keys as worldwide_keys } from '../data/prevelance/worldwide_mental_illness';


const WorldwideMentalIllness = (props: any) => {
    const data = WORLDWIDE_MENTAL_ILLNESS
        .filter(datum => datum.disorder !== "Any mental or substance use disorder")
        .map(datum => {
            return {
                "disorder": datum.disorder,
                "rate": parseFloat(datum.rate),
                "rateMale": parseFloat(datum.rateMale),
                "rateFemale": parseFloat(datum.rateFemale),
                "numPeople": parseInt(datum.numPeople)
            }
        })
        .sort((a, b) => (b.rate - a.rate));
    console.log(data);

    return (
        <ResponsiveBar
            data={data}
            keys={['rate']}
            indexBy="disorder"
            margin={{ top: 50, right: 130, bottom: 80, left: 60 }}
            padding={0.3}
            // valueScale={{ type: 'linear' }}
            // indexScale={{ type: 'band', round: true }}
            valueFormat='.2%'
            colors={{ scheme: 'nivo' }}
            borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                // legend: 'Disorder',
                legendPosition: 'middle',
                legendOffset: 32
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Worldwide Rate',
                legendPosition: 'middle',
                legendOffset: -50,
                format: '.1%'
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            // labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
            isInteractive={true}
        // legends={[
        //     {
        //         dataFrom: 'keys',
        //         anchor: 'bottom-right',
        //         direction: 'column',
        //         justify: false,
        //         translateX: 120,
        //         translateY: 0,
        //         itemsSpacing: 2,
        //         itemWidth: 100,
        //         itemHeight: 20,
        //         itemDirection: 'left-to-right',
        //         itemOpacity: 0.85,
        //         symbolSize: 20,
        //         effects: [
        //             {
        //                 on: 'hover',
        //                 style: {
        //                     itemOpacity: 1
        //                 }
        //             }
        //         ]
        //     }
        // ]}
        />
    );
}

export default WorldwideMentalIllness;