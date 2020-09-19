import React,{Component} from "react";
import {BrowserRouter} from "react-router-dom";
import RouterView from './router/RouterView'
import config from './router/routerConfig';

export default class App extends Component{
    render() {
        return(
            <div className="App">
                <BrowserRouter>
                    <RouterView routes={config}></RouterView>
                </BrowserRouter>
            </div>
        );
    }
}
