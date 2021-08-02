export const Leaf = props => {
  console.log(props.leaf)
  
    return (
      <span
        {...props.attributes}
        style={{ fontWeight: props.leaf.bold ? 'bold' : 'normal', fontStyle: props.leaf.italic ? 'italic' : 'normal', textDecoration: props.leaf.underline ? 'underline' :  props.leaf.strikethrough ? 'line-through' : 'none', }}
      >
        {props.children}
      </span>
    )
  }