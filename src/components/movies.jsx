import React, { Component } from 'react';
import {getMovies} from '../services/fakeMovieService';
import {getGenres} from '../services/fakeGenreService';
import Like from '../components/common/like'
import Pagination from './pagination';
import ListGroup from './listgroup';
import {paginate} from '../utils/paginate';
import MoviesTable from './moviesTable';
class Movies extends Component {
    state = { 
        movies:[],
        genres:[],
        pageSize:4
        //currentPage:1
        
     }
    componentDidMount(){
        const genres=[{name:"All genres"},...getGenres()]
        this.setState({movies:getMovies(), genres})
    }
     handleDelete(movie){
        const moviesDelete=this.state.movies.filter(m=>m._id !== movie._id);
        this.setState({movies:moviesDelete});
     }
     handleClick=(movie)=>{
         const movies=[...this.state.movies];
         const index=movies.indexOf(movie);
         movies[index]={...movies[index]};
         movies[index].liked=!movies[index].liked;
         this.setState({movies});

     }
     handlePageChange=page=>{
         this.setState({currentPage:page});
     }
     handleGenreSelect=genre=>{
         this.setState({selectedGenre:genre, currentPage:1});
         //console.log("Selected Genre", genre);
     }
    render() { 
        const{count}=this.state.movies.length;
        const{pageSize, currentPage, movies:allMovies, selectedGenre }=this.state;
        console.log("Count",count);
        if(this.state.movies.length===0) return <p>No Movie Available</p>;
       const filtered=selectedGenre && selectedGenre._id ? allMovies.filter(m=>m.genre._id===selectedGenre._id):allMovies;
       const movies=paginate(filtered,currentPage,pageSize);
       return (
    <div className="row">
        <div className="col-2">
            <ListGroup 
                genresList={this.state.genres}
                onItemSelect={this.handleGenreSelect}
                selectedItem={this.state.selectedGenre}
            />
        </div>
        <div className="col">
        <MoviesTable 
            itemCount={filtered.length} 
            movies={movies}
            onLike={this.handleClick}
            onDelete={this.handleDelete}
        />
        <Pagination
            itemsCount={this.state.movies.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
        />
        </div>
        
       
        </div>
        );
    }
}
 
export default Movies;