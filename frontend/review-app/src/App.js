import './App.css';
import { ReviewProvider } from './contexts/ReviewContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import BookInfo from './components/BookInfo';
import Footer from './components/Footer';

function App() {

  return (
    <ReviewProvider>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/book-:isbn' element={<BookInfo />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </ReviewProvider>
  );
}

export default App;
