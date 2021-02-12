import React, { useState, useEffect } from 'react';
import './styles.css';

const RenderScore = (props) => {

    return (
        <div id="score-container">
            <span>Score: {props.playerScore}</span>
            <span>High Score: {props.playerHighScore} </span>
        </div>
    )
};

export default RenderScore;