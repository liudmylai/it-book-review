import './App.css';
import { ReviewProvider } from './contexts/ReviewContext';
import { AdminProvider } from './contexts/AdminContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import BookInfo from './components/BookInfo';
import Footer from './components/Footer';
import SearchResults from './components/SearchResults';
import Login from './components/admin/Login';
import NoMatch from './components/NoMatch';
import AuthLayout from './components/admin/AuthLayout';
import AdminPanel from './components/admin/AdminPanel';

function App() {

  return (
    <ReviewProvider>
      <AdminProvider>
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path='/admin' element={<AdminPanel />} >
                <Route index element={<AuthLayout />} />
                <Route path='login' element={<Login />} />
                <Route path='*' element={<NoMatch />} />
              </Route>
              <Route path='/' element={<Header />} >
                <Route index element={<Main />} />
                <Route path='index.html' element={<Main />} />
                <Route path='book-:isbn' element={<BookInfo />} />
                <Route path='search' element={<SearchResults />} />
                <Route path='search/:query' element={<SearchResults />} />
                <Route path='search/:query/page-:num' element={<SearchResults />} />
                <Route path='*' element={<NoMatch />} />
              </Route>
            </Routes>
            <Footer />
          </div>
        </BrowserRouter>
      </AdminProvider>
    </ReviewProvider>
  );
}

export default App;
