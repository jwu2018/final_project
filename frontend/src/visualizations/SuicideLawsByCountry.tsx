// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/geo
import { ResponsiveChoropleth } from '@nivo/geo'
import suicde_laws_data from 'data/prevention/suicide_laws'
import country_features from 'data/geo/countries.json'

const SuicideLawsChoropleth = ( props: any ) => {
    return (<ResponsiveChoropleth
        data={suicde_laws_data}
        features={country_features.features}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors="nivo"
        domain={[ 0, 1 ]}
        unknownColor="#666666"
        label="properties.name"
        // valueFormat=".2s"
        projectionTranslation={[ 0.5, 0.5 ]}
        projectionRotation={[ 0, 0, 0 ]}
        enableGraticule={true}
        graticuleLineColor="#dddddd"
        borderWidth={0.5}
        borderColor="#152538"
    />)
};

export default SuicideLawsChoropleth;