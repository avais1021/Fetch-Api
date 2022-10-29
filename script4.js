

const getData = () => {
    fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            var render = "";
            data.slice(0, count).map((item) => {
                return (
                    render = render + `
                    <div class="card">
                     <h2>${item.title}</h2>
                     <img src="${item.image}" alt="">
                    </div>
             
                    `
                )
            })
            document.getElementById("box").innerHTML = render;
        })
}

getData();

const btn = document.getElementById("load-data");
var count = 2;
btn.addEventListener("click", () => {
    // alert(12);
    count = count + 2;
    console.log(count)
    getData();
})