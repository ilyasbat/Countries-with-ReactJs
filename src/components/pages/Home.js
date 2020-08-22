import React, {useEffect, useState} from "react";
import useFetch from '../../hooks/useFetch'
import {useParams} from 'react-router-dom'
import {API_ALL_COUNTRY_URL, PAGINATION_ITEM} from "../../config";
import ContentHeader from "../common/ContentHeader";
import CountryHome from "../common/CountryHome";
import {language} from "../../language";
import Pagination from "../common/Pagination";
function Home(){
    let {page} = useParams();
    const [data,error] = useFetch(API_ALL_COUNTRY_URL);
    const [pageCount,setPageCount] = useState(0);
    const [filteredData,setFilteredData] = useState([]);
    useEffect(()=>{
        if(data){
            page = parseInt(page);
            if(!page){
                page = 1;
            }
            findPageCountAndFilteredData();
        }
    }, [data,page])
    const findPageCountAndFilteredData=()=>{
        setFilteredData(data.filter((d,index)=>{return index>=((page-1)*PAGINATION_ITEM) && index<(page*PAGINATION_ITEM)}))
        setPageCount(Math.ceil((data.length/PAGINATION_ITEM)))
    }
    const search = (text)=>{
        if(text.target.value.length<1){
            findPageCountAndFilteredData();
        }
        else{
            setPageCount(0)
            setFilteredData(data.filter(e=> e.name.toLowerCase().includes(text.target.value.toLowerCase()) || e.nativeName.toLowerCase().includes(text.target.value.toLowerCase()) ));
        }
    }
    return (
        <>
            <ContentHeader title={language.countries} search={(e)=>search(e)}/>
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
            {pageCount>1 && <Pagination page={page} totalPage={pageCount} url={'/'}/>}
        </>
    )
}
export default Home
