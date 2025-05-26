

const body_container = document.getElementById('body');
    body_container.style.backgroundColor = 'black';
    body_container.style.display = 'flex';
    body_container.style.justifyContent = 'center';
    body_container.style.alignItems = 'center';
    body_container.style.height = '100vh';

    const div_container = document.getElementById('container');
    div_container.style.backgroundColor = 'white';
    div_container.style.color = 'black';
    div_container.style.height = '450px';
    div_container.style.width = '600px';
    div_container.style.padding = '20px';
    div_container.style.boxSizing = 'border-box';

    const card_container = document.createElement('div');
    card_container.style.backgroundColor = 'white';

    const inputBox = document.createElement('input');
    inputBox.setAttribute('type', 'text');
    inputBox.style.width = '500px';
    inputBox.style.margin = '20px';
    inputBox.style.height = '60px';
    inputBox.style.fontSize = '30px';
    inputBox.style.border = '1px solid rgb(213,213,213)'
    inputBox.style.backgroundColor = 'white'
    inputBox.style.borderRadius ='7px'
    inputBox.style.textAlign='right'
    inputBox.disabled = true;

    const table_container = document.createElement('div');
    table_container.style.display= 'flex'
    table_container.style.justifyContent='center'
    const table = document.createElement('table');

    const buttonRows = [
      ['7', '8', '9', '/'],
      ['4', '5', '6', '*'],
      ['1', '2', '3', '-'],
      ['0', 'C', '=', '+']
    ];

    buttonRows.forEach(rowData => {
      const tr = document.createElement('tr');
      rowData.forEach(char => {
        const td = document.createElement('td');
        const button = document.createElement('button');

        button.innerHTML = char;
        button.style.width = '60px';
        button.style.height = '60px';
        button.style.fontSize = '20px';
        button.style.margin = '5px';
        button.style.width = '90px'
        button.style.backgroundColor = 'rgb(229,237,255)'
        button.style.border = 'none'
        button.style.borderRadius ='40px'

        button.addEventListener('click', () => {
          if (char === 'C') {
            inputBox.value = '';
          } else if (char === '=') {
        
              inputBox.value = eval(inputBox.value);
          } else {
            inputBox.value += char;
          }
        });

        td.append(button);
        tr.append(td);
      });
      table.append(tr);
    });

    table_container.append(table);
    card_container.append(inputBox);
    card_container.append(table_container);
    div_container.append(card_container);