import './App.css';
import 'tailwindcss';
import Job from './components/Job';
import JobList from './components/JobList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Description } from './components/Description';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Descrpition/:id" element={<Description/>}/>
        <Route path="/" element={<JobList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
