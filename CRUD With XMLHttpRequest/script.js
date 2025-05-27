const body_container = document.getElementById('body'); //body
body_container.style.backgroundColor = 'black';
    body_container.style.display = 'flex';
    body_container.style.justifyContent = 'center';
    body_container.style.alignItems = 'center';
    body_container.style.height = '100vh'; 


    const div_container = document.getElementById('container'); //container
    div_container.style.padding= '30px';
    div_container.style.backgroundColor = 'white';
    div_container.style.color = 'black';
 div_container.style.height = '450px';
    div_container.style.width = '850px';

    const header = document.createElement('div'); //heading
    header.style.display = 'flex';
    header.style.justifyContent = 'space-between';
    header.style.alignItems = 'center'
    const heading = document.createElement('p');
    heading.innerHTML = 'Employee Details';
    heading.style.fontSize = '35px'
   
   
    const add_btn = document.createElement('button'); // add button
    add_btn.innerHTML = ' Add New +';
    add_btn.style.backgroundColor = 'rgb(91,192,222)';
    add_btn.style.color = 'white';
    add_btn.style.fontSize = '20px';
    add_btn.style.padding ='10px';
    add_btn.style.borderRadius = '30px';
    add_btn.style.border = 'none';
    add_btn.addEventListener('click', openForm);


    const table =  document.createElement('table'); //table
    table.style.border = "1px solid black";   
table.style.borderCollapse = "collapse"; 




    const thead = document.createElement('thead'); //table header
    thead.style.border = "1px solid black";   
    thead.style.borderCollapse = "collapse"; 
    
    const headerRow = document.createElement('tr'); // table header row
    // headerRow.style.border = "1px solid black";   
    // headerRow.borderCollapse = "collapse"; 
const header_datas = ['Name' ,'Email Address', 'Phone', 'Actions']
header_datas.forEach(function(t_heading){
    const header_data = document.createElement('th')
    header_data.textContent = t_heading;
    header_data.style.border = "1px solid black";   
    header_data.style.borderCollapse = "collapse";
    header_data.style.fontSize = '20px'
    header_data.style.padding = '5px 100px 5px 15px'
    headerRow.append(header_data); 


}) ;

    
    // const header_data2 = document.createElement('th')
    // header_data2.textContent = 'Email Address';
    // const header_data3 = document.createElement('th')
    // header_data3.textContent = 'Phone';
    // const header_data4 = document.createElement('th')
    // header_data4.textContent = 'Actions';
    div_container.append(header,table,); 
    
    table.append(thead,headerRow);
    
    header.append(heading,add_btn);





const tbody = document.createElement('tbody'); // table body
table.append(tbody);

//XML for READ datas 

// var Data = [];
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://6825aaca0f0188d7e72de0d5.mockapi.io/users/datas', true); 
xhr.onreadystatechange = function () {
    console.log(xhr.status)
    console.log(xhr.readyState)

    if (xhr.readyState === 4 && xhr.status === 200) {
         data = JSON.parse(xhr.responseText); 
    data.map(user => addData(user))

 
}  


};

function addData(user){
    

            const row = document.createElement('tr');

            const name = user.name;
            const email = user.email;
            const phone = user.phone;

            [name, email, phone,add_Button(user,row)].forEach(val => {
                const td = document.createElement('td');
                td.style.border = '1px solid black';
                td.style.padding = '5px';

                 if (typeof val === 'string') {
        td.textContent = val;
    } else {
        td.append(val);
    }

    
                row.append(td);
            });

             tbody.append(row);
  
}
function update_data(user,row){

            row.innerHTML = '';

    const name = user.name;
    const email = user.email;
    const phone = user.phone;

    [name, email, phone, add_Button(user, row)].forEach(val => {
        const td = document.createElement('td');
        td.style.border = '1px solid black';
        td.style.padding = '5px';

        if (typeof val === 'string') {
            td.textContent = val;
        } else {
            td.append(val);
        }

        row.append(td);
    });

}


