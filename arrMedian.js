
function median(arr){
    
    arr.sort((a,b) => a-b);
    
    const len=arr.length;
    const mid=Math.floor(len/2);
    
    if(len%2!=0){
        return arr[mid];
    }else{
        return (arr[mid-1]+arr[mid])/2;
    }
    
}

let arr1=[5, 3, 8, 1, 2, 4];
let arr2=[1,2,-3,-4,5];

console.log(median(arr1));
console.log(median(arr2));
//hello