import React, { Component } from 'react';
import './searchPanel.css';


class SearchPanel extends Component {

    render() {

        return (
            <div>
                <input type='text'
                        className='search-panel'
                        placeholder='filter players...'
                        onChange={ (e)=> {this.props.inputHandler(e)}}/>
            </div>
        )
    }
}

export default SearchPanel;