xhr.send();
//  console.log(Data);


    // form 
    function openForm(){
    const form_container = document.createElement('div');
    form_container.style.backgroundColor = 'RGB(235 235 255)'
    form_container.style.padding = '40px'
    form_container.style.width = '300px'
    form_container.style.marginLeft ='500px'
    form_container.style.fontSize = '20px'

    
    
    const form = document.createElement('form');
    
    const namebox = document.createElement('div')
    namebox.style.margin = '15px'
    const nameLabel = document.createElement('label');
    nameLabel.textContent = 'Name: ';
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.name = 'name';
    nameInput.required = true;
    const line_break = document.createElement('br');

    form.append(namebox)
    namebox.append(nameLabel,nameInput,line_break);
    
     const emailbox = document.createElement('div')
    emailbox.style.margin = '15px'
    emailLabel = document.createElement('label');
    emailLabel.textContent = 'Email: ';
    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.name = 'email';
    emailInput.required = true;


     form.append(emailbox);
     emailbox.append(emailLabel,emailInput)

    const phonebox = document.createElement('div')
    phonebox.style.margin = '15px'
    const phoneLabel = document.createElement('label');
    phoneLabel.textContent = 'Phone: ';
    const phoneInput = document.createElement('input');
    phoneInput.type = 'tel';
    phoneInput.name = 'phone';
    phoneInput.required = true;

    phonebox.append(phoneLabel,phoneInput);
    form.append(phonebox)

    

    const create_btn = document.createElement('button')
    create_btn.innerHTML = 'Create'
    create_btn.type = 'button'
    create_btn.style.backgroundColor = 'RGB(91 192 222)'
    create_btn.style.color ='white'
    create_btn.style.border = 'none'
    create_btn.style.fontSize = '15px'
    create_btn.style.padding = '10px'
    create_btn.style.borderRadius = '20px'

    // const update_btn = document.createElement('button')
    // update_btn.innerHTML = 'Update'
    // update_btn.type = 'button'
    // update_btn.style.backgroundColor = 'RGB(91 192 222)'
    // update_btn.style.color ='white'
    // update_btn.style.border = 'none'
    // update_btn.style.fontSize = '15px'
    // update_btn.style.padding = '10px'
    // update_btn.style.borderRadius = '20px'
    

    form.append(create_btn)
    
    

    
    
create_btn.addEventListener('click', createData);

function createData(){
    const name = nameInput.value;
        const email = emailInput.value;
        const phone = phoneInput.value;

         const createData = {
    name:name,
    email:email,
    phone:phone
}
const createJsonStr = JSON.stringify(createData)
    

    const XMLPOSTrequest = new XMLHttpRequest();

    XMLPOSTrequest.open('POST', 'https://6825aaca0f0188d7e72de0d5.mockapi.io/users/datas', true); 
    XMLPOSTrequest.setRequestHeader('Content-Type', 'application/json');
    XMLPOSTrequest.onload =()=>{
    console.log(XMLPOSTrequest.responseText)
    
    addData(JSON.parse(XMLPOSTrequest.responseText))
}

    
XMLPOSTrequest.send(createJsonStr)




        form_container.remove();




    }

div_container.append(form_container);
    form_container.append(form);
}

 function openupdateForm(user,row){
    const form_container = document.createElement('div');
    form_container.style.position ='static'
    form_container.style.backgroundColor = 'RGB(235 235 255)'
    form_container.style.padding = '40px'
    form_container.style.width = '300px'
    form_container.style.marginLeft ='500px'
    form_container.style.fontSize = '20px'

    
    
    const form = document.createElement('form');
    
    const namebox = document.createElement('div')
    namebox.style.margin = '15px'
    const nameLabel = document.createElement('label');
    nameLabel.textContent = 'Name: ';
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.name = 'name';
    nameInput.required = true;
    const line_break = document.createElement('br');

    form.append(namebox)
    namebox.append(nameLabel,nameInput,line_break);
    
     const emailbox = document.createElement('div')
    emailbox.style.margin = '15px'
    emailLabel = document.createElement('label');
    emailLabel.textContent = 'Email: ';
    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.name = 'email';
    emailInput.required = true;


     form.append(emailbox);
     emailbox.append(emailLabel,emailInput)

    const phonebox = document.createElement('div')
    phonebox.style.margin = '15px'
    const phoneLabel = document.createElement('label');
    phoneLabel.textContent = 'Phone: ';
    const phoneInput = document.createElement('input');
    phoneInput.type = 'tel';
    phoneInput.name = 'phone';
    phoneInput.required = true;

    phonebox.append(phoneLabel,phoneInput);
    form.append(phonebox)

    

    // const create_btn = document.createElement('button')
    // create_btn.innerHTML = 'Create'
    // create_btn.type = 'button'
    // create_btn.style.backgroundColor = 'RGB(91 192 222)'
    // create_btn.style.color ='white'
    // create_btn.style.border = 'none'
    // create_btn.style.fontSize = '15px'
    // create_btn.style.padding = '10px'
    // create_btn.style.borderRadius = '20px'

    const update_btn = document.createElement('button')
    update_btn.innerHTML = 'Update'
    update_btn.type = 'button'
    update_btn.style.backgroundColor = 'RGB(91 192 222)'
    update_btn.style.color ='white'
    update_btn.style.border = 'none'
    update_btn.style.fontSize = '15px'
    update_btn.style.padding = '10px'
    update_btn.style.borderRadius = '20px'
    

    form.append(update_btn)
    
    

    
    
update_btn.addEventListener('click', function updateData(){
    const name = nameInput.value;
        const email = emailInput.value;
        const phone = phoneInput.value;

         const updateuser = {
    name:name,
    email:email,
    phone:phone
}
const updateJsonStr = JSON.stringify(updateuser)
    

    const XMLPUTrequest = new XMLHttpRequest();

    XMLPUTrequest.open('PUT', `https://6825aaca0f0188d7e72de0d5.mockapi.io/users/datas/${user.id}`, true); 
    XMLPUTrequest.setRequestHeader('Content-Type', 'application/json');
    XMLPUTrequest.onload =()=>{
    console.log(XMLPUTrequest.responseText)
    
    update_data(JSON.parse(XMLPUTrequest.responseText),row)
}
XMLPUTrequest.send(updateJsonStr)

        form_container.remove();
    




    });

div_container.append(form_container);
    form_container.append(form);
}




