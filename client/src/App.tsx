import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Home, Login, LoginCallback } from './Routes'

const App = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/login/callback" element={<LoginCallback />} />
      <Route path="*" element={<Home />} />
    </Routes>
  </Router>
)

export default App
