(async () => {
  const res = await fetch("./order.json");

  if (!res.ok) {
    document.body.insertAdjacentHTML(
      "beforeend",
      `
    <p>Ошибка</p>
    <p>${res.status}</p>
    <p>${res.statusText}</p>
    `
    );
    return;
  }

  document.head.insertAdjacentHTML(
    "beforeend",
    `
    <style>
      table, th, td {
        border: 1px solid black;
        border-collapse: collapse;
      }

      th, td {
        padding: 3px 8px;
      }

      th {
        background-color: lightgray;
      }
    </style>
  `
  );

  const data = await res.json();

  const table = document.createElement("table");
  document.body.append(table);
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");
  table.append(thead, tbody);
  thead.insertAdjacentHTML(
    "beforebegin",
    `
    <tr>
      <th>id</th>
      <th>date</th>
      <th>fio</th>
      <th>email</th>
      <th>phone</th>
      <th>address</th>
      <th>delivery</th>
      <th>order</th>
    </tr>
  `
  );

  data.forEach((order) => {
    tbody.insertAdjacentHTML(
      "beforebegin",
      `
    <tr>
      <td>${order.id}</td>
      <td>${order.createdAt}</td>
      <td>${order.fio}</td>
      <td>${order.email}</td>
      <td>${order.phone}</td>
      <td>${order.address}</td>
      <td>${order.delivery}</td>
      <td style="font-family: monospace;">${order.order.map(
        (item, i) =>
          `${i ? "<br>" : ""}
          id:${item.id} - кол-во:${item.count} - цвет:${item.color} - размер:${item.size}`
      )}</td>
    </tr>
    `
    );
  });
})();
