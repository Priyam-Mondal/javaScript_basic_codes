function insertValue(arr, value, n){
    for(let i=n-1; i<arr.length; i+=n){
        if((i+1)%n == 0){
            arr[i]=value;
        }
    }
    return arr;
}

let arr1=[1,2,3,4,5,6,7,8,9,10];
let value='A';
let n=3;

console.log(insertValue(arr1, value, n));