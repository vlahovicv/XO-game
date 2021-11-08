import React, { useEffect, useState } from 'react'
import { calculateWinner } from '../../helper'
import Board from './Board'
import io from 'socket.io-client'

const socket = io.connect('http://localhost:3001', {
    withCredentials: true,
    transport: ['websocket', 'polling', 'flashsocket']
})

const Game = () => {
    const [history, setHistory] = useState([Array(9).fill(null)])
    const [newHistory, setNewHistory] = useState([Array(9).fill(null)])
    const [stepNumber, setStepNumber] = useState(0)
    const [newStepNumber, setNewStepNumber] = useState(0)
    const [xIsNext, setXisNext] = useState(true)
    const [square, setSquare] = useState([Array(9).fill(null)])
    const winner = calculateWinner(square)
    const xO = xIsNext ? "X" : "O"

    useEffect(() => {
        socket.emit('move', {history, stepNumber, xIsNext})
        socket.on('move', (hstr) =>{
            setNewHistory(hstr.history)
            setNewStepNumber(hstr.stepNumber)
            setXisNext(hstr.xIsNext)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [history, stepNumber])

    useEffect(() => {
        setSquare(newHistory[newStepNumber])
    }, [history, newHistory, newStepNumber]) 

    const handleClick = (i) => {
        const historyPoint = newHistory.slice(0, stepNumber + 1);
        const current = historyPoint[stepNumber];
        const squares = [...current]
        if(winner || squares[i]) {
            return;
        }
        squares[i] = xO;
        setHistory([...historyPoint, squares])
        setNewHistory([...historyPoint, squares])
        setStepNumber(historyPoint.length)
        setXisNext(!xIsNext)
    }
    const jumpTo = (step) => {
        setStepNumber(step)
        setXisNext(step % 2 === 0)
    }
    const renderMoves = () => {
        newHistory.map((_step, move) => {
            const destination = move ? `Go to move #${move}` : 'Go to start'
            return(
                <li key={move}>
                    <button onClick={() => jumpTo(move)}>{destination}</button>
                </li>
            )
        })
    }
    //template za disable play:
    /**
     if(user1 && xIsNext)
        class disabled..
    if (user2 && !xIsNext)
        class disabled    
    implementirati user1 i user2 logiku
    */

    //ADD LOBBY ID
    return(
        <React.Fragment>
            <h1>XO game</h1>
            <h2>LOBBY ID</h2>
            <Board squares={square} onClick={handleClick} />
            <div className='info-wrapper'>
                <div>
                    <h3>History</h3>
                    {renderMoves()}
                </div>
                <h3>{winner ? 'Winner' + winner : 'Next player' + xO}</h3>
            </div>
        </React.Fragment>
    )
}

export default Game