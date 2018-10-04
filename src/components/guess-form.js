import React from 'react';

import './guess-form.css';

export default class GuessForm extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            inputValue: ''
        }
    }

    submitGuess(event){
        event.preventDefault();
        console.log(this.state.inputValue);
        this.props.submitGuess(this.state.inputValue);
        this.setState({
            inputValue: ''
        });
    }
    render(){
        return (
            <form onSubmit={e => this.submitGuess(e)}>
                <input type="text" name="userGuess" id="userGuess"
                    className="text" maxLength="3" autoComplete="off"
                    placeholder="Enter your Guess" required 
                    value={this.state.inputValue} onChange={e => this.setState({inputValue: e.target.value})}/>
                <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
            </form>
        );
    }
};

