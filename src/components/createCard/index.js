import React, { useState, useEffect } from 'react';
import './styles.css';

const CreateCard = (props) => {
    return (
        <div className="card">
            <img src={props.player.imgpath} />
            <div className="label-container">
                <h4>{props.player.name}</h4>
            </div>
        </div>
    )
};

export default CreateCard;
