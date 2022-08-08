function fetchData() {
    (fetch("response.json").then(resp => {
            return resp.json();
        }).then(data => {
            const html = data.departments.map(elem => {
                if (elem.jobs.length > 0)
                    return `
<div class="table">
<label>Dział: ${elem.name}</label>
<table>
<tr><td>Pozycja:</td><td>${elem.jobs[0].title}</td></tr>
<tr><td>Lokalizacja:</td><td>${elem.jobs[0].location.name}</td></tr>
<tr><td>Szczegóły:</td><td>${elem.jobs[0].absolute_url}</td></tr>
</table>
</div>
`
            }).join("");
            document.querySelector("#app").insertAdjacentHTML('afterbegin', html);
        }).catch(error => {
            console.log(error);
        })
    )
}

fetchData();