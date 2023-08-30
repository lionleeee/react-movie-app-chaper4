import React, { Component } from "react";
import DetailPresenter from "./DetailPresenter";
import { Route, useLocation,  } from "react-router-dom";
import withRouter from '../../utils/withRouter';
import { moviesApi } from "api/movie";


interface DetailContainerState{
  result: any | null,
  error: string |null,
  loading: boolean,
  //isMovie: pathname.includes("/movie/"),
  recommendations: any,
  cast: any,
  keywords: any,
  reviews: any,
  backdrops: any,
  posters: any,
  tvDetail2: any,
}





class DetailContainer extends Component<{params : number},DetailContainerState> {
  
  constructor(props:any) {
    super(props);
    this.state = {
      result: [],
      error: null,
      loading: true,
      //isMovie: pathname.includes("/movie/"),
      recommendations: [null],
      cast: [],
      keywords: [],
      reviews: [],
      backdrops: [],
      posters: [],
      tvDetail2: [],
    };
    
  }
  
  async componentDidMount() {
    try {
      const parsedId = this.props.params;
  
      const { data: result } = await moviesApi.movieDetail(parsedId);
      
      const {
        data: { results: recommendations },
      } = await moviesApi.recommendations(parsedId);
  
      const {
        data: { cast },
      } = await moviesApi.credits(parsedId);
  
      const {
        data: { keywords },
      } = await moviesApi.keywords(parsedId);
  
      const {
        data: { results: reviews },
      } = await moviesApi.reviews(parsedId);
  
      const {
        data: { backdrops },
        data: { posters },
      } = await moviesApi.images(parsedId);
  
      this.setState({
        result,
        recommendations,
        cast,
        keywords,
        reviews,
        backdrops: backdrops && backdrops,
        posters: posters && posters,
        loading: false,
        error: null, // Clear the error state on successful fetch
      });
    } catch (err) {
      this.setState({
        error: "Can't find anything.",
        loading: false,
      });
    }
  }
  

  render() {
    //

    return <DetailPresenter {...this.state} />;
  }
}

export default withRouter(DetailContainer);

