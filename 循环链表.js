function Node(element){
    this.element=element;
    this.next=null;
}
function Linklist(){
    this.head=new Node("head");
    this.head.next=this.head;
    this.find=find;
    this.insert=insert;
    this.remove=remove;
    this.show=show;
    this.findPrev=findPrev;
}
function find(item){
    var p=this.head;
    while(p.element!=item){
        p=p.next;
    }
    return p;
}
function insert(newElement,item){
    var p=new Node(newElement);
    var l=this.find(item);
    p.next=l.next;
    l.next=p;
}
function findPrev(item){
    var p=this.head;
    while(!(p.next.element==item)){
        p=p.next;
    }
    return p;
}
function remove(item){
    var p=this.findPrev(item);
    p.next=p.next.next;
}
function show(){
    var p=this.head;
    while((!(p.next==null))&&(!(p.next.element=="head"))){
        console.log(p.next.element);
        p=p.next;
    }
}
//main函数
var l=new Linklist();
l.insert("tai","head");
l.insert("cai","tai");
l.insert("le","cai");
l.insert("a","le");
l.remove("a");
l.show();