import React, { useState, useEffect } from 'react';
import './styles.css';
import athletes from './../../athleteInfo';
import CreateCard from './../createCard';

const RenderCards = () => {  

    const row1 = [];
    const row2 = [];
    for(let i = 0; i <= 2; i++){
        row1.push(
            <div className="column"><CreateCard player = {athletes[i]} /> </div>
        );
    }

    for(let i = 3; i <= 5; i++){
        row1.push(
            <div className="column"><CreateCard player = {athletes[i]} /> </div>
        );
    }


    return (
        <div id="cards-container">
            <div className="row">
                {row1}  
            </div>

            <div className="row">
                {row2}
            </div>
        </div>
    )
};

export default RenderCards;
