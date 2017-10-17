function Node(element){
    this.element=element;
    this.next=null;
    this.prev=null;
}
function Linklist(){
    this.head=new Node("head");
    this.create=create;
    this.remove=remove;
    this.find=find;
    this.findLast=findLast;
    this.show=show;
}
function find(item){
    var p=this.head;
    while(p.element!=item){
        p=p.next;
    }
    return p;
}
function create(element,item){
    var p=new Node(element);
    var l=this.find(item);
    p.next=l.next;
    p.prev=l;
    l.next=p;
}
function remove(item){
    var p=this.find(item);
    if(!(p.next==null)){
        p.prev.next=p.next;
        p.next.prev=p.prev;
        p.next=null;
        p.prev=null;
    }
}
function findLast(){
    var p=this.head;
    while(!(p.next==null)){
        p=p.next;
    }
    return p;
}
function show(){
    var p=this.findLast();
    while(!(p.prev==null)){
        console.log(p.element);
        p=p.prev;
    }
}
//main 函数
var l=new Linklist();
l.create("g","head");
l.create("o","g");
l.create("d","o");
l.create("v","d");
// l.show();
l.remove("v");
l.show();