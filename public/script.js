var btn = document.getElementById('btn');
		  var text = document.getElementById('text');
		  let xfg = {};
		btn.addEventListener('click', async(e) => {
			document.getElementById('output').innerHTML = '<i class="fa fa-envelope"></i>';
			const hourGlass = () => {
				document.getElementById('hourGlass').innerHTML += '&#xf251;';
			};
			//hourGlass();
			fetch(`/`, {
			method: "post",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({text: `${text.value}`})
			})
		.then (res => 
				res.json()
			 )
        .then(data => {
    	document.getElementById('output').innerHTML = '';
			// console.log(data)
			for (var i = 0; i < data.organic_results.length; i++) {
				document.getElementById('output').innerHTML += `
				<div class="card">
				<div class="card-body">
				<h5>${data.organic_results[i].title}</h5>
				<br>
				<a href="${data.organic_results[i].url}">${data.organic_results[i].url}</a>
				<br>
				<p>${data.organic_results[i].snippet}</p>
				</div>
				</div>
				`
				//console.log(data.organic_results[i].snippet)
			}
		})
		.catch(err => {
			if (err) {
				 document.getElementById('output').innerHTML = '';
        document.getElementById('output').innerHTML = `
                  <div class="card">
        <div class="card-body">
        <h5>Connection to the server Timed out</h5>
        </div>
        </div>
        `
			} else {
				console.log("Success")
			};
		})
		})
