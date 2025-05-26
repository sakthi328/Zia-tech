const body_container = document.getElementById('body');
body_container.style.backgroundColor = 'black';
    body_container.style.display = 'flex';
    body_container.style.justifyContent = 'center';
    body_container.style.alignItems = 'center';
    body_container.style.height = '100vh'; 

    // Style the inner container
    const div_container = document.getElementById('container');
    div_container.style.display = 'flex';
    div_container.style.justifyContent = 'center';
    div_container.style.alignItems = 'center';
    div_container.style.backgroundColor = 'rgb(230,185,252)';
    div_container.style.color = 'black';
    div_container.style.height = '450px';
    div_container.style.width = '850px';

    // card_container

    const card_container = element('div');
    // card_container.style.display = 'flex';
    // card_container.style.justifyContent = 'center';
    // card_container.style.alignItems = 'center';
    card_container.style.backgroundColor = 'white';
    card_container.style.height = '350px';
    card_container.style.width = '450px';
    

    const title = element('h2');
    title.style.color ='rgb(112,97,198)'
    title.style.marginLeft = '30px'
      title.innerHTML = 'To-Do App';
      card_container.append(title);

      const input_box = element('input');
      input_box.setAttribute('type', 'text'); 
input_box.setAttribute('placeholder', 'Enter a list');
      input_box.style.width = '300px'
      input_box.style.padding = '10px';
      input_box.style.fontSize = '14px';
      input_box.style.border = '1px solid #ccc';
      input_box.style.borderRadius = '4px';
      input_box.style.marginLeft = '50px'
      card_container.append(input_box);

const buttons = element('button');
buttons.innerHTML = 'Add';
buttons.style.fontSize = '15px';
buttons.style.padding = '10px';
buttons.style.marginLeft = '20px'
buttons.style.backgroundColor = 'rgb(84,67,232)'
buttons.style.color = 'white';
buttons.style.border = 'none';

card_container.append(buttons);


const list = element('ul');
list.style.marginTop = '20px';
list.style.paddingLeft = '50px';
list.style.listStyle = 'none';
card_container.append(list);

function addList(){
      let value = input_box.value;
      if (value !== '') {
    const input_list = element('li');
    input_list.innerHTML = value;
    input_list.style.display = 'flex';
    input_list.style.alignItems = 'center';
    input_list.style.justifyContent = 'space-between';
    input_list.style.padding = '6px';
    input_list.style.marginBottom = '5px';
    input_list.style.cursor = 'pointer';

    
    
    
    
    const buttonContainer = element('div');
    buttonContainer.style.display = 'flex';
    buttonContainer.style.gap = '6px';
    buttonContainer.style.marginLeft = 'auto';
    
    
    editButton = element('button');
    editButton.innerHTML = 'Edit';
    editButton.style.fontSize = '15px';
    editButton.style.padding = '10px';
    editButton.style.backgroundColor = 'green';
    editButton.style.color = 'white';
    editButton.style.border = 'none';
    
    editButton.addEventListener('click', () => {
      const newValue = input_box.value;
         if (newValue !== '') {
            input_list.innerHTML = newValue;

            input_list.append(buttonContainer);
            input_box.value = '';
            // buttonContainer.append(editButton);
            // buttonContainer.append(deleteButton);
         }
         });


         
    const deleteButton = element('button');
    deleteButton.innerHTML = 'Delete';
    deleteButton.style.fontSize = '15px';
    deleteButton.style.padding = '10px';
    deleteButton.style.backgroundColor = 'red';
    deleteButton.style.color = 'white';
    deleteButton.style.border = 'none';
    deleteButton.addEventListener('click', () => {
      input_list.remove(); // Remove the list item
    });

    // Append buttons to the list item
    buttonContainer.append(editButton);
    buttonContainer.append(deleteButton);





input_list.append(buttonContainer);

    list.append(input_list);
    input_box.value = '';
      }

}
buttons.addEventListener('click', addList);
function element(elem){
      return document.createElement(elem)
}



    


    div_container.append(card_container);