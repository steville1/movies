import React, {Component} from 'react'

const Like =props=>{
   
        let classes="fa fa-heart";
        if(!props.like){
            classes +="-o"
        }
    return(<i onClick={props.onClick} className={classes}  arial-hidden="true"> </i> )
    }

export default Like

