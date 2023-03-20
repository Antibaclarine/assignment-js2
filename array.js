const arr1=[3,7,34,90,12];
const num=arr1.slice(-1);
console.log(num);
const arr2=[true,"green","where",12,56];
const words=arr2.slice(-1);
console.log(words);
const myPets=["cow", "Bird","Snake","Dog"];
const pets=myPets.join();
console.log(pets);
let arr3=[-5,9,5,3,2,-3,6,8,4,1];
let numb=arr3.sort((a,b)=>(a-b));
console.log(numb);
let arr= ["apple","mango","apple","orange","mango","mango"];
 function removeDuplicates(arr){
    
        return [...new Set(arr)];
    
}
console.log(removeDuplicates(arr));
    

let arr5=["the","way","x",4];
let wordSearch="the"
let wordSearch2="we"
if(arr5.includes (wordSearch)){
console.log("search")
}
else
{console.log("the search word was not found")}
if(arr5.includes(wordSearch2)){
        console.log("search")
}
else{
        console.log("the search word not found")
}

let word="sevink"
let sorted= word.split('').sort().join('');
console.log(sorted);