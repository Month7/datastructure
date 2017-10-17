function Stack(){
    this.top=0;
    this.push=push;
    this.pop=pop;
    this.dataStore=[];
    this.peek=peek;
    this.length=length;
    this.clear=clear;
}
function push(element){
    this.dataStore[this.top]=element;
    this.top++;
}
function pop(){
    this.top--;
    return this.dataStore[this.top];
}
function peek(){
    return this.dataStore[this.top-1];
}
function length(){
    return this.top;
}
function clear(){
    this.top=0;
}
var s=new Stack();
s.push("Yin");
s.push("Zheng");
s.push("Code");
s.push("Tai");
s.push("Cai");
console.log("栈的元素个数:"+s.length());
console.log("栈顶元素:"+s.pop());
console.log("栈顶元素:"+s.pop());
console.log("栈顶元素:"+s.pop());
console.log("栈的元素个数:"+s.length());