import { ResponsiveBar } from '@nivo/bar';
import WORLDWIDE_SUICIDE, { keys as worldwide_keys } from '../data/prevelance/worldwide_suicide';


const WorldwideSuicide = (props: any) => {
    const data = WORLDWIDE_SUICIDE
        .filter(d => d.Sex === "Both sexes")
        .map(datum => {
            return {
                ...datum,
                "rate": parseFloat(datum.rate),
            }
        })
        .sort((a, b) => (b.rate - a.rate));
    console.log(data);

    return (
        <ResponsiveBar
            data={data}
            keys={['rate']}
            indexBy="Country"
            margin={{ top: 50, right: 130, bottom: 80, left: 60 }}
            padding={0.2}
            // valueScale={{ type: 'linear' }}
            // indexScale={{ type: 'band', round: true }}
            // valueFormat='.2%'
            colors={{ scheme: 'nivo' }}
            borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 90,
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
                // format: '.1%'
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            // labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
            isInteractive={true}
        />
    );
}

export default WorldwideSuicide;