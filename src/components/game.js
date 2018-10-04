import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';
import InfoModal from './info-modal';

export default class Game extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            answer: Math.floor(Math.random()*101),
            guesses: [],
            feedback: 'Submit a guess',
            showInfo: false
        };
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

    toggleInfo(){
        console.log('toggleinfo is running');
        this.setState(prevState => {
            return {
                showInfo: !prevState.showInfo
            };
        });
    }

    render(){
        const { guesses, feedback, showInfo } = this.state;
        const count = guesses.length;

        return (
            <div>
                {showInfo ? <InfoModal closeInfo={() => this.toggleInfo()}/> : null}
                <Header resetGame={() => this.resetGame()} openInfo={() => this.toggleInfo()}/>
                <GuessSection submitGuess={guess => this.submitGuess(guess)} feedback={feedback} />
                <GuessCount count={count} />
                <GuessList guesses={guesses} />
            </div>
        );
    }
}

