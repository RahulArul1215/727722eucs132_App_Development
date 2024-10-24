// import './App.css';
// import Footer from './Components/Footer';
// import Home from './Components/Home';
// function App() {
//   return (
//     <div className="App">
//       <Home/>

//     </div>
//   );
// }

// export default App;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import { VotingPage } from './Components/VotingPage';
import PublicRegister from './Components/PublicRegister';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/voterpage" element={<VotingPage/>} /> {/* Define the route */}
        <Route path="/publicRegister" element={<PublicRegister/>}/>
      </Routes>
    </Router>
  );
}

export default App;
