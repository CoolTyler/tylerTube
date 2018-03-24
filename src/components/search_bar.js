import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };  // Constructor is the only place we'll use this.state
    }

    render() {
        return (
            <div className="search-bar">
                <input 
                value={this.state.term}
                onChange={event=> this.onInputChange(event.target.value)} />
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;