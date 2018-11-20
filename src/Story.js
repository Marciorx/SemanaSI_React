import React from 'react'
import Main from './Main'

export default (props) => (
<div className="row">
    <div className="col s12 m12">
        <div className="card indigo darken-3">
            <div className="card-content white-text">
                <span className="card-title">{props.title}</span>
                <p>{props.description}<span className="badge white">{props.points} pontos</span></p>
            </div>
            <div className="card-action">
                <a className="right" href="#">Exibir Estória</a>
                <br />
            </div>
        </div>
    </div>
</div>

)

