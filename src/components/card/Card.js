import React, { Component } from 'react';
import './card.css';

class Card extends Component {

    render(props) {

        let name = this.props.data.firstName;
        let surname = this.props.data.lastName;
        let position = this.props.data.positionShort;

        return (
            <div className='card'>
                <div className='card__img'><img src='https://placehold.it/100x200/'/></div>
                <div>{name}</div>
                <div>{surname}</div>
                <div className='card__pos'>{position}</div>
            </div>
        )
    }
}

export default Card;