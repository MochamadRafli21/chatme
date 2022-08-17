import './App.css';

function App() {
  return (
    <div className='w-screen h-screen'>
      <div className='border-2 border-indigo-600 p-12'>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default App;
