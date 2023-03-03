import logo from './logo.svg';
import './App.css';
import { TextHello } from './components/texthello';
import { SecondTextHello } from './components/secondtext';
import { CountButtons } from './components/countbuttons';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TextHello message="Hello, world!"></TextHello>
        <SecondTextHello>Hello, React!</SecondTextHello>
        <img src={logo} className="App-logo" alt="logo" />
        <CountButtons/>
      </header>
    </div>
  );
}

export default App;
