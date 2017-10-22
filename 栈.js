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
//main方法

// var s=new Stack();
// s.push("Yin");
// s.push("Zheng");
// s.push("Code");
// s.push("Tai");
// s.push("Cai");
// console.log("栈的元素个数:"+s.length());
// console.log("栈顶元素:"+s.pop());
// console.log("栈顶元素:"+s.pop());
// console.log("栈顶元素:"+s.pop());
// console.log("栈的元素个数:"+s.length());

//进制转换

// function transform(num,base){
//     var s=new Stack();
//     do{
//         var n=num%base;
//         s.push(n);
//         num=num/base;
//         num=Math.floor(num);
//     }while(num>0)
//     var result="";
//     while(s.length()>0){
//         result+=s.pop();
//     }
//     return result;
// }
// console.log(transform(88,2));

//回文

// function judge(word){
//     var s=new Stack();
//     for(var i=0;i<word.length;i++){
//         s.push(word[i]);
//     }
//     var reword="";
//     while(s.length()>0){
//         reword+=s.pop();
//     }
//     if(word==reword){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// var word="abccbae";
// console.log(judge(word));

//模拟递归

// function fact(n){
//     var s=new Stack();
//     while(n--){
//         s.push(n);
//         n--;
//     }
//     var result=1;
//     while(s.length()>0){
//         result*=s.pop();
//     }
//     return result;
// }
// console.log(fact(10));