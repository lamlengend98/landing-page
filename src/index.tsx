import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import Main from './main'
import './i18n'
import 'typeface-ibm-plex-sans'

ReactDOM.render(<Main />, document.getElementById('root'))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
