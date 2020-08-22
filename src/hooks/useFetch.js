import  {useEffect, useState} from "react";
function useFetch(url){

     const [data,setData] = useState(null);
    const [error,setError] = useState(false);

    useEffect(()=>{
         setTimeout(()=>{
             fetch(url).then(response => {
                 if (response.ok) {
                     return response.json()
                 } else {
                     setError('Error: status ' + response.status + ' ' + response.statusText)
                     setData([]);
                 }
             }).then(response => setData(response))
                 .catch((e)=>{
                     setError(e);
                     setData([])
                 })
              },0)
          // eslint-disable-next-line
     },[])
    return [data,error];
}
export default useFetch
