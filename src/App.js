import React, { useState, useEffect } from 'react';
import FormattedTime from './FormattedTime/FormattedTime';
import styles from './App.module.scss';

function App() {
    const [time, setTime] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    const startTimer = () => {
        if (!intervalId) {
            const id = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1);
            setIntervalId(id);
        }
    };

    const stopTimer = () => {
        if (intervalId) {
            clearInterval(intervalId);
            setIntervalId(null);
        }
    };

    const resetTimer = () => {
        stopTimer();
        setTime(0);
    };

    useEffect(() => {
        return () => {
            if (intervalId) clearInterval(intervalId);
        };
    }, [intervalId]);

    return (
        <div className={styles.appContainer}>
            <FormattedTime time={time} />
            <div className={styles.buttonContainer}>
                <button className={styles.generalButton} onClick={startTimer}>Start</button>
                <button className={styles.generalButton} onClick={stopTimer}>Stop</button>
                <button className={styles.generalButton} onClick={resetTimer}>Reset</button>
            </div>
        </div>
    );
}

export default App;
