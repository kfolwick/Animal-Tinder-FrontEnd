import React, {Component} from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';


const Home = () => {
        let formStyle = {
            'border': '50px solid #272B30',
            'background': '#17a2b8',
            'color': "white"
        };
        let submitButton = {
            'background': 'white',
            'color': 'black',
        }
        let formHead = {
            'text-align': 'center'
        };
        let jumbo ={
            'text-align': 'center'
        }



        return(
            <div>
                <div className="jumbotron" style={jumbo}>
                  <h1 className="display-3">Adoptable</h1>
                  <p className="lead">Meet your purrfect furry friend!</p>
                  <hr className="my-4"/>
                  {/*<p>It uses utility classes for typography and spacing to space content out within the larger container.</p>*/}
                  {/*<p className="lead">
                    <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                  </p>*/}
                </div>

                <h1 className="display-3" style={formHead}>Sign up here!</h1>

                <form style={formStyle}>
                    <div className="form-group">
                      <label className="col-form-label col-form-label-lg" for="inputLarge">Name</label>
                      <input className="form-control form-control-lg" type="text" id="inputLarge" />
                    </div>

                    <div className="form-group">
                      <label className="col-form-label col-form-label-lg" for="inputLarge">Age</label>
                      <input className="form-control form-control-lg" type="text"  id="inputLarge"/>
                    </div>

                    <fieldset className="form-group">
                      <label className="col-form-label col-form-label-lg" for="inputLarge">Size</label>
                      <br/>
                      <label for="customRange1">Smol Boi or Chonky Boi</label>
                      <input type="range" className="custom-range" id="customRange1"/>
                    </fieldset>

                    <div class="form-group">
                      <label className="col-form-label col-form-label-lg" for="inputLarge">A lil about me!</label>
                      <textarea class="form-control" id="exampleTextarea" rows="3"></textarea>
                    </div>

                    <div class="form-group">
                      <label for="exampleInputFile">Profile Picture</label>
                      <input type="file" class="form-control-file" id="exampleInputFile" aria-describedby="fileHelp"/>
                    </div>

                    <fieldset>
                         <button style={submitButton} type="submit" className="btn btn-primary">Submit</button>
                    </fieldset>

                </form>
            </div>
        )
    }
// }


export default Home;
