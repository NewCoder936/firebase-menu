import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { app } from './FirebaseConfig'

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
 * 
 * we can set the automatic deployment through firebase hosting whenever i am pushing to main to github 
 * i need to go to terminal, run firebase init
 * i need to choose hosting 
 * i need to say yes for auto deployment 
 * i need to set no for auto workflow 
 * i need to choose main as the branch for auto deployment 
 * and then i click enter 
 * 
 * i need to go to .github/workflows and then firebase/hosting/merge and add below the user the below 
 * run: npm install
 * run: npm run build
 * and same for the firebase-hosting-pull-request
 */

function App() {

  return (
    <div className='App'>
      <div className='title-row'>
        <p className='title'>Firebase Menu</p>
      </div>
    </div>
  )
}

export default App
