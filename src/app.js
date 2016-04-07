import React from 'react'
import { render } from 'react-dom'
import AppContainer from './components/AppContainer'
import { articleStore } from './stores'

articleStore.addChangeListener(()=>console.log('---','changed'))

render(<AppContainer />, document.getElementById('container'))