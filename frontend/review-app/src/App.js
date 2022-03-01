import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { ReviewProvider } from './contexts/ReviewContext';

function App() {

  return (
    <ReviewProvider>
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
    </ReviewProvider>
  );
}

export default App;
