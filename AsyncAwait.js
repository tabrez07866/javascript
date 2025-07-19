/* 
Async/await is a modern way to handle asynchronous operations in JavaScript. It makes asynchronous code look and behave more like synchronous code, which is easier to understand.
*/

//Async --> Make a function return a Promise
//Await --> Pauses the function execution until a Promise resolves

//Regular function
// function fetchData(){
//     return fetch('https://api.example.com/data')  //returns a promise
// }

//Async-await version

async function fetchJoke() {
  try {
    // Using a working jokes API (official_joke_api has CORS issues)
    const response = await fetch("https://official-joke-api.appspot.com/random_joke", {
      method: "GET",
      headers: {
        "Accept": "application/json",  // We're accepting JSON, not sending
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const joke = await response.json();
    console.log("Setup:", joke.setup);
    console.log("Punchline:", joke.punchline);
    
    return joke;
  } catch (error) {
    console.error("Failed to fetch joke:", error);
    return null;
  }
}

// Call the function
fetchJoke().then(joke => {
  if (joke) {
    console.log("Here's your joke!");
  }
});
/*
Working step by step

1. When you call a async function,it returns a promise immediately
2. Inside the fn ,await pauses execution until promise settles
3. If promise resolves,await returns the resolved value
4.If the promise rejects , it throws an error yo can catch
*/
