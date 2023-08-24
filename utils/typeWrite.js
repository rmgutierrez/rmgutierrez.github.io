import React, {useState, useEffect, useRef} from "react";

const typeWriter = ({text}) => {
    const index = useRef(0);
    const [currentText, setCurrentText] = useState('');
  
    useEffect(() => {
      index.current = 0;
      setCurrentText('');
    }, [text])
  
    useEffect(() => {
      const timeoutId  = setTimeout(() => {
        setCurrentText((value) => value + text.charAt(index.current));
        index.current += 1;
      }, [currentText, text]);
  
      return <h1 className="font-semibold text-[20px] text-white">{text}</h1>
  
    })
  }

export default typeWriter;