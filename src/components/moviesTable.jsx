//import React from 'react';
import Like from './common/like'
import React, {Component} from 'react'
import TableHeader from './common/tableHeader'
class MoviesTable extends Component
{
    //const{itemCount, movies, onLike, onDelete, onSort}=props;
    columns=[
        {label:"title", path:"Title"},
        {label:"genre.name", path:"Genre"},
        {label:"numberInStock", path:"Stock"},
        {label:"dailyRentalRate", path:"Rate"},
        {},
        {}
    ];
   
    render(){
        const{itemCount, movies, onLike, onDelete, onSort, sortColumn}=this.props;
    return(
  
        <table className="table">
        <p>Showing {itemCount} In The Database</p>
         <TableHeader columns={this.columns} sortColumn={sortColumn} onSort={onSort}/>
         
            <tbody>
             {
             movies.map(movie=>(
                 <tr key={movie._id}>
                 <td>{movie.title}</td>
                 <td>{movie.genre.name}</td>
                 <td>{movie.numberInStock}</td>
                 <td>{movie.dailyRentalRate}</td>
                 <td>
                     <Like like={movie.liked} onClick={()=>onLike(movie)}/>
                 </td>
                 <td><button onClick={()=>onDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
             </tr>

             ))}
             
         </tbody>
     </table>
    )
    }
}
export default MoviesTable;