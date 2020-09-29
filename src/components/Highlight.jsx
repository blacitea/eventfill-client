import React from 'react';

import './Highlight.scss'

const Highlight = ({onClick, imageURL, name}) => {
  return (
    <figure className="highlight" onClick={onClick}>
      <img
        className="highlight-image"
        src={imageURL}
        alt={name}
      />
      <figcaption className="highlight-caption">
        {name}
      </figcaption>
    </figure>
  )
}

export default Highlight;