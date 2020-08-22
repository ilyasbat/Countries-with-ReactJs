function useObject(){
    const setObject =(object)=>{
        return JSON.stringify(object)
            .replace(/{|}|"|\[|\]/g,' ')
            .replace(/,/g,'\n')
    }
    return setObject;
}
export default useObject
