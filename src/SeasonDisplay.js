
import React from 'react';



const getSeason=(lat,month)=>{
    if(month<2 && month>9){
        return lat>0 ? "summer":"winter"
    }else{
        return lat>0 ? "winter":"summer"
    }
}


const SeasonDisplay = ({lat}) => {
    console.log(lat);

    const season=getSeason(lat,new Date().getMonth());
    const text=season==="winter"?"Burr, it is chilly":"Let's hit the beach";

    return (
        <div>
            <h2>{text}</h2>
        </div>
    )
}

export default SeasonDisplay
