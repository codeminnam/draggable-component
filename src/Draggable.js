import React, { useState } from 'react';
import './App.css';

const Box = () => {
  const [dragging, setDragging] = useState(false);
  const [diffX, setDiffX] = useState(0);
  const [diffY, setDiffY] = useState(0);
  const [styles, setStyles] = useState({});

  const handleDragStart = (event) => {
    setDiffX(event.screenX - event.currentTarget.getBoundingClientRect().left);
    setDiffY(event.screenY - event.currentTarget.getBoundingClientRect().top);
    setDragging(true);
  };

  const handleDragging = (event) => {
    if (dragging) {
      const left = event.screenX - diffX;
      const top = event.screenY - diffY;
      setStyles({
        left: left,
        top: top
      });
    }
  };

  const handleDragEnd = () => {
    setDragging(false);
  };

  return (
    <div
      className="Box"
      onMouseDown={(event) => handleDragStart(event)}
      onMouseMove={(event) => handleDragging(event)}
      onMouseLeave={() => handleDragEnd()}
      onMouseUp={() => handleDragEnd()}
      style={styles}
    ></div>
  )
};

const Draggable = () => {
  return (
    <div className="Draggable">
      <Box />
    </div>
  )
};

export default Draggable;
