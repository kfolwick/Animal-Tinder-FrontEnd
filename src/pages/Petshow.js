import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import pets from './petinfo'

class PetsShow extends Component {
    constructor(props){
        super(props)

        this.state={
            petId: props.match.params.id
        }
    }

    componentDidUpdate(prevProps){

        if(this.props.match.params.id != prevProps.match.params.id){
            this.setState({petId: this.props.match.params.id})
        }
    }

    render(){
        const{ petId } = this.state
        const pet = pets.find((p)=> p.id == petId)

        return(
            <div>
                { pet &&
                    <div>
                        <h1>{pet.name}</h1>
                        <p>{pet.age}</p>
                        <p>{pet.size}</p>
                        <p>{pet.enjoys}</p>
                        <img src={pet.img} />
                    </div>
                }
            </div>
        )
    }
}

export default PetsShow
