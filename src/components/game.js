import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export default class Game extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            answer: Math.floor(Math.random()*101),
            guesses: [],
            feedback: 'Submit a guess'
        }
    }

    resetGame(){

        this.setState({
            answer: Math.floor(Math.random()*101),
            guesses: [],
            feedback: 'Submit a guess'
        });
    }

    submitGuess(guess){
        guess = Number(guess);

        if(!Number.isInteger(guess)){
            this.setState({
                feedback: 'Not a valid guess'
            });
            return;
        }

        const diff = Math.abs(guess - this.state.answer);
        let feedback;

        if(diff === 0){
            feedback = 'Correct!';
        } else if(diff < 5) {
            feedback = 'Hot';
        } else if(diff < 10){
            feedback = 'Warm';
        } else if(diff < 20){
            feedback = 'Cold';
        } else {
            feedback = 'Very cold';
        }

        this.setState(prevState => {
            return {
                guesses: prevState.guesses.concat(guess),
                feedback
            };
        });

    }

    render(){
        const { guesses, feedback } = this.state;
        const count = guesses.length;

        return (
            <div>
                <Header resetGame={() => this.resetGame()}/>
                <GuessSection submitGuess={guess => this.submitGuess(guess)} feedback={feedback} />
                <GuessCount count={count} />
                <GuessList guesses={guesses} />
            </div>
        );
    }
}

