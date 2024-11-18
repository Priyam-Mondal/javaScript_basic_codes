function removeDuplicates(arr){
    const mySet=new Set();
    const uniqueElements=[];
    
    for(ele of arr){
        if(!mySet.has(ele)){
            uniqueElements.push(ele);
            mySet.add(ele);
        }
    }
    return uniqueElements;
}

let arr1=[1,3,2,3,2,-4,5,-4];

console.log(removeDuplicates(arr1));