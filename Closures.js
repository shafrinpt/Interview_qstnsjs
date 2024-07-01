function x(){
    var a = 7;
    function y(){
        console.log(a);
    }
    y();
}
x();

//2.
function add(a,b){
    function myAdd(){
        const c = a +b;
        return c;
    }
    return myAdd;
}

function main(){
    const res = add(2,3);
    const val = res();
    console.log(val);
}
main();

//3.
function init() {
    var name = "Mozilla";
    function displayName() {
      
      console.log(name); 
    }
    displayName();
  }
  init();
  

