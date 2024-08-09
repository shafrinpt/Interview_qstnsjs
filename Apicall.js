async function fechData(){
    try{
        let titles = []
        let response = await fetch('https://jsonplaceholder.typicode.com/todos')
        let data = await response.json();
        console.log(data.slice(0,10));

        for(let i =0;i<data.length;i++){
            titles.push(data[i])
        }
        return titles;
       
       
        
    }catch(error){
        console.log(error.message);
    }

}
fechData()