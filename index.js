/**
 * Created by Crystal.tongjoy on 2016/6/23.
 */
import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App'
import todoApp from './reducers'

let store = createStore(todoApp)

let rootElement = document.getElementById('root')
render(
<Provider store={store}>
    <App />
    </Provider>,
    rootElement
)