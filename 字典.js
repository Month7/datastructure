function Dictionary(){
    this.dataStore=new Array();
    this.add=add;
    this.remove=remove;
    this.show=show;
    this.find=find;
}
function add(key,value){
    this.dataStore[key]=value;
}
function find(key){
    return this.dataStore[key];
}
function remove(key){
    delete this.dataStore[key];
}
function show(){
    // var datakeys=Array.prototype.slice.call(object.keys(this.dataStore));
    // for(var key in datakeys){
    //     console.log(datakeys[key]+">"+this.dataStore[datakeys[key]]);
    // }
    Object.keys(this.dataStore).forEach(function(key){
        console.log(key+">"+this.dataStore[key]);
    },this);
}
//main 方法
var book=new Dictionary();
book.add("yin","1");
book.add("zheng","2");
book.show();