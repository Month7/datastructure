function List(){
    this.listSize=0;
    this.pos=0;
    this.dataStore=[];
    this.clear=clear;
    this.toString=toString;
    this.insert=insert;
    this.append=append;
    this.remove=remove;
    this.front=front;
    this.end=end;
    this.prev=prev;
    this.next=next;
    this.hasNext;
    this.hasPrev;
    this.length=length;
    this.currPos=currPos;
    this.moveTo=moveTo;
    this.getElement=getElement;
    this.contains=contains;
    this.find=find;
}
function append(element){
    this.dataStore[this.listSize++]=element;
}
function find(element){
    for(var i=0;i<this.dataStore.length;++i){
        if(this.dataStore[i]==element){
            return i;
        }
    }
    return -1;
}
function remove(element){
    var index=this.find(element);
    if(index>-1){
        this.dataStore.splice(index-1,1);
        --this.listSize;
        return true;
    }
    return false;
}
function length(){
    return this.listSize;
}
function toString(){
    return this.dataStore;
}
function insert(element,after){
    var index=this.find(after);
    if(index>-1){
        this.dataStore.splice(index+1,0,element);
        this.listSize++;
    }
}
function clear(){
    delete this.dataStore;
    this.dataStore,length=0;
    this.listSize=this.pos=0;
}
function contains(element){
    for(var i=0;i<this.listSize;i++){
        if(this.dataStore[i]==element){
            return true;
        }
    }
    return false;
}
function front(){
    this.pos=0;
}
function end(){
    this.pos=this.listSize-1;
}
function next(){
    if(this.pos<this.listSize){
        this.pos++;
    }
}
function prev(){
    if(this.pos>0){
        this.pos--;
    }
}
function hasNext(){
    return this.pos<this.listSize;
}
function hasPrev(){
    return this.pos>0;
}
function moveTo(element){
    this.pos=element;
}
function currPos(){
    return this.pos;
}
function getElement(){
    return this.dataStore[this.pos];
}

test=new List();
test.append("1");
test.append("2");
test.append("3");
test.append("4");
test.append("5");
test.insert("6","4");
test.remove(3);
console.log("列表为:"+test.toString());
console.log("列表长度:"+test.length());
test.moveTo(4);
console.log("第五个元素为:"+test.getElement());