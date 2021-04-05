import React from 'react';
const ListGroup=props=>{
    const{
        genresList, 
        onItemSelect, 
        selectedItem
    }=props;
    return(
        <ul class="list-group">
            {genresList.map(genre=>(
                  <a onClick={()=>onItemSelect(genre)}><li class={genre===selectedItem? 'list-group-item active': 'list-group-item'}>{genre.name}</li></a>  
            ))}
            
        </ul>
    )
}
export default ListGroup;