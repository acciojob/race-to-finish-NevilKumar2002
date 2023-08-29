 const promises = [
      new Promise((resolve,reject)=>{
		  setTimeout(()=>{
			  resolve("first array");
		  },1000)
	  })
	  new Promise((resolve,reject)=>{
		  setTimeout(()=>{
			  resolve("second array");
		  },2000)
	  })
	  new Promise((resolve,reject)=>{
		  setTimeout(()=>{
			  resolve("third array");
		  },3000)
	  })
	 new Promise((resolve,reject)=>{
		  setTimeout(()=>{
			  resolve("fourth array");
		  },4000)
	  })
	  new Promise((resolve,reject)=>{
		  setTimeout(()=>{
			  resolve("fifth array");
		  },5000)
	  })
]

let x=Promise.any(promises);
x.then((data)=>{
	let output=document.getElementById("output");
	output.innerText=data;
})



    // Print the result of the first resolved promise to the output div
    