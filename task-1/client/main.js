document.getElementById("fetchBtn").addEventListener("click", () => {
  fetch("https://hack2skill-task1-production.up.railway.app/fetch-data")
    .then((response) => response.json())
    .then((data) => {
      const tableBody = document.getElementById("dataBody");
      tableBody.innerHTML = "";

      data.forEach((row) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${row.team_name}</td>
            <td>${row.full_name}</td>
            <td>${row.email}</td>
            <td>${row.number}</td>
            <td>${row.city}</td>
            <td>${row.url}</td>
          `;
        tableBody.appendChild(tr);
      });
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });
});
