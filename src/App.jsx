import { useState } from 'react';
import { marked } from 'marked';
import './App.css';

function App() {
  const [text, setText] = useState(`
  # Titulo
  ## Subtitulo
  [Link a GitHub](https://github.com/miguelco23)
  \`let variable = "codigo en linea"\`
  \`\`\`
  const bloque ="Este es un bloque de codigo"
  \`\`\`
  * Elemento en una lista
  > Esta es una cita
  ![Aca pues iria una imagen](https://i.imgur.com/9Pc0MTX.jpeg)
  **Y pues aca la negrita**
  `);

  marked.setOptions({
    breaks: true
  })

  return (
    <div className="App">
      <textarea 
        id="editor" 
        onChange={(event) => {
          setText(event.target.value);
        }}
        value={text}
        ></textarea>
      <div 
        id="preview"
        dangerouslySetInnerHTML={{
          __html: marked(text),
        }}
      ></div>
    </div>
  );
}

export default App;
