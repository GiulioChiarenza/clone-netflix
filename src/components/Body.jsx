import { Component } from "react";

class Body extends Component {
    state = {
      trendingMovies: [],
      watchAgainMovies: [],
      newReleases: [],
    };
  
    getMovies = (arrayFilm, key) => {
        fetch(`http://www.omdbapi.com/?apikey=1ab1d1e3&s=${arrayFilm}`)
          .then((response) => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error('Errore nella ricezione del server');
            }
          })
          .then((data) => {
            if (data.Response === 'True') {
              const movies = data.Search.slice(0, 6);
              this.setState({
                [key]: movies,
              });
            }
          })
          .catch((err) => {
            console.log(err);
          });
      };
  
    componentDidMount() {
      this.getMovies('Harry Potter', 'trendingMovies');
      this.getMovies('Star Wars', 'watchAgainMovies');
      this.getMovies('Lord of the Rings', 'newReleases');
    }
    renderMovies = (movies) => {
        return (
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
            {movies.map((movie) => (
              <div key={movie.imdbID} className="col mb-2 text-center px-1">
                <img className="img-fluid" src={movie.Poster} alt={movie.Title} />
              </div>
            ))}
          </div>
        );
      };

    render(){
        const { trendingMovies, watchAgainMovies, newReleases } = this.state;

        return(
            <>
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <h2 className="mb-4">TV Shows</h2>
            <div className="btn-group" role="group">
              <div className="dropdown ms-4 mt-1">
                <button
                  type="button"
                  className="btn btn-secondary btn-sm dropdown-toggle rounded-0"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ backgroundColor: '#221f1f' }}
                >
                  Genres
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Comedy</a></li>
                  <li><a className="dropdown-item" href="#">Drama</a></li>
                  <li><a className="dropdown-item" href="#">Thriller</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <i className="bi bi-grid icons"></i>
            <i className="bi bi-grid-3x3 icons"></i>
          </div>
        </div>
        <h4>Trending Now</h4>
        {this.renderMovies(trendingMovies)}

        <h4>Watch it Again</h4>
        {this.renderMovies(watchAgainMovies)}

        <h4>New Releases</h4>
        {this.renderMovies(newReleases)}
      </>
        )
    }

}
export default Body