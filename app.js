function fetchData() {
    (fetch("response.json").then(resp => {
            return resp.json();
        }).then(data => {
            const html = data.departments.map(elem => {
                if (elem.jobs.length > 0)
                    return `
<label>Dział: ${elem.name}</label>
<div class="table">
<table>
<tr><th>Stanowisko:</th>${elem.jobs.map(el =>`<td> ${el.title}</td>`)}</tr>
<tr><th>Lokalizacja:</th>${elem.jobs.map(el =>`<td>${el.location.name}</td>`)}</tr>
<tr><th>Szczegóły:</th>${elem.jobs.map(el =>`<td>${el.absolute_url}</td>`)}</tr>
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

