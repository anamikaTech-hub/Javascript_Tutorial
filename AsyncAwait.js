///--------------ASYNC AWAIT ---------------///

async function fetchData() {
    try {
        let response = await fetch('http//:api.example.com/data');
        let data = await response.json();
        console.log(data);  
    } catch (error) {
        console.log(error);   
    }
}

fetchData();