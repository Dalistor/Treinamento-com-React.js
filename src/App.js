import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject'

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Link to="/">Home</Link>
          <Link to="/company">Company</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/newProject">New project</Link>
        </div>

        
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/company" element={<Company />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/newProject" element={<NewProject />} />
        </Routes>
 
      </Router>
    </div>
  )
}

export default App
