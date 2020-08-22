import React, {useEffect, useState} from "react";
import useFetch from '../../hooks/useFetch'
import {API_ALL_COUNTRY_URL} from "../../config";
import ContentHeader from "../common/ContentHeader";
import CountryHome from "../common/CountryHome";
import {language} from "../../language";
function Home(){
    const [data,error] = useFetch(API_ALL_COUNTRY_URL);
    const [filteredData,setFilteredData] = useState([]);
    useEffect(()=>{
        if(data){
            setFilteredData(data)
        }
    }, [data])
    const search = (text)=>{
        if(text.target.value.length<1){
            setFilteredData(data);
        }
        else{
            setFilteredData(data.filter(e=> e.name.toLowerCase().includes(text.target.value.toLowerCase()) || e.nativeName.toLowerCase().includes(text.target.value.toLowerCase()) ));
        }
    }
    return (
        <>
            <ContentHeader title={language.countries+" ("+language.total+": "+filteredData.length+")"} search={(e)=>search(e)}/>
            {error && (<div className="center">{error}</div>)}
            <div className="countries">
                {!data && (<div className="center">{language.loading}</div>)}
                {filteredData.length>0 && (
                    filteredData.map(country=>{
                       return (
                           <CountryHome country={country} key={country.name}/>
                       )
                    })
                )}
                {data && filteredData.length===0&&(
                    <div className="center">{language.noresult}</div>
                )}
            </div>
        </>
    )
}
export default Home
