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
<th>Stanowisko:</th>
<th>Lokalizacja:</th>
<th>Szczegóły:</th>
${elem.jobs.map(el =>`<tr><td> ${el.title}</td><td>${el.location.name}</td><td>${el.absolute_url}</td></tr>`)}
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

