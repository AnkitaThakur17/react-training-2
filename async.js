async function getUserData() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Error fetching data:", error);
    }
}

getUserData(); // o/p {id: 1, name: 'Leanne Graham', username: 'Bret', email: 'Sincere@april.biz', address: {…}, …}


// example 2
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("API data received"), 2000);
    });
}

async function getData() {
    try {
        console.log("Fetching data...");
        let data = await fetchData();
        console.log(data);
    } catch (error) {
        console.log("Error:", error);
    }
}

getData();

