import React, { useEffect, useState } from "react";
import '../styles/Components.css'

const TextFileContent = ({ fileUrl }) => {
    const [content, setContent] = useState([]);
  
    useEffect(() => {
      fetch(fileUrl)
        .then(response => response.text())
        .then(data => {
          const linesArray = data.split('\n');
          setContent(linesArray);
        })
        .catch(error => console.error('Erro ao carregar o conteúdo do arquivo: ' , error));
    }, [fileUrl]);
  
    return (
      <div className="text-content">
        {content.map((line, index)=> (
          <div key={index} className={index === 0 ? "first-line": ""}>{line.includes("<br>") ? <br /> : line}</div>
        ))}
      </div>
    );
  };
  
  export default TextFileContent;