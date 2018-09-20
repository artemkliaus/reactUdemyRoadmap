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
        const length = json.length;
        const arr = [];
        for(let i = 0; i < length; i++) {
            arr.push(<Card data={json[i]} key={i}/>);
        }
        return arr;
    }

    filterCards () {
        const text = this.props.text;
        let json = this.state.json;
        let newJson;

        newJson = json.filter(function(item) {
            if (item.firstName.indexOf(text) > -1 || item.lastName.indexOf(text) > -1) {
                return true;
            }
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
