const api = () => {

    fetch("https://jsonplaceholder.typicode.com/comments")
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            var render = '';
            data.map((item) => {
                return (
                    render = render + `
                <h1>${item.name}</h1>
                <h1>${item.id}</h1>
            `
                )
            })
            document.getElementById("data").innerHTML = render;

        })

}

api();