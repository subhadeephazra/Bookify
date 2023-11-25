import React from 'react';
import ReactDOM from 'react-dom';
import Interface from "./components/Interface.js"
import "./App.css"

const App = () => {
  return (
    <div>
      <Interface />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
