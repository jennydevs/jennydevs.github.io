import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Router } from '@reach/router';
import './styles.css';
import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';
import Devlogs from './pages/Devlogs.jsx';
import Log from './pages/Log.jsx';
import Error from './pages/Error.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Route path='/' component={Home} />
      <Route path='/projects' component={Projects} />
      <Route path='/devlogs' component={Devlogs} />
      <Route path='/devlogs/log/:log_id' component={Log} />
    </Router>
  </StrictMode>,
)
