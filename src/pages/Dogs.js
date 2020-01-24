import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

const Dogs = (props) => {
    let dogImage = {
        'width': '300px',
        'height':'300px',
        'image-align': 'center'
    };
    let cardSpec = {
        'display': 'block',
        'width': '500px',
        'height':'flex',
        'font-size': '30px',
        'text-align': 'center',
    };
    let cardHead = {
        'background': '#5bc0de',
        'color': '#3A3F44'
    }
    let dogsHead = {
        'text-align': 'center'
    }
        return(
            <div>
                <h2 style={dogsHead}>All of the Furry Friends!</h2>

                <div>
                    {props.dogs.map((dog, index) =>{
                        return(
                        <div className="card border-info mb-3"  style= {cardSpec} key={index}>
                            <div className="card-header" style={cardHead}>{dog.name}</div>
                            <div className="card-body">
                            <p class="card-text">{dog.name} is {dog.age} years old</p>
                            <p class="card-text">{dog.name} is a {dog.size} doggo</p>
                            <p class="card-text">{dog.name} enjoys: {dog.enjoys}</p>

                                {/*}<Link to={`/dog/${dog.id}`}>
                                    <img src={dog.img} style= {dogImage} />
                                </Link>*/}
                            </div>
                        </div>
                        )

                    })}
                </div>
            </div>
        )
}

export default Dogs;
