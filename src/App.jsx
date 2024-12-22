import React, {useState} from 'react';
import './App.scss';
import { Main } from './Screens/Main';
import { Cursor } from './Components/Cursor/Cursor'
import { Sidebar } from './Components/Sidebar/Sidebar';
import { DotsContainer } from './Components/Background/DotsContainer';

const App = () => {
  console.info("Dev tools might lag the background!");
  const [allowMove, setAllowMove] = useState(true);

  return (
    <>
      {/* <Cursor allowMove={allowMove} /> */}
      <DotsContainer allowMove={allowMove} />
      <Sidebar setAllowMove={setAllowMove} allowMove={allowMove} />

      <Main />
    </>
  )
}

export default App;
