import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Category from './pages/category';
import Article from './pages/article';
import Bookmarks from './pages/BookMarks';
import ThemeToggle from './components/ThemeToggle';
import { ThemeProvider } from './context/ThemeContext';
import './styles.css';

// Main app component
function App() {
  return (
    <ThemeProvider>
      <Router>
        <div>
          {/* Navigation bar */}
          <nav>
            <div className="container">
              <div className="nav-links">
                {/* Site title */}
                <Link to="/" className="site-title">
                  NEWSWAVE
                </Link>
                
                {/* Navigation items */}
                <div className="nav-items">
                  <Link to="/category/technology">Technology</Link>
                  <Link to="/category/sports">Sports</Link>
                  <Link to="/category/business">Business</Link>
                  <Link to="/category/entertainment">Entertainment</Link>
                  <Link to="/bookmarks">📚 Bookmarks</Link>
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </nav>

          {/* Routes */}
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/category/:type" element={<Category />} />
            <Route path="/article/:id" element={<Article />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
