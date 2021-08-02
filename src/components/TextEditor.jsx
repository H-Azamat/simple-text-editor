import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { createEditor } from 'slate'
import { Slate, withReact, Editable } from 'slate-react'
import { Leaf } from './Leaf'
import { CodeElement } from './CodeElement'
import { DefaultElement } from './DefaultElement'
import { CustomEditor } from './CustomEditor'

export const TextEditor = ({ getEditor }) => {

    const existingValue = JSON.parse(localStorage.getItem('content'))

    const editor = useMemo(() => withReact(createEditor()), [])
    const [value, setValue] = useState(existingValue || [
        {
            type: 'paragraph',
            children: [{ text: "Введите текст" }]
        }
    ])

    const renderElement = useCallback(props => {
        switch (props.element.type) {
            case 'code':
                return <CodeElement {...props} />
            default:
                return <DefaultElement {...props} />
        }
    }, [])

    const renderLeaf = useCallback(props => {
        return <Leaf {...props} />
      }, [])

    const events = (e) => {
        if(!e.ctrlKey){
            return 
        }

        switch (e.key) {

            case '`': {
                e.preventDefault()
                CustomEditor.toggleCodeBlock(editor)
                break
            }

            case 'b': {
                e.preventDefault()
                CustomEditor.toggleBoldMark(editor)
                break
            }

            case 'i': {
                e.preventDefault()
                CustomEditor.toggleItalicMark(editor)
                break
            }

            case 'u': {
                e.preventDefault()
                CustomEditor.toggleUnderlineMark(editor)
                break
            }

            case 'k': {
                e.preventDefault()
                CustomEditor.toggleStrikethroughMark(editor)
                break
            }

        }
    } 

    useEffect(() => {
        console.log(editor)
        getEditor(editor)
    }, [])

    return(
        <Slate
            editor={ editor }
            value={ value }
            onChange={ newValue => {
                const content = JSON.stringify(newValue)
                localStorage.setItem('content', content)
                setValue(newValue)
            }}
        >
            <Editable 
                renderElement={renderElement}
                renderLeaf={renderLeaf}
                onKeyDown={events}
            />
        </Slate>
    )
}