import React from 'react';
import {view as Filter} from './filter';
import {view as Data} from './datas';

function MyDraftApp(toggleFilter) {
    return (
        <div>
            <Filter/>
            <Data/>
        </div>
    );
}

export default MyDraftApp;