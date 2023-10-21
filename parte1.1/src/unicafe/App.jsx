import { useState } from 'react';
import '../App.css'

const Header = ({ titulo }) => (<h1>{titulo}</h1>);

const Subtitle = ({ text }) => (<h2>{text}</h2>);

const Button = ({ handleClick, text }) => (<button onClick={handleClick}>{text}</button>);

const Display = ({ text, calificacio }) => (<p>{text}: {calificacio}</p>);

const Statistics = ({ text, statistic, porncentaje }) => (<p>{text}: {statistic}{porncentaje} </p>)

const StatisticsDisplay = ({ ShowStatistics, good, neutral, bad }) => {
    if (!ShowStatistics) {
        return <p>No feedback given</p>
    } else {
        // Calculo total de comentarios
        const totalComentarios = good + neutral + bad;

        // Calculo de la puntuacion promedio
        const averageScore = ((good - bad) / totalComentarios || 0).toFixed(1);

        // Calculo de porcentajes de comentarios positivos
        const positivePorcentage = ((good / totalComentarios) * 100 || 0).toFixed(1);

        return (
            <div>
                <Display text={'good'} calificacio={good} />
                <Display text={'neutral'} calificacio={neutral} />
                <Display text={'bad'} calificacio={bad} />
    
    
                <Statistics text={'Total Comments'} statistic={totalComentarios} />
                <Statistics text={'Average Comments'} statistic={averageScore} />
                <Statistics text={'Positive comments'} statistic={positivePorcentage} porncentaje={'%'}/>
            </div>
        );
    }

}


const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const [ShowStatistics, setShowStatistics] = useState(false);

    // Funciones Para eventoos de los Botones
    const valueGood = () =>{ 
        setGood(good + 1);
        setShowStatistics(true)
    };
    const valueNeutral = () => {
        setNeutral(neutral + 1);
        setShowStatistics(true);
    };
    const valueBad = () => {
        setBad(bad + 1);
        setShowStatistics(true)
    };



    return (
        <div className='card'>
            <Header titulo={'Give Feedback'} />

            <Button handleClick={valueGood} text={'good'} />
            <Button handleClick={valueNeutral} text={'neutral'} />
            <Button handleClick={valueBad} text={'bad'} />

            <Subtitle text={'Statistics'} />

            <StatisticsDisplay
                ShowStatistics={ShowStatistics}
                good={good}
                neutral={neutral}
                bad={bad}
            />
        </div>
    );
}

export default App;
