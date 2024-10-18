import './App.css';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Slider from './components/Slider/Slider';
import MoviesList from './components/MoviesList/MoviesList';
import PosterCard from './components/PosterCard/PosterCard';

function App() {
  return (
    <div className="App">
      <Navbar />
      <PosterCard />
      <Slider />
      <MoviesList />
      <Footer />
    </div>
  );
}

export default App;
