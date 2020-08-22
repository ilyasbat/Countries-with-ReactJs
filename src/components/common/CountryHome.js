import React from 'react'
import {Link} from "react-router-dom";

function CountryHome({country}){
    return (

        <div className="country">
            <div className="country-img"><Link to={"/country/"+country.alpha3Code.toLowerCase()}><img src={country.flag}/></Link></div>
            <div className="country-name"><h3><Link to={"/country/"+country.alpha3Code.toLowerCase()}>{country.name} ({country.nativeName})</Link></h3></div>
        </div>
    )
}
export default CountryHome
