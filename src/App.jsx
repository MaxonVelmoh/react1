import Header from "./components/Header";
import {  differences } from "./data";
import WayToTeach from "./components/WayToTeach";
import Button from "./components/Button/Button";
import { useState } from "react";
import TeachingSection from "./components/TeachingSection";
import DifferencesSection from "./components/DifferencesSection";

export default function App() {
  const [contentType, setContentType] = useState(null);

  //let content = 'Нажми на кнопку'
  //console.log('App Component Render')
  function handleClick(type) {
    // console.log('button clicked', type)
    setContentType(type);
    //content = type
  }
  return (
    <div>
      <Header />
      <TeachingSection/>
      <main>
        <section>
          

         
        </section>
        <section>
          <h3>Чем мы отличаемся от других</h3>
          <Button isActive={contentType=='way'} onClick={() => handleClick("way")}>Подход</Button>
          <Button isActive={contentType=='easy'} onClick={() => handleClick("easy")}>Доступность</Button>
          <Button isActive={contentType=='program'} onClick={() => handleClick("program")}>Концентрация</Button>

          {/*contentType ? (
            <p>{differences[contentType]}</p>
          ) : (
            <p> Нажми на кнопку</p>
          )*/}
          
          {/*!contentType ? <p>Нажми на кнопку</p> : null*/}
          {!contentType && <p>Нажми на кнопку</p> }
          {contentType && <p>{differences[contentType]}</p>}
        </section>
      </main>
    </div>
  );
}
