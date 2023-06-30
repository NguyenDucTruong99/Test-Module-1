

let arr1 =[];
let arr2 =[]
function tryRemoveFromArray(arr1,X){

    for(let i=0; i < arr1.length; i++){
        if(arr1[i] === X){
            arr1.splice(i,X);
            arr1 = arr2;
            return arr2;
        }
    }
    return arr1;
}