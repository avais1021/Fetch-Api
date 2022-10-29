// console.log('hello world');

// const getData = () =>{
//     url="https://www.beautifulhomes.com/content/asianpaintsbeautifulhomes/asianpaintsbeautifulhomesapi/articlepostapi.json?searchpath=/content/asianpaintsbeautifulhomes/us/en/magazine/spaces&limit="
//     // url="https://jsonplaceholder.typicode.com/posts"
//     fetch(url).then((res)=>{
//         return res.json();
//     })
//     .then((data)=> console.log("data",data))
//     .catch((err)=>console.log(err))
// }

// getData();

// const getData = () => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((res)=>{
//         return res.json();
//     })
//     .then((data)=>{
//         return console.log(data);
//     })
// }

const loadData = document.getElementById('load-data');

var count = 8;
   
loadData.addEventListener('click', function () {
    count += 8;
    getData();
})
console.log('clicked');

const getData = () => {
    console.log(count);

    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            // return console.log(data[0].title);
            let render = "";
            
            data.slice(0,count).map((items) => {
                // render +=
                // render = 
                render = render + `
                <h3>Title: ${items.title} </h3>
                <p>id: ${items.id}</p>
                <p>Description: ${items.body}</p>
            `
            });
            document.getElementById("data").innerHTML = render;

           

        })
        .catch((error) => {
            return console.log("error", error);
        })
        // button functionality 
       
        
}



getData();

