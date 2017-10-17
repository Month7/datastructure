function Node(element){
    this.element=element;
    this.next=null;
}
function Linklist(){
    this.head=new Node("head");
    this.create=create;
    this.remove=remove;
    this.show=show;
    this.find=find;
    this.findPrevious=findPrevious;
}
function find(element){
    var p=this.head;
    while(p.element!=element){
        p=p.next;
    }
    return p;
}
function create(newData,item){
    var p=new Node(newData);
    var l=this.find(item);
    p.next=l.next;
    l.next=p;
}
function show(){
    var p=this.head;
    while(!(p.next==null)){
        p=p.next;
        console.log(p.element);
    }
}
function findPrevious(item){
    var p=this.head;
    while((!(p.next==null))&&(p.next.element!=item)){
        p=p.next;
    }
    return p;
}
function remove(item){
    var index=this.findPrevious(item);
    if(!(index.next==null)){
        index.next=index.next.next;
    }
}
var link=new Linklist();
link.create("wo","head");
link.create("hai","wo");
link.create("shi","hai");
link.show();
link.remove("wo");
link.show();