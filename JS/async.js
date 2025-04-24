console.log("first");
console.log("second");
setTimeout(() => {
  console.log("third");
}, 0); // Asynchronous operation
console.log("fourth");
console.log("fifth");

//callback function
function fetchData(callback) {
  setTimeout(() => {
    const data = "Data fetched from server";
    callback(data); // Call the callback function with the fetched data
  }, 2000); // Simulating a delay of 2 seconds
}

//promises

function fetchData() {
  return new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Parse the response as JSON
      })
      .then((data) => {
        resolve(data); // Resolve the promise with the fetched data
      })
      .catch((error) => {
        reject(error); // Reject the promise if an error occurs
      });
  });
}

fetchData();
// Call the fetchData function and handle the promise
fetchData()
  .then((data) => {
    console.log("Fetched data:", data); // Log the fetched data
  })
  .catch((error) => {
    console.error("Error:", error); // Handle any errors that occur during the fetch
  });

async function getData() {
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts"); // Wait for the promise to resolve

    const jsonData = await data.json(); // Parse the response as JSON
    console.log(jsonData); // Log the fetched data
  } catch (error) {
    console.error("Error:", error); // Handle any errors that occur during the fetch
  }
}

getData(); // Call the async function to fetch data
