
let alldata = JSON.parse(localStorage.getItem("alldata")) || [];

let editIndex = -1;

showdata();

function savedata(){

    let name=document.getElementById("name").value;
    let age=document.getElementById("age").value;
    let role=document.getElementById("select").value;
    let salary=document.getElementById("salary").value;

    if(name=="" || age=="" || salary==""){
        alert("Please fill all fields");
        return;
    }

    let employee={
        name,
        age,
        role,
        salary
    };

    if(editIndex==-1){

        alldata.push(employee);

    }else{

        alldata[editIndex]=employee;
        editIndex=-1;
        document.getElementById("saveBtn").innerHTML="Save";

    }

    localStorage.setItem("alldata",JSON.stringify(alldata));

    clear();

    showdata();

}

function showdata(){

    let tableBody=document.getElementById("tableBody");

    tableBody.innerHTML="";

    alldata.forEach((emp,index)=>{

        tableBody.innerHTML+=`
        <tr>
            <td>${emp.name}</td>
            <td>${emp.age}</td>
            <td>${emp.role}</td>
            <td>${emp.salary}</td>
            <td>
                <button class="action-btn" onclick="update(${index})">Update</button>
                <button class="action-btn" onclick="Delete(${index})">Delete</button>
            </td>
        </tr>
        `;

    });

}

function update(index){

    let emp=alldata[index];

    document.getElementById("name").value=emp.name;
    document.getElementById("age").value=emp.age;
    document.getElementById("select").value=emp.role;
    document.getElementById("salary").value=emp.salary;

    editIndex=index;

    document.getElementById("saveBtn").innerHTML="Update";

}

function Delete(index){

    if(confirm("Are you sure you want to delete this employee?")){

        alldata.splice(index,1);

        localStorage.setItem("alldata",JSON.stringify(alldata));

        showdata();

    }

}

function clear(){

    document.getElementById("name").value="";
    document.getElementById("age").value="";
    document.getElementById("select").selectedIndex=0;
    document.getElementById("salary").value="";

}
