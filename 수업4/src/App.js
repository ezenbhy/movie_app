import React from 'react';
import axios from 'axios';
import Movie from './Movie'; 
import './App.css';
import './Home.css';

class App extends React.Component {
  state = {
    isLoading: true,//key:key value
    movies: [],
  }
 
  getMovies = async () => {
    const { 
      data: { 
        data: {movies}, 
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?genre=animation&sort_by=like_count');
    //console.log(data.data.movies);
    this.setState({movies, isLoading: false}); //키:키값 이름이 동일하면
  }

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({isLoading: false});
    // },6000)
    this.getMovies();
  }
  render() {
    const {isLoading, movies} = this.state; //구조 분해 할당
    return (
      <section className="container">
        {isLoading ? 
          (<div className="loader">
              <span className="loader_text">'Loading...'</span>
           </div>) : 
          (<div className="movies">
              {movies.map(movie => ( <Movie 
                                    id={movie.id}
                                    year={movie.year}
                                    title={movie.title}
                                    summary={movie.summary}
                                    poster={movie.medium_cover_image}
                                    genres={movie.genres}
                                  /> )
                          )
              }
          </div>)
          }
      </section>
    );
  }
}

export default App;
