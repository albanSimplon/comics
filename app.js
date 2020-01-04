//https://www.superheroapi.com/api.php/10157823447012103/search/batman

// const getTodosAsync = async function () {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     if (response.ok) {
//         const jsonData = await response.json();
//         console.log(jsonData);
//     } else {
//         console.error('server response : ' + response.status);
//     }
// }

// getTodosAsync();

const getTodosAsync = async function () {
    try {
        const response = await fetch('https://www.superheroapi.com/api.php/10157823447012103/search/batman');
        if (response.ok) {
            const jsonData = await response.json();
            console.log(jsonData);
        } else {
            console.error('server response : ' + response.status);
        }
    } catch (error) {
        console.error(error);
    }
}

getTodosAsync();

