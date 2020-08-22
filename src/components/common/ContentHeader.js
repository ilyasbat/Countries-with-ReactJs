import React from "react";
function ContentHeader({title,image=false,search}){
    return (
        <div className="content-header">
            <div className="content-header-title">
                {image && (<img src={image} width="50" height="50"/>)}
                <h2>{title}</h2>
            </div>
            {search && (
                <div className="content-header-search">
                    <input type="text" placeholder="Search" onChange={search}/>
                </div>
            )}
        </div>
    )
}
export default ContentHeader
