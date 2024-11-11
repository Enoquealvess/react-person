import React from 'react';
import Ator from './ator';

function App() {
  return (
    <div className="App">
      <h1>Contador de Curtidas dos Atores</h1>

      <Ator 
        nome="Heath Ledger" 
        personagem="Coringa" 
        imagem="https://seeklogo.com/images/C/coringa-silhueta-logo-84E6A66D8A-seeklogo.com.png" 
      />


      <Ator 
        nome="Tom Holland" 
        personagem="Homem Aranha" 
        imagem="https://upload.wikimedia.org/wikipedia/pt/1/12/Traje-Homem-Aranha-Sam-Raimi.png" 
      />

      <Ator 
        nome="Chris Hemsworth" 
        personagem="Thor" 
        imagem="https://i.pinimg.com/originals/ed/92/98/ed929893d9c594aeec4f2e5fb3ec3406.png" 
      />

   
    
    </div>
  );
}

export default App;
