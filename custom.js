const table = document.getElementById("userTable");

function saveProject(){
    let data = {
       name:document.getElementById("name").value || "None",
        project_name:document.getElementById("project_name").value || "None",
        date:document.getElementById("date").value || "None",
    };
    fetch("https://reqres.in/api/users",{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    })
    .then(response=>response.json())
    .then(data=>{
        table.innerHTML+=`<tr>
        <td><input type="text" class="form-control" id="" value="${data.name}"/>
        </td>
        <td><input type="text" class="form-control" id="" value="${data.project_name}"/>
        </td>
        <td><input type="text" class="form-control" id="" value="${data.date}"/>
        </td>
        </tr>`
    })
}