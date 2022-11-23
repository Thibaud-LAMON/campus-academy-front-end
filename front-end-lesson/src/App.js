import './App.css';
import Header from './header/Header.js';
import Carousel from './image-carousel/Carousel';
import Thumbnail from './thumbnail/Thumbnail';

function App() {
  return (
    <div className="App">
      <Header />
      <Thumbnail />
      <Carousel/>
    </div>
  );
}

export default App;
