import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import Dogs from './pages/Dogs'
{/*import DogShow from './pages/Dogshow'*/}


class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            dogs: []
        }
        this.getDogs()
    }

    componentWillMount(){
        this.getDogs();
    }

    getDogs = () =>{
        fetch("http://localhost:3000/dogs")
        .then((response)=>{
            if(response.status === 200){
                return(response.json())
            }
        })
        .then((dogsArray)=>{
            this.setState({dogs: dogsArray})
        })
    }

    createDog = (dog)=>{
        return fetch ('http://localhost:3000/dogs',{
            body:JSON.stringify(dog),
            headers:{
                'Content-Type':'application/json'
            },
            method:"POST"
    })
    .then((response)=>{
        if(response.ok){
            return this.getDogs()
        }
    })
}


    render(){
        return(
            <div>
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
                                <a className="nav-link" href="/dogs">Find Furends</a>
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
                            <Route exact path="/dogs" render={(props)=> <Dogs dogs={this.state.dogs}/> } />
                            <Route exact path="/newdog" render={(props) => < Home onSubmit={this.createDog} />} />
                            {/*<Route exact path="/dog/:id" component={DogShow} />*/}
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}

export default App;
