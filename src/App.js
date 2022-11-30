import { useState } from "react";

function App() {
  const [test, setTest] = useState(1)
  return (
    <div className="App">
      <header className="App-header">
        <p onClick={() => setTest(test+1)}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          asdsad{test}
        </p>
      </header>
    </div>
  );
}

export default App;