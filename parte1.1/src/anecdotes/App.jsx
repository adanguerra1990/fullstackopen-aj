import { useState } from 'react';
import '../App.css';

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const Tittle = ({ titulo }) => (<h2>{titulo}</h2>)

const AnecdotesProps = ({ anecdotes }) => {

    const [selected, setSelected] = useState(0);
    const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

    console.log(votes)

    const generateRandomAnecdote = () => {
        const randomIndex = Math.floor(Math.random() * anecdotes.length);
        setSelected(randomIndex);
    }

    const handleVote = () => {
        const newVotes = [...votes];
        newVotes[selected] += 1;
        setVotes(newVotes);
    };
    

    // const getMostVotedAnecdote = () => {
    //     let maxVotes = 0;
    //     let mostVotedIndex = 0;

    //     for (let index in votes) {
    //         if (votes[index] > maxVotes) {
    //             maxVotes = votes[index];
    //             mostVotedIndex = index;
    //         }
    //     }
    //     return mostVotedIndex;
    // };

    const mostVotedAnecdoteIndex = votes.indexOf(Math.max(...votes));

    return (
        <div>
            <Tittle titulo={'Anecdote of the day'} />
            <div>
                <p>{anecdotes[selected]}</p>
                <p>Votos: {votes[selected]}</p>
            </div>

            <button onClick={generateRandomAnecdote}>Next anecdote</button>
            <button onClick={handleVote}>Votar</button>

            <Tittle titulo={'Anecdote with most votes'} />
            <div>
                <p>{anecdotes[mostVotedAnecdoteIndex]}</p>
                <p>votos:{votes[mostVotedAnecdoteIndex]}</p>
            </div>
        </div>
    )
}

const App = () => {

    return (
        <div className='card'>
            <AnecdotesProps anecdotes={anecdotes} />
        </div>
    );
}

export default App;