function add_Button(user,row){

    const buttonContainer = document.createElement('div')
    buttonContainer.style.display = 'flex';
    buttonContainer.style.gap = '6px';
    buttonContainer.style.marginLeft = 'auto';
    
    
    editButton = document.createElement('button');
    editButton.innerHTML = '✏️';
    editButton.style.fontSize = '15px';
    editButton.style.padding = '10px';
    editButton.style.backgroundColor = 'white';
    editButton.style.color = 'white';
    editButton.style.border = 'none';
    

     const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '🗑️';
    deleteButton.style.fontSize = '15px';
    deleteButton.style.padding = '10px';
    deleteButton.style.backgroundColor = 'white';
    deleteButton.style.color = 'white';
    deleteButton.style.border = 'none';
    buttonContainer.append(editButton, deleteButton);
    
   


deleteButton.addEventListener('click', () => deleteData(user.id, row));
function deleteData(id,row){
    const xmlDELETErequest  = new XMLHttpRequest();
     
     const url = `https://6825aaca0f0188d7e72de0d5.mockapi.io/users/datas/${id}`


xmlDELETErequest.open("DELETE",url, true)


xmlDELETErequest.setRequestHeader('content-type','application/json')

xmlDELETErequest.onload =()=>{

    row.remove();
}
xmlDELETErequest.send()
}

editButton.addEventListener('click', () => openupdateForm(user, row));
return buttonContainer;
}
   

    