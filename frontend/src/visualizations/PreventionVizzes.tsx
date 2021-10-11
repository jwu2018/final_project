// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/geo
import { ResponsiveChoropleth } from '@nivo/geo'
import { ResponsiveBar } from '@nivo/bar'
import suicide_hotlines_data from 'data/geo/suicide_hotlines'
import country_features from 'data/geo/countries.json'
import action_plans_data from 'data/prevention/action_plans'
import suicide_laws_data from 'data/prevention/suicide_laws'


const PreventionVizzes = (props: any) => {
    return (
        <>
            {/* {keys.map(key => {
                return <div>{key}: {data[key]}</div>
            })} */}

            <div>
                <h4>Suicide Prevention Methods</h4>
                <ActionPlansByCountryBar />
                <br />
                <SuicideHotlinesChoropleth />
                <br />
                <SuicideLawsChoropleth />
                <br />
                <p>Sources:</p>
                <p><a href="https://www.who.int/publications/i/item/9789241564779">
                    WHO || Preventing suicide: A global imperative</a></p>
                <p><a href="https://ibpf.org/resource/list-of-international-suicide-hotlines/">
                    International Bipolar Foundation || List of International Suicide Hotlines</a></p>
                <p><a href="https://en.wikipedia.org/wiki/Suicide_legislation">
                    Wikipedia || Suicide Legislation</a></p>
            </div>
        </>
    )
}

const SuicideHotlinesChoropleth = (props: any) => {
    return (
        <div>
            <h6>36 countries have national suicide hotlines</h6>
            <div style={{ "height": "500px", "width": "900px" }}>
                <ResponsiveChoropleth
                    data={suicide_hotlines_data}
                    features={country_features.features}
                    margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                    colors="nivo"
                    domain={[0, 0]}
                    unknownColor="#666666"
                    label="properties.name"
                    // valueFormat=".2s"
                    projectionTranslation={[0.5, 0.5]}
                    projectionRotation={[0, 0, 0]}
                    enableGraticule={true}
                    graticuleLineColor="#dddddd"
                    borderWidth={0.5}
                    borderColor="#152538"
                />
            </div>
        </div>)
};



// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const ActionPlansByCountryBar = (props: any) => {
    return (
        <div>
            <h6>28 countries have existing national strategy or action suicide prevention plans, 13 countries are developing plans.</h6>
            <div style={{ "height": "500px", "width": "900px" }}>
                <ResponsiveBar
                    data={action_plans_data}
                    keys={['existing plans', 'developing plans']}
                    indexBy="region"
                    margin={{ top: 50, right: 150, bottom: 50, left: 60 }}
                    padding={0.3}
                    valueScale={{ type: 'linear' }}
                    indexScale={{ type: 'band', round: true }}
                    colors={{ scheme: 'nivo' }}
                    borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'region',
                        legendPosition: 'middle',
                        legendOffset: 32
                    }}
                    axisLeft={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'action plans',
                        legendPosition: 'middle',
                        legendOffset: -40
                    }}
                    labelSkipWidth={12}
                    labelSkipHeight={12}
                    labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
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

                    enableLabel={false}
                    // labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                    isInteractive={true}
                // role="application"
                // ariaLabel="Number of countries with existing or developing national strategy or action plans"
                // barAriaLabel={function(e){return e.id+": "+e.formattedValue+" in region: "+e.indexValue}}
                />
            </div>
        </div>);
};

// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/geo

const SuicideLawsChoropleth = (props: any) => {
    return (
        <div>
            <h6>22 countries criminalize suicide</h6>
            <div style={{ "height": "500px", "width": "900px" }}>
                <ResponsiveChoropleth
                    data={suicide_laws_data}
                    features={country_features.features}
                    margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                    colors="nivo"
                    domain={[0, 1]}
                    unknownColor="#666666"
                    label="properties.name"
                    // valueFormat=".2s"
                    projectionTranslation={[0.5, 0.5]}
                    projectionRotation={[0, 0, 0]}
                    enableGraticule={true}
                    graticuleLineColor="#dddddd"
                    borderWidth={0.5}
                    borderColor="#152538"
                />
            </div>
            <p>There is no evidence that decriminalization increases suicide rates - in fact, decriminalization
                is shown to <em>decrease</em> suicide rates.
            </p>
        </div>)
};

export default PreventionVizzes;