function Queue(){
    this.dataStore=[];
    this.front=front;
    this.back=back;
    this.enqueue=enqueue;
    this.dequeue=dequeue;
    this.toString=toString;
    this.empty=empty;
}
function enqueue(element){
    this.dataStore.push(element);
}
function dequeue(){
    return this.dataStore.shift();
}
function front(){
    return this.dataStore[0];
}
function back(){
    return this.dataStore[this.dataStore.length-1];
}
function toString(){
    var Str="";
    for(var i=0;i<this.dataStore.length;i++){
        Str+=this.dataStore[i]+"\n";
    }
    return Str;
}
function empty(){
    if(this.dataStore.length==0){
        return true;
    }
    else{
        return false;
    }
}
// var q=new Queue();
// q.enqueue("第一个");
// q.enqueue("第二个");
// q.enqueue("第三个");
// q.enqueue("第四个");
// q.dequeue();
/*====================基数排序=======================*/
// function sort(nums,queues,n,digit){
//     for(let i=0;i<n;i++){
//         if(digit==1){
//             queues[nums[i]%10].enqueue(nums[i]);
//         }
//         else if(digit==10){
//             queues[Math.floor(nums[i]/10)].enqueue(nums[i]);
//         }
//     }
// }
// function collect(queues,num){
//     var i=0;
//     for(let j=0;j<10;j++){
//         while(!queues[j].empty()){
//             nums[i]=queues[j].dequeue();
//             i++;
//         }
//     }
// }
// function show(nums){
//     for(var i=0;i<nums.length;i++){
//         console.log(nums[i]);
//     }
// }
// var queues=[];
// for(let i=0;i<10;i++){
//     queues[i]=new Queue();
// }
// var nums=[];
// for(let i=0;i<10;i++){
//     nums[i]=Math.floor(Math.floor(Math.random()*101));
// }
// console.log("排序之前：");
// show(nums);
// sort(nums,queues,10,1);
// collect(queues,nums);
// sort(nums,queues,10,10);
// collect(queues,nums);
// console.log("排序之后:");
// show(nums);
