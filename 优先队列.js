function Queue(){
    this.dataStore=[];
    this.enqueue=enqueue;
    this.dequeue=dequeue;
    this.toString=toString;
}
function Patient(name,code){
    this.name=name;
    this.code=code;
}
function enqueue(element){
    this.dataStore.push(element);
}
function dequeue(){
    var entry=0;
    for(let i=0;i<this.dataStore.length;i++){
        if(this.dataStore[i].code<this.dataStore[entry].code){
            entry=i;
        }
    }
    return this.dataStore.splice(entry,1);
}
function toString(){
    var str="";
    for(let i=0;i<this.dataStore.length;i++){
        str+=this.dataStore[i].name+"code:"+this.dataStore[i].code+"\n";
    }
    return str;
}
/*=========================main 方法=======================*/
// var p=new Patient("yinzheng",4);
// var q=new Queue();
// q.enqueue(p);
// p=new Patient("cao",3);
// q.enqueue(p);
// p=new Patient("yi",2);
// q.enqueue(p);
// p=new Patient("jing",1);
// q.enqueue(p);
// console.log(q.toString());
// console.log("等待就诊的病人:");
// q.dequeue();
// console.log(q.toString());
// console.log("等待就诊的病人:");
// q.dequeue();
// console.log(q.toString());
// console.log("等待就诊的病人:");
// q.dequeue();
// console.log(q.toString());


function removeWithoutCopy(arr, item) {
	for(var i=0;i<arr.length;i++){
        if(arr[i]==item){
            arr.splice(i,1);
            i--;
        }
    }
    return arr;
}
console.log(removeWithoutCopy([1,2,2,3,4,2,3],2));