import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Form from './Form';
import FormRef from './FormRef';
import FormState from './FormState';
import Card from './Card';

function App() {
  return (
    <Router>
      <nav style={{ padding: '10px' }}>
        <Link to="/" id="form-link" style={{ margin: '0 10px' }}>Form</Link>
        <Link to="/form-ref" id="form-ref-link" style={{ margin: '0 10px' }}>Form Ref</Link>
        <Link to="/form-state" id="form-state-link" style={{ margin: '0 10px' }}>Form State</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Card><Form /></Card>} />
        <Route path="/form-ref" element={<Card><FormRef /></Card>} />
        <Route path="/form-state" element={<Card><FormState /></Card>} />
      </Routes>
    </Router>
  );
}

export default App;
