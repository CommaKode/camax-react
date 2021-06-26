import React, { useState, useRef } from 'react';
import './Tooltip.scss';

const Tooltip = (props) => {
  const { text, cName, ...rest } = props;

  const [title, setTitle] = useState('برای کپی کردن کلیک کنید');
  const copy = useRef();
  const copyToClipboard = () => {
    const txt = copy.current.innerText;
    navigator.clipboard.writeText(txt);
    setTitle('کپی شد');
  };
  const reset = () => {
    setTimeout(() => {
      setTitle('برای کپی کردن کلیک کنید');
    }, 200);
  };
  return (
    <div
      className={`copyTitle ${cName}`}
      onClick={copyToClipboard}
      onMouseLeave={reset}
      {...rest}
    >
      <span className="copy-text" ref={copy}>
        {text}
      </span>
      <span className="tooltip">{title}</span>
    </div>
  );
};

export default Tooltip;
