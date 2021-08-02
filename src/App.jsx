import { useState } from 'react'
import './App.css'
import { TextEditor } from './components'
import { CustomEditor } from './components/CustomEditor'
import { bold, code, italic, strikeThrough, underline } from './img'

function App() {

  const [editor, setEditor] = useState()

  const getEditor = (val) => setEditor(val)

  return (
    <div className="App">

      <div className="wrapper">
        <div className="styleText">
          <img src={bold} alt="bold" title="Ctrl + B" 
            onClick={event => {
              event.preventDefault()
              CustomEditor.toggleBoldMark(editor)
            }}
          />
          <img src={italic} alt="italic" title="Ctrl + I" 
            onClick={event => {
              event.preventDefault()
              CustomEditor.toggleItalicMark(editor)
            }}
          />
          <img src={underline} alt="underline" title="Ctrl + U" 
            onClick={event => {
              event.preventDefault()
              CustomEditor.toggleUnderlineMark(editor)
            }}
          />
          <img src={strikeThrough} alt="strikeThrough" title="Ctrl + K" 
            onClick={event => {
              event.preventDefault()
              CustomEditor.toggleStrikethroughMark(editor)
            }}
          />
          <img src={code} alt="code" title="Ctrl + `" 
            onClick={event => {
              event.preventDefault()
              CustomEditor.toggleCodeBlock(editor)
            }}
          />
        </div>

        <div className="text">
          <TextEditor getEditor={getEditor} />
        </div>

      </div>
    </div>
  );
}

export default App
