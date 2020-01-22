import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import Pets from './pages/Pets'
import pets from './pages/petinfo'
import PetsShow from './pages/Petshow'


class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            pets: pets
        }
    }
    render(){
        return(
            <Router>
            <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <a className="navbar-brand" href="/home">Adoptable</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarColor02">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="/home">Sign Up <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/pets">Find Furends</a>
                  </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                  <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
                  <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                </form>
              </div>
            </nav>
            </div>
                <div>
                    <Switch>
                        <Route path="/home">
                            <Home />
                        </Route>
                        <Route path="/pets">
                            <Pets />
                        </Route>
                        <Route path="/pet/:id" component={PetsShow} />
                    </Switch>
                </div>
            </Router>

        )
    }
}

export default App;
