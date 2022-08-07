function fetchData() {
    (fetch("response.json").then(resp => {
            return resp.json();
        }).then(data => {
            console.log(data.departments);
            const html = data.departments.map(elem => {
                return `
<div class="table">
<label>Dział: ${elem.name}</label>
<table>
<tr><td>Pozycja:</td><td>elem.jobs[0].metadata[1].title</td></tr>
<tr><td>Lokalizacja:</td><td>elem.jobs[0].location</td></tr>
<tr><td>url:</td><td>elem.jobs[0].absolute_url</td></tr>
</table>
</div>
`
            }).join("");
            console.log(html);
            document.querySelector("#app").insertAdjacentHTML('afterbegin', html);
        }).catch(error => {
            console.log(error);
        })
    )
}

fetchData();