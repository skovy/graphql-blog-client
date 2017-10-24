import React from 'react'
import ReactDOM from 'react-dom'

import Navigation from 'components/navigation';

const App = () => {
  return (
    <div>
      <Navigation />
      <p>Hello world!</p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
