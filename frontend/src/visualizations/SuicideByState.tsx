// import US_STATES_MAP from './us_states';
import { ResponsiveBar } from '@nivo/bar'
import us_suicide from '../data/prevelance/us_suicide';

const SuicideByStateChloropleth = (props: any) => {
    const data = us_suicide;
    // const data = us_suicide.map(state_entry => {
    //     return { ...state_entry, state: getLongStateNameFromShort(state_entry.state) };
    // });
    console.log(data);

    return (
        <ResponsiveBar
            data={data}
            keys={['rate']}
            indexBy="state"
            margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
            // padding={0.3}
            // valueScale={{ type: 'linear' }}
            // indexScale={{ type: 'band', round: true }}
            // valueFormat={{ format: '', enabled: false }}
            colors={{ scheme: 'nivo' }}
            borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 90,
                legend: 'state',
                legendPosition: 'middle',
                legendOffset: 32
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'suicides per 100,000',
                legendPosition: 'middle',
                legendOffset: -40
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            enableLabel={false}
            // labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
            isInteractive={true}
            legends={[
                {
                    dataFrom: 'keys',
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 120,
                    translateY: 0,
                    itemsSpacing: 2,
                    itemWidth: 100,
                    itemHeight: 20,
                    itemDirection: 'left-to-right',
                    itemOpacity: 0.85,
                    symbolSize: 20,
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
        />
    )
};

export default SuicideByStateChloropleth;