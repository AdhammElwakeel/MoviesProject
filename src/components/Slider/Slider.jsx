import '../Slider/Slider.css';

const Slider = () => {
  return (
    <>
      <div className="slider" id='slider'>
        <h2>Popular Movies</h2>
        <div className="sliderContainer">
          <div className="sliderTrack">
            <div className="slide"><img src="assets/movie1.png" alt="Movie 1" /></div>
            <div className="slide"><img src="assets/movie2.png" alt="Movie 2" /></div>
            <div className="slide"><img src="assets/movie3.png" alt="Movie 3" /></div>
            <div className="slide"><img src="assets/movie4.png" alt="Movie 4" /></div>
            <div className="slide"><img src="assets/movie5.png" alt="Movie 5" /></div>
            <div className="slide"><img src="assets/movie6.jpeg" alt="Movie 6" /></div>
            <div className="slide"><img src="assets/movie7.png" alt="Movie 7" /></div>
            <div className="slide"><img src="assets/movie9.jpeg" alt="Movie 8" /></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
