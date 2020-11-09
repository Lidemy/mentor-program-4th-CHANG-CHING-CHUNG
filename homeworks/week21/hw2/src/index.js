import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import calculateWinner from "./functions/calculateWinner";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";

function Square({ value, winner, onClick }) {
  let chess;
  if (value.mark === "X") {
    chess = (
      <div className={"black "}>
        {winner ? <span class="white-step">{value.step}</span> : null}
      </div>
    );
  } else if (value.mark === "O") {
    chess = (
      <div className={"white "}>
        {winner ? <span class="black-step">{value.step}</span> : null}
      </div>
    );
  }
  return (
    <button className="square" onClick={() => onClick()}>
      {chess}
    </button>
  );
}

function Board(props) {
  function renderSquare(rowNum, i) {
    return (
      <Square
        value={props.squares[rowNum][i]}
        winner={props.winner}
        onClick={() => props.onClick(rowNum, i)}
      />
    );
  }

  function renderRows() {
    const rows = [];
    for (let i = 0; i < 19; i++) {
      const col = [];
      for (let j = 0; j < 19; j++) {
        col.push(renderSquare(i, j));
      }
      rows.push(<div className="board-row">{col}</div>);
    }
    return rows;
  }

  return <div>{renderRows()}</div>;
}
let x = 0,
  y = 0;

function Game() {
  const [state, setState] = useState({
    history: [
      {
        squares: Array(19).fill(Array(19).fill({ mark: "", step: 0 })),
      },
    ],
    stepNumber: 0,
    xIsNet: true,
  });
  function handkeClick(j, i) {
    const history = state.history.slice(0, state.stepNumber + 1);
    const current = history[history.length - 1];
    const newSquares = JSON.parse(JSON.stringify(current.squares));
    if (winner || newSquares[j][i].mark) {
      return;
    }
    newSquares[j][i] = {
      mark: state.xIsNet ? "X" : "O",
      step: state.stepNumber + 1,
    };
    x = j;
    y = i;
    setState({
      history: history.concat([
        {
          squares: newSquares,
        },
      ]),
      stepNumber: history.length,
      xIsNet: !state.xIsNet,
    });
  }

  function jumpTo(step) {
    setState({
      history: state.history.slice(0, step + 1),
      stepNumber: step,
      xIsNet: step % 2 === 0,
    });
  }

  const history = state.history;
  const current = history[state.stepNumber];
  const winner = calculateWinner(current.squares, x, y);
  const moves = history.map((step, move) => {
    const desc = move ? "回到第 #" + move + " 步" : "回到起始點";
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  function saveBoardStatus() {
    const today = new Date();
    const formattedToday = today.toISOString().slice(0, 10);
    html2canvas(document.querySelector(".game-board")).then((canvas) => {
      const myCanvas = canvas;
      myCanvas.toBlob((blob) => {
        saveAs(blob, `${formattedToday + status}.png`);
      });
    });
  }

  const saveBtn = (
    <li key={state.stepNumber}>
      <button
        onClick={() => {
          saveBoardStatus();
        }}
      >
        儲存棋譜
      </button>
    </li>
  );
  let status;
  if (winner) {
    const winnerMark = state.xIsNet === false ? "黑" : "白";
    status = "贏家: " + winnerMark;
  } else {
    status = "下一個玩家: " + (state.xIsNet ? "黑" : "白");
  }

  return (
    <div className="container">
      <header className="title">
        <h3>Gomoku</h3>
      </header>
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            winner={winner}
            onClick={(rowNum, i) => handkeClick(rowNum, i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
        {winner ? (
          <div className="game-info">
            <ul>{saveBtn}</ul>
          </div>
        ) : null}
      </div>
      <footer>
        <div>Made By John ❤</div>
      </footer>
    </div>
  );
}

ReactDOM.render(<Game />, document.getElementById("root"));
