function App() {
  const numbers = Array.from(Array(36).keys());
  const listItems = numbers.map((number) => <div className="gridItem">{number}</div>);

  return (
    <div className="App">
      <h1>Map</h1>
      <div className="gridContainer">
          {listItems}
      </div>
      <h1>Information</h1>
      <p>Number of tiles: {numbers.length}</p>
    </div>
  );
}

export default App;
