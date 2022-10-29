// const getDeta = () => {

// alert(123);
//         fetch("https://jsonplaceholder.typicode.com/comments")
//         .then((res) => res.json() )
//         .then((data) => console.log(data))

// }

// getDeta()


const button = document.getElementById("load-data");
var count = 4;

button.addEventListener("click", () => {
        count = count + 4 ;
        getData();
})

const getData = () => {
        // fetch("https://jsonplaceholder.typicode.com/todos")
        //         .then((res) => res.json())
        //         .then((data) => {
        //                 console.log(data[0].completed)

        //                 var render = "";
        //                 data.map((item) => {
        //                         return(
        //                                 // render = render + "</br>" +`${item.userId}`
        //                                 render = render + `
        //                                 <h1 style = "color:red;">User id: ${item.userId}</h1>
        //                                 <h2 style = "color:green;">Title: ${item.title}</h2>
        //                                 <h2 style = "color:purple;">completed: ${item.completed}</h2>
        //                                 `
        //                         )
        //                 })
        //                 document.getElementById("data").innerHTML = render;
        //         })

        // -----------------------------------------------
        fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => {
                console.log(data[0].title);
                
                var render = " " ;
                data.slice(0,count).map((item) => {
                        return(
                                render = render + `
                                <div class="card">
                                <h1>Title: ${item.title}</h1>
                                <img src="${item.image}" alt="images"> 
                                </div> 
                                `
                        )
                })
                document.getElementById("data").innerHTML = render;

        })
        // ------------------------------------------------
}

getData();
















// dummy api
// http://dummy.restapiexample.com/api/v1/employees
// https://jsonplaceholder.typicode.com/todos   
