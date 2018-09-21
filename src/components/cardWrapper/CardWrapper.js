import React, { Component } from 'react';

//Component
import Card from '../card/Card';



class CardWrapper extends Component {

    constructor (props) {
        super(props);
        this.getRoster();
        this.state = {
            json: null
        }
    }

    getRoster () {

        let self = this;
        const xhr = new XMLHttpRequest();
        const method = 'Get';
        const url = 'https://cors.io/?https://data.nba.net/prod/v1/allstar/2017/AS_roster.json';

        xhr.open(method, url);
        xhr.send();


        xhr.onreadystatechange = function () {
            if (this.readyState !== 4) {
                return false;
            } else {

                let response = JSON.parse(this.responseText);

                if (response) {
                    let players = response.sportsContent.roster[0].players['1610616834'];

                    self.setState({
                        json: players
                    });
                    return players;
                }
            }

        };

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
            if (item.firstName.toLowerCase().includes(text) || item.lastName.toLowerCase().includes(text)) return true;
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
