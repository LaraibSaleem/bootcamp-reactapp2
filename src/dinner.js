import React from 'react';

function Dinner(props){
    return(
        <div>
            <h1> AoA! I am Laraib Saleem. </h1>
            <h1> Today we are serving {props.mainmeal}. </h1>
            <h1> Today we are serving {props.sweet} as well. </h1>
            <h1> Today we are closed!. </h1>
        </div>
    );
}

export default Dinner;