
function appendShrekRow(character) {
  console.log('adding character', character);
  const tableBody = document.getElementById('shrek-table').childNodes[3];

  const newRow = document.createElement('tr');
  const characterNameData = document.createElement('td');
  characterNameData.innerText = character.character;
  newRow.appendChild(characterNameData);

  const characterActorData = document.createElement('td');
  characterActorData.innerText = character.actor;
  newRow.appendChild(characterActorData);

  const characterDescriptionData = document.createElement('td');
  characterDescriptionData.innerText = character.description;
  newRow.appendChild(characterDescriptionData);

  tableBody.appendChild(newRow);

  // the below code is easy but is vulnerable to html injection
  // tableBody.innerHTML += `
  // <tr>
  //   <td>${character.character}</td>
  //   <td>${character.actor}</td>
  //   <td>${character.description}</td>
  // </tr>
  // `;
}

appendShrekRow({
  character: 'Puss In Boots',
  actor: 'Antonio Banderas',
  description: 'A cat with a hat and sword in boots'
});

function addCharacterFromForm(event) {
  console.log('adding character from form data');
  // prevent default form submission functionality
  event.preventDefault();

  let characterName = document.getElementById('character-name-input').value;
  let actor = document.getElementById('character-actor-input').value;
  let description = document.getElementById('character-description-input').value;
  const character = {
    character: characterName,
    actor: actor,
    description: description
  };

  appendShrekRow(character);
  event.target.reset(); // reset form data
}