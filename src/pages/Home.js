import React, {Component} from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';


class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            success: false,
            form: {
                name: '',
                age: '',
                size: '',
                enjoys: ''
            },
        }
    }

    handleChange = (e) => {
        const { form } = this.state
        form[e.target.name] = e.target.value
        this.setState({form: form})
        console.log(this.state.form);
    }

    handleSubmit = () => {
        console.log("submit",this.state.form);
        this.props.createDog(this.state.form)
        .then(()=>{
            this.setState({success: true})
        })
    }
    render(){
        let { form } = this.state
        return(
            <div>
                <div className="jumbotron">
                  <h1 className="display-3">Adoptable</h1>
                  <p className="lead">Meet your purrfect furry friend!</p>
                  <hr className="my-4"/>
                  {/*<p>It uses utility classes for typography and spacing to space content out within the larger container.</p>*/}
                  {/*<p className="lead">
                    <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                  </p>*/}
                </div>

                <h1 className="display-3">Sign up here!</h1>

                <form>
                    <div className="form-group">
                      <label className="col-form-label col-form-label-lg" for="inputLarge">What's my name?</label>
                      <input name="name" value={form.name} onChange={this.handleChange} className="form-control form-control-lg" type="text" id="inputLarge" />
                    </div>

                    <div className="form-group">
                      <label className="col-form-label col-form-label-lg" for="inputLarge">What's my age?</label>
                      <input name="age" value={form.age} onChange={this.handleChange} className="form-control form-control-lg" type="text"  id="inputLarge"/>
                    </div>

                    <fieldset className="form-group">
                      <label className="col-form-label col-form-label-lg" for="inputLarge">How big am I?</label>
                      <br/>
                      <label for="customRange1">Smol Boi or Chonky Boi</label>
                      <input name="size" value={form.size} onChange={this.handleChange} type="range" className="custom-range" id="customRange1"/>
                    </fieldset>

                    <div class="form-group">
                      <label className="col-form-label col-form-label-lg" for="inputLarge">What do I enjoy?</label>
                      <textarea onChange={this.handleChange} name="enjoys" value={form.enjoys} class="form-control" id="exampleTextarea" rows="3"></textarea>
                    </div>

                    <div class="form-group">
                      <label for="exampleInputFile">Profile Picture</label>
                      <input onChange={this.handleChange} type="file" class="form-control-file" id="exampleInputFile" aria-describedby="fileHelp"/>
                    </div>

                    <fieldset>
                         <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                    </fieldset>

                </form>
                {/*this.state.success &&
                    <Redirect to ="/dogs" />
                */}
            </div>
        )
    }
}


export default Home;
