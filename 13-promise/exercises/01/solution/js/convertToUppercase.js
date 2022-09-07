
function isString(srt){
    return typeof srt !== 'string'
}



const convertToUppercase = (arr=[a,b])=>{
    return new Promise ((resolved, rejected)=>{
        //if (!arr.some(string=>typeof string !== 'string')){
        if (!arr.some(isString)){
            const transformedArr = arr.map(item=>item.toUpperCase());
            resolved (transformedArr)
        } else {
            rejected (new Error('Error: Not all items in the array are strings!'))
        }
    })
}

export default convertToUppercase;