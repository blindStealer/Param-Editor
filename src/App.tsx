import React from 'react';
import {model, params} from "./Data";
import {ParamsEditor} from "./components/ParamsEditor/ParamsEditor";
import {StyledApp} from "./StyledEditor";


export class App extends React.Component{

    render() {
        return (
            <StyledApp>
                <ParamsEditor model={model} params={params}/>
            </StyledApp>
        )
    }
};

