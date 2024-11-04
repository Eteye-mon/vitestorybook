// eslint-disable-next-line no-unused-vars
import React from 'react'
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
function Button({label, backgroundColor="red", size="md", onClick}) {
    let scale = 1
    if(size == "sm") scale=0.75;
    if(size == "lg") scale=1.5;
    const style = {
        backgroundColor,
        padding:`${scale * 0.5}rem ${scale * 1}rem`,
        border:"none"
    }
  return (
    <Button onClick={onClick} style={style}>
        {label}
    </Button>
  )
}

Button.PropTypes = {
    label: PropTypes.string,
    backgroundColor: PropTypes.string,
    size: PropTypes.oneOf(["sm","md","lg"]),
    onClick: PropTypes.func
}

export default Button