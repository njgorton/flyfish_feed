import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    onInputChange = event => {
        this.setState({ term: event.target.value });
    };

    onFormSubmit = event => {
        event.preventDefault();
        this.props.onTermSubmit(this.state.term);
    };

    render() {
        return (
            <div className="searchBar">
                <form onSubmit={this.onFormSubmit} className="searchBar__form">
                    <fieldset className="searchBar__fieldset">
                        <input
                            className="searchBar__input"
                            aria-label="Search Videos"
                            placeholder="Search Videos..."
                            type="text"
                            value={this.state.term}
                            onChange={this.onInputChange}
                        />
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default SearchBar;