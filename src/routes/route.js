import React from 'react'
import Home from '../components/home';
import { HashRouter, Route } from 'react-router-dom'

class route extends React.Component {


    render() {
        return (
            <HashRouter>
                <div>
                    <Route
                        path="/admin-dashboard"
                        render={(a) => {
                            return (<Home {...this.props} />)
                        }} />
                    <Route
                        exact
                        path="/"
                        render={(a) => {
                            return (<Home {...this.props} />)
                        }} />
                </div>
            </HashRouter>
        )
    }

}

export default route;