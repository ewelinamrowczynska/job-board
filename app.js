function fetchData() {
    (fetch("response.json").then(resp => {
            return resp.json();
        }).then(data => {
            const html = data.departments.map(elem => {
                if (elem.jobs.length > 0)
                    return `
<label>Dział: ${elem.name}</label>
<table>
<th>Stanowisko:</th>
<th>Lokalizacja:</th>
<th>Szczegóły:</th>
${elem.jobs.map(el => `<tr>
<td> ${el.title}</td>
<td>${el.location.name}</td><td><a href="${el.absolute_url}"> ${el.absolute_url}</a></td></tr>`)}
</table>
`
            }).join("");
            document.querySelector("#app").insertAdjacentHTML('afterbegin', html);
        }).catch(error => {
            console.log(error);
        })
    )
}

fetchData();

