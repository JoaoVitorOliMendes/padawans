tbody = document.getElementById("tbody");
i = 0;

function listarposts()
{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((result) => {return result.json();})

    .then((json) => 
    {
        try {
        do {
        tbody.innerHTML += 
        `
        <tr>
        <td>${json[i].userId}</td>
        <td>${json[i].id}</td>
        <td>${json[i].title}</td>
        <td>${json[i].body}</td>
        </tr>
        `
        i++
        } while (i>0);

        } catch (error) {
            tbody.innerHTML += 
            `
              <tr>
              <td>End</td>
              <td>End</td>
              <td>End</td>
              <td>End</td>
              </tr>
            `
        }
        
    })
}
function listaralbums()
{
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then((result) => {return result.json();})

    .then((json) => 
    {
        try {
        do {
        tbody.innerHTML += 
        `
        <tr>
        <td>${json[i].userId}</td>
        <td>${json[i].id}</td>
        <td>${json[i].title}</td>
        </tr>
        `
        i++
        } while (i>0);

        } catch (error) {
            tbody.innerHTML += 
            `
            <tr>
            <td>End</td>
            <td>End</td>
            <td>End</td>
            <td>End</td>
            </tr>
            `
        }
        
    })
}
function listartodos()
{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then((result) => {return result.json();})

    .then((json) => 
    {
        try {
        do {
        tbody.innerHTML += 
        `
        <tr>
        <td>${json[i].userId}</td>
        <td>${json[i].id}</td>
        <td>${json[i].title}</td>
        <td>${json[i].completed}</td>
        </tr>
        `
        i++
        } while (i>0);

        } catch (error) {
            tbody.innerHTML += 
            `
            <tr>
            <td>End</td>
            <td>End</td>
            <td>End</td>
            <td>End</td>
            </tr>
            `
        }
        
    })
}
function sorttablec(n) {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("table");
    switching = true;
    rows = table.rows;
    while (switching) {
      switching = false;
      rows = table.rows;
      for (i = 1; i < (rows.length); i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("TD")[n].innerHTML;
        y = rows[i + 1].getElementsByTagName("TD")[n].innerHTML;
        if(y.toLowerCase() == "end")
        {
            break;
        }
        if (parseInt(x) > parseInt(y)) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        /*If a switch has been marked, make the switch
        and mark that a switch has been done:*/
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }
function sorttabled(n) {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("table");
  switching = true;
  rows = table.rows;
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[n].innerHTML;
      y = rows[i + 1].getElementsByTagName("TD")[n].innerHTML;
      if(y.toLowerCase() == "end")
      {
          break;
      }else if(y == undefined)
      {
          break;
      }
      if (parseInt(x) < parseInt(y)) {
        //if so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }  
}