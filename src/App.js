import logo from './logo.svg';
import './App.css';
import useDoubleClick from './useDoubleClick';

function App() {
  const ref = useDoubleClick({
    onSingleClick: () => {
      console.log('single click');
    },
    onDoubleClick: () => {
      console.log('double click');
    },
    latency: 200,
  });

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
        <button
          ref={ref}
          style={{
            margin: '20px',
            borderRadius: '5px',
            padding: '10px 20px',
            outline: 'none',
            border: 'none',
            backgroundColor: 'teal',
            color: 'white',
            cursor: 'pointer',
          }}
        >
          Click me
        </button>
      </header>
    </div>
  );
}

export default App;
