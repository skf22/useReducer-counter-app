import React, { Fragment, useReducer } from "react";
import "./App.css";

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const increment = () => {
    dispatch({ type: ACTIONS.INCREMENT });
  };

  const decrement = () => {
    dispatch({ type: ACTIONS.DECREMENT });
  };

  return (
    <Fragment>
      <h1>UseReducer Tutorial</h1>
      <div className="counter-container">
        <button onClick={decrement}>-</button>
        <h3
          className={
            state.count === 0
              ? "neutral"
              : state.count > 0
              ? "positive"
              : "negative"
          }
        >
          {state.count}
        </h3>
        <button onClick={increment}>+</button>
      </div>
    </Fragment>
  );
};

export default App;
