import 'regenerator-runtime/runtime'
import React from 'react'
import  {login, logout } from './near/utils'
import getConfig from './near/config'


export const App = () =>{
  if (!window.walletConnection.isSignedIn()) {
    return (
      <div>
        logged out
      </div>
    )
  }

  return (
    <div>
       logged in
    </div>
  )
}