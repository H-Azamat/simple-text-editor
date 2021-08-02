import './App.css'
import { TextEditor } from './components'
import { bold, code, italic, strikeThrough, underline } from './img'

function App() {
  return (
    <div className="App">

      <div className="wrapper">
        <div className="styleText">
          <img src={bold} alt="bold" title="Ctrl + B" />
          <img src={italic} alt="italic" title="Ctrl + I" />
          <img src={underline} alt="underline" title="Ctrl + U" />
          <img src={strikeThrough} alt="strikeThrough" title="Ctrl + K" />
          <img src={code} alt="code" title="Ctrl + `" />
        </div>

        <div className="text">
          <TextEditor />
        </div>

      </div>
    </div>
  );
}

export default App
