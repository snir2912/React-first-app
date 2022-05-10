import React from "react";
import './main.css';
import me from './me.png'

let idName = 'snir'
let idPhone = '052-6281514'
let user = 'snir'

function Id_card(props){
    const {skills} = props;
    let skilsArr = []
        for (let i = 0; i < skills.length; i++) {
            skilsArr.push(
                <div key={i}>
                    <p>
                        {skills[i]}
                    </p>
                </div>
            )
        }

    return(
        <div className="container">
            <h1>{user} card</h1>
            <div className="propsContainer">
                <div className="idProperties">
                    <div><p><span>name: </span>{idName}</p></div>
                    <div><p><span>phone: </span>{idPhone}</p></div>
                </div>
                <div className="imgContainer">
                    <img src={me} />
                </div>
            </div>
            
            <div className="front-end-skils">
                <h2>my skills</h2>
                <p>{skilsArr}</p>
            </div>
        </div>
    )}

export default Id_card;