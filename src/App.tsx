function App() {
  const a = (param: number | string) => {
    console.log(param)
  }

  a({ a: 1 })
  return (
    <div className="App">
      <header className="App-header">
        <p>정현우의 React Boilerplate</p>
      </header>
    </div>
  )
}

export default App
