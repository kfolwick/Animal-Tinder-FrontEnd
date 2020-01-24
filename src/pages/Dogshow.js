import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from 'app.js'

class DogShow extends Component {
    constructor(props){
        super(props)

        this.props={
            dogId: props.match.params.id
        }
    }

    componentDidUpdate(prevProps){

        if(this.props.match.params.id != prevProps.match.params.id){
            this.setState({dogId: this.props.match.params.id})
        }
    }

    render(){
        const{ dogId } = this.state
        const dog = dogs.find((d)=> d.id == dogId)

        return(
            <div>
                { dog &&
                    <div>
                        <h1>{dog.name}</h1>
                        <p>{dog.age}</p>
                        <p>{dog.size}</p>
                        <p>{dog.enjoys}</p>
                        <img src={dog.img} />
                    </div>
                }
            </div>
        )
    }
}

export default DogShow;
