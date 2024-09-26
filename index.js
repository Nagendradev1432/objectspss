let num=prompt("enter numbers :").split(" ")
let emp={}
for(i of num){
    if(emp[i]){
       emp[i]=emp[i]+1 
    }
    else{
        emp[i]=1
    }
}
console.log(emp)

enter numbers :2 5 17 3 5 5 13 3 3 
{ '2': 1, '3': 3, '5': 3, '13': 1, '17': 1 }

let obj1={"name":"Raju","marks":{"m1":20,"m2":50,"m3":20}}
for(i in obj1.name){
    let str=obj1.name[i]   
    console.log(str);  
}

let obj1={"Name":"Nagendra","age":45,"city":"bangaluru"}
let obj2={}
for(i in obj1){
  // value=i
   //keys=obj1[i]
   //obj2[keys]=value

console.log(obj1[i],i);
  
    
}
console.log(obj2);


let arr1=prompt("enter a numbers : ").split(" ")
let obj1={}
for(i of arr1){
    if(obj1[i]){
        obj1[i]=obj1[i]+1
    }
    else{
        obj1[i]=1
    }
}
console.log(obj1)
for(i in obj1){
    if(obj1[i]>1){
        console.log(i)
    }
}


let obj1={"Name":"Nagendra","marks":{"m1":25,"m2":20,"m3":10},"Name":"raju","marks":{"m1":10,"m2":90,"m3":3}}
sum=0
for(i in obj1.marks){
    sum=sum+(obj1.marks[i])
  
}
console.log(sum);



let obj1=[{"Name":"Nagendra","marks":{"m1":10,"m2":20,"m3":10}},{"Name":"Tharun","marks":{"m1":20,"m2":20,"m3":20}}]
for(i of obj1){
    sum=0
   for(j in i.marks){
    sum=sum+(i.marks[j])
    
   }
   i.totalmarks=sum
    
}
console.log(obj1);



 