const getData = () => {
    console.log('hello wordl');
    fetch("https://jsonplaceholder.typicode.com/albums") // fetch API
    // .then ke andar (res) he ye api url he , uske aage res ko json me convert kar rahe he res.json se 
    .then((res) => res.json()) 
    // phir dusre .then me convert hua res ko .then((data)) me liye (.then me kuch bhi name paas kar sakte he)
    .then((data) => console.log(data))
    

}


getData();