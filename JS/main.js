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
              </tr>
            `
        }
        
    })
}