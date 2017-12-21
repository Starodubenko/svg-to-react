import React from 'react';
import { CustomFileReader } from '../../components';

import './Main.scss';

export class Main extends React.Component {

    render() {
        console.log('Main has ben rendered');
        return (
            <div>
                Main page 
                <CustomFileReader />      

                {/* <input id="file" name="myFile" type="file"/> */}
            </div>
        )
    }
}