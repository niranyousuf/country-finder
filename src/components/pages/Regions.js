import React, { Fragment} from 'react';
import SearchRegion from '../layout/SearchRegion';
import RegionList from '../country/RegionList';

const Regions = () => {
    return (
        <Fragment>
            <SearchRegion/>
            <RegionList/>
        </Fragment>
    )
}

export default Regions;
