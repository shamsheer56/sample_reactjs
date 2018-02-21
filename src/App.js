import React, { Component } from 'react';
import Home from './Components/Home';
import { Switch, Route } from 'react-router-dom';
class App extends Component {

    /**
     *
     * @returns {XML}
     */
    render() {
        return (
            <div className="App">
                <div className="container">

                    <div className="row">
                        <div className="col-xs-9">
                            <Switch>
                                <Route path='/' component={Home}/>
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default App;