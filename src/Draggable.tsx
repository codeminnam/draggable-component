import React, { useState } from 'react';
import './App.css';

const Box = () => {
  const [dragging, setDragging] = useState<boolean>(false);
  const [diffX, setDiffX] = useState<number>(0);
  const [diffY, setDiffY] = useState<number>(0);
  const [styles, setStyles] = useState<Object>({});

  const handleDragStart = (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    setDiffX(event.screenX - event.currentTarget.getBoundingClientRect().left);
    setDiffY(event.screenY - event.currentTarget.getBoundingClientRect().top);
    setDragging(true);
  };

  const handleDragging = (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    if (dragging) {
      const left: number = event.screenX - diffX;
      const top: number = event.screenY - diffY;
      setStyles({
        left: left,
        top: top
      });
    }
  };

  const handleDragEnd = (): void => {
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
  );
};

const Draggable = () => {
  return (
    <div className="Draggable">
      <Box />
    </div>
  );
};

export default Draggable;
