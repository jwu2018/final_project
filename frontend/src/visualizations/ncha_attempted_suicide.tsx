import { ResponsiveBar } from '@nivo/bar';
import phq_score_correlation from '../data/alan/ncha_attempted_suicide_data';

const NCHAAttemptedSuicide = (props: any) => {
    return (
        <div style={{ width: '800px', height: '600px' }}>
            <ResponsiveBar
                data={phq_score_correlation}
                keys={['male', 'female', 'total']}
                indexBy="answer"
                margin={{ top: 50, right: 10, bottom: 80, left: 60 }}
                padding={0.3}
                // valueScale={{ type: 'linear' }}
                // indexScale={{ type: 'band', round: true }}
                valueFormat='.2%'
                groupMode="grouped"
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
                    legend: 'Percentage',
                    legendPosition: 'middle',
                    legendOffset: -50,
                    format: '.1%'
                }}
                // labelSkipWidth={12}
                // labelSkipHeight={12}
                enableLabel={false}
                // labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                isInteractive={true}
            />
        </div>
    );
};

export default NCHAAttemptedSuicide;