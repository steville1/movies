import React from 'react';
import Like from './common/like'
const MoviesTable=props=>{
    const{itemCount, movies, onLike, onDelete}=props;
    return(
        <table className="table">
        <p>Showing {itemCount} In The Database</p>
         <thead>
             <tr>
                 <th>Title</th>
                 <th>Genre</th>
                 <th>Stock</th>
                 <th>Rate</th>
                 <th>Action</th>
                 <th></th>
             </tr>
         </thead>
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
export default MoviesTable;