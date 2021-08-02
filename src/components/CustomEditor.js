import { Editor, Text, Transforms } from "slate"

export const CustomEditor = {
    isBoldMarkActive(editor) {
      const [match] = Editor.nodes(editor, {
        match: n => n.bold === true,
        universal: true,
      })
  
      return !!match
    },

    isItalicMarkActive(editor) {
      const [match] = Editor.nodes(editor, {
        match: n => n.italic === true,
        universal: true,
      })
  
      return !!match
    },

    isUnderlineMarkActive(editor) {
      const [match] = Editor.nodes(editor, {
        match: n => n.underline === true,
        universal: true,
      })
  
      return !!match
    },

    isStrikethroughMarkActive(editor) {
      const [match] = Editor.nodes(editor, {
        match: n => n.strikethrough === true,
        universal: true,
      })
  
      return !!match
    },
  
    isCodeBlockActive(editor) {
      const [match] = Editor.nodes(editor, {
        match: n => n.type === 'code',
      })
  
      return !!match
    },
  
    toggleBoldMark(editor) {
      const isActive = CustomEditor.isBoldMarkActive(editor)
      Transforms.setNodes(
        editor,
        { bold: isActive ? null : true },
        { match: n => Text.isText(n), split: true }
      )
    },
  
    toggleCodeBlock(editor) {
      const isActive = CustomEditor.isCodeBlockActive(editor)
      Transforms.setNodes(
        editor,
        { type: isActive ? null : 'code' },
        { match: n => Editor.isBlock(editor, n) }
      )
    },

    toggleItalicMark(editor) {
      const isActive = CustomEditor.isItalicMarkActive(editor)
      Transforms.setNodes(
        editor,
        { italic: isActive ? null : true },
        { match: n => Text.isText(n), split: true }
      )
    },

    toggleUnderlineMark(editor) {
      const isActive = CustomEditor.isUnderlineMarkActive(editor)
      Transforms.setNodes(
        editor,
        { underline: isActive ? null : true },
        { match: n => Text.isText(n), split: true }
      )
    },

    toggleStrikethroughMark(editor) {
      const isActive = CustomEditor.isStrikethroughMarkActive(editor)
      Transforms.setNodes(
        editor,
        { strikethrough: isActive ? null : true },
        { match: n => Text.isText(n), split: true }
      )
    },
  }