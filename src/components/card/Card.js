import React, { Component } from 'react';
import './card.css';

class Card extends Component {

    render(props) {

        let name = this.props.data.name;
        let email = this.props.data.email;
        let position = this.props.data.positionShort;

        return (
            <div className='card bg-dark-green ba b--light-gray br2 grow'>
                <div className='card__img'><img src={`https://robohash.org/${name}?size=200x200`}/></div>
                <div>{name}</div>
                <div>{email}</div>
                <div className='card__pos'>{position}</div>
            </div>
        )
    }
}

export default Card;
