import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom'
import useFetch from "../../hooks/useFetch";
import { API_COUNTRY_URL_BYALPHA} from "../../config";
import ContentHeader from "../common/ContentHeader";
import {language} from "../../language";
import useObject from "../../hooks/useObject";
function CountryDetil(){
    const {id} = useParams()
    const [data,error] = useFetch(API_COUNTRY_URL_BYALPHA+id);
    const [filteredData,setFilteredData] = useState({});
    const setObject = useObject();
    useEffect(()=>{
        if(data){
            setFilteredData(data)
        }
    }, [data])
    const findData = data=>{
        if(data===''|| data===null)
        {
            return '-';
        }
        const type = typeof data;
        if(type==='string' || type==='number'){
            return data
        }
        else if(type==='object'){
            if(Array.isArray(data)){
                if(data.length===0)
                {
                    return '-';
                }
                if(typeof data[0]==='object'){
                   let result = '';
                   data.map(d=>{
                       result += setObject(d)
                   })
                    return result
                }
                return data.join(', ');
            }
            else{

                return setObject(data)
            }
        }
    }
    return (
       <>
            <ContentHeader title={filteredData?.name} image={filteredData?.flag} search={false}/>
           {error && (<div className="center">{error}</div>)}
           {!data && (<div className="center">{language.loading}</div>)}
           <div className="content-information-container">
               {
                   Object.keys(filteredData).map(function(keyName, keyIndex) {
                       // use keyName to get current key's name
                       // and a[keyName] to get its value
                      return (
                            <div className="content-information" key={keyIndex}>
                               <div className="information-title">{language[keyName]?language[keyName]:keyName}</div>
                                <div className="information-detail">{findData(filteredData[keyName])}</div>
                            </div>
                      )
                   })
               }

           </div>
           {data && !filteredData&&(
               <div className="center">{language.noresult}</div>
           )}
       </>
    )
}
export default CountryDetil
