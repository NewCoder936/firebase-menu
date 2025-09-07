import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import firebase from './FirebaseConfig'

/**
 * to deploy:
 * we need to run firebase init
 * choose the hosting option
 * choose existing firebase project if you already have a project
 * for commands, npm run build, then firebase deploy
 * 
 * to work with firebase tools, run npm install firebase --save-exact 
 * 
 * go to the console of your project and create a web app
 * then get the api keys and others
 * create .env file and set it as the one done in this project
 * get the credentials from the firebase, put it in .env file, and rename the keys as done here
 */

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <div className='title-row'>
        <p className='title'>Firebase Menu</p>
      </div>
    </div>
  )
}

export default App
