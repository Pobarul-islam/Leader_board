document.getElementById('topPlayers').style.color = 'rgba(22,222, 22)';

document.getElementById('topblogs').style.color = 'red';

document.getElementById('players').style.backgroundColor = 'rgba(162, 14, 91, 0.8)';

// list create in js

     function listbutton(){
            let list = document.getElementById('myList');
            let value = document.getElementById('to-do').value;
            let li = document.createElement('Li');
            let textNode = document.createTextNode(value);
            li.appendChild(textNode);
         list.appendChild(li);
         
};

