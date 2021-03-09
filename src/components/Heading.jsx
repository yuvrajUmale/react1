import React from 'react';

//get current date
const currentDate = new Date();
const time = currentDate.getHours();

//inline css
const customStyles = {
    color: ""
}

let gettingTime ;

if(time < 12 ){
    gettingTime = "Good Morning";
    customStyles.color ="red";
}else if(time < 18){
    gettingTime = "Good Afternoon";
    customStyles.color ="green";
}else{
    gettingTime = "Good Night";
    customStyles.color ="blue";
}

function Heading() {
    return(
        <h1 className="Heading" style = {customStyles} >{gettingTime}</h1>
    );
};

export default Heading;