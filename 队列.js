function Queue(){
    this.dataStore=[];
    this.front=front;
    this.back=back;
    this.enqueue=enqueue;
    this.dequeue=dequeue;
    this.toString=toString;
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
var q=new Queue();
q.enqueue("第一个");
q.enqueue("第二个");
q.enqueue("第三个");
q.enqueue("第四个");
q.dequeue();
console.log(q.toString());