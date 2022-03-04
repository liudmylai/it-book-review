import './App.css';
import { ReviewProvider } from './contexts/ReviewContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import BookInfo from './components/BookInfo';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';

function App() {

  return (
    <ReviewProvider>
      <BrowserRouter>
        <div className="App">
          <Header />
          <SearchBar />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/index.html' element={<Main />} />
            <Route path='/book-:isbn' element={<BookInfo />} />
            <Route path='/search' element={<SearchResults />} />
            <Route path='/search/:query' element={<SearchResults />} />
            <Route path='/search/:query/page-:num' element={<SearchResults />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </ReviewProvider>
  );
}

export default App;
