import React, { Component } from 'react';

//Component
import Card from '../card/Card';

class CardWrapper extends Component {

    constructor (props) {
        super(props);
        this.state = {
            json: null
        }
    }

    componentDidMount () {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(response => {
            this.setState({
                json: response
            });
        })
    }

    renderCards () {
        const json = this.filterCards();
        let arr = [];
        arr = json.map((item, i) => {
            return <Card data={item} key={i}/>
        });
        return arr;
    }

    filterCards () {
        const text = this.props.text;
        let json = this.state.json;
        let newJson;

        newJson = json.filter(function(item) {
            if (item.name.toLowerCase().includes(text)) return true;
        });

        if (newJson.length) {
            return newJson
        } else {
            return json;
        }
    }

    render () {
        if (this.state.json){
            return (
                <div>
                    {this.renderCards()}
                </div>
            )} else {
                return <div>Loading...</div>
        }
    }
}

export default CardWrapper;
