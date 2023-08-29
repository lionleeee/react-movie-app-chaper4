import React, { Component } from 'react';
import { homeApi } from '../../api/movie';
import HomePresenter from './HomePresenter';

interface HomeContainerState {
  nowPlaying: any[] | null;
  movieDetail: any | null;
  error: string | null;
  loading: boolean;
}

class HomeContainer extends Component<{}, HomeContainerState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      nowPlaying: null,
      movieDetail: null,
      error: null,
      loading: true,
    };
  }

  async componentDidMount() {
    try {
      const { data } = await homeApi.nowPlaying();
      const movieArray = data.results.map((result: any) => result.id);
      const movieId = movieArray[Math.floor(Math.random() * movieArray.length)];


      try {
        
        const { data: movieDetail } = await homeApi.movieDetail(movieId);

        if (movieDetail.videos.results.length === 0) {
          const { data: defaultMovieDetail } = await homeApi.movieDetail(497698);
          this.setState({ movieDetail: defaultMovieDetail });
        } else {
          this.setState({ movieDetail });
        }
      } catch (error) {
        console.log(error);
        this.setState({ error: "Can't find Home Video." });
      }
    } catch (error) {
      console.log(error);
      this.setState({ error: "Can't fetch Now Playing movies." });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    console.log(process.env.REACT_APP_MOVIE_API_KEY);
    return <HomePresenter {...this.state} />;
  }
}

export default HomeContainer;
