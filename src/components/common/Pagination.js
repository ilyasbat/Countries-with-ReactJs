import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
function Pagination({totalPage,page,url}){
    const [links,setLinks] = useState([]);
    useEffect(()=>{
        let result = [];
        for(let i=1;i<=totalPage;i++){
            let object = {to:url+i,className:page==i?'active':'',title:i}
            result.push(object)
        }
        setLinks(result);
    },[page])
    return (
        <div className="pagination">
            {links.map((link,index)=>{
                return (<div key={index} className={"pagination-link "+link.className}><Link to={link.to}>{link.title}</Link></div>)
            })}
        </div>
    )
}
export default Pagination
