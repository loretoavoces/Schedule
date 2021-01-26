import React from 'react'
import { Switch, Route } from 'react-router-dom'

// Components
// import Schedule from './pages/Schedule/Schedule'
import ScheduleHooks from './pages/ScheduleHooks/ScheduleHooks'

function App() {
  return (
    <Switch>
      <Route path="/" exact render={() => <ScheduleHooks />}></Route>
      {/* <Route path="/" exact render={() => <Schedule />}></Route> */}
    </Switch>
  )
}

export default App
