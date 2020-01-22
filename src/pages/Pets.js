import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import pets from './petinfo'

const Pets = () => {
    let petImage = {
        'width': '300px',
        'height':'300px',
        'image-align': 'center'
    };
    let cardSpec = {
        'display': 'block',
        'width': '350px',
        'height':'400px',
        'font-size': '30px',
        'text-align': 'center',
    };
            return(
                <div>
                    <h2>Pets!</h2>

                    <div>
                    {pets.map((pet) =>
                        <div className="card border-info mb-3"  style= {cardSpec}>
                          <div className="card-header">{pet.name}</div>
                          <div className="card-body">
                          <Link to={`/pet/${pet.id}`}>
                              <img src={pet.img} style= {petImage} />
                          </Link>
                          </div>
                    </div>
    )}
    </div>
    </div>
)
}

export default Pets;
