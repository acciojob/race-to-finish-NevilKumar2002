 const promises = [
      new Promise(resolve => setTimeout(() => resolve('Promise 1 resolved'), Math.random() * 4000 + 1000)),
      new Promise(resolve => setTimeout(() => resolve('Promise 2 resolved'), Math.random() * 4000 + 1000)),
      new Promise(resolve => setTimeout(() => resolve('Promise 3 resolved'), Math.random() * 4000 + 1000)),
      new Promise(resolve => setTimeout(() => resolve('Promise 4 resolved'), Math.random() * 4000 + 1000)),
      new Promise(resolve => setTimeout(() => resolve('Promise 5 resolved'), Math.random() * 4000 + 1000))
    ];

    // Print the result of the first resolved promise to the output div
    Promise.any(promises)
      .then(result => {
        const outputDiv = document.getElementById('output');
        outputDiv.textContent = result;
      })
      .catch(error => {
        const outputDiv = document.getElementById('output');
        outputDiv.textContent = "All promises failed: " + error.message;
      });