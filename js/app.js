const seedData = [
{first_name: 'Serena', last_name: 'Williams', select: 'Tennis',
team:'United', country:'USA'},
{first_name: 'Sania', last_name: 'Nehwal', select: 'Badminton',
team:'Deccan', country:'INDIA'},
{first_name: 'Jane', last_name: 'Ross', select: 'FootBall',
team:'Scotland national FootBall Team', country:'Scotland'},
{first_name: 'Lindsay', last_name: 'Agnew', select: 'Soccer',
team:'Canada Womens National Soccers Team', country:'Canada'},
{first_name: 'Elena', last_name: 'Danilova', select: 'FootBall',
team:'Russia Womens National FootBall Team', country:'Russia'}

];

const formListHandler = function(event) {
 event.preventDefault();
 const form = event.target;
 listItemFromform(form);
 form.reset();

};
const listItemFromform = function(form) {
  const sport = formValues(form);
  const listItem = createListItem(sport);
  addListItem(listItem);

};
  const formValues = (form) => ({
  first_name: form.first_name.value,
  last_name: form.last_name.value,
  select: form.select.value,
  team: form.team.value,
  country: form.country.value
});


const createListItem = function(sport) {
  const li = document.createElement('li');
  li.textContent = sport.first_name;

const last_name = document.createElement( 'span');
last_name.classList.add('last_name');
last_name.textContent = sport.last_name;
li.appendChild(last_name);

const select = document.createElement('span');
select.classList.add('select');
select.textContent = sport.select;
li.appendChild(select);

const team = document.createElement('span');
team.classList.add('team');
team.textContent = sport.team;
li.appendChild(team);

const country = document.createElement('span');
country.textContent = sport.country;
country.classList.add('country');
li.appendChild(country);
return li;
};
const addListItem = function(listItem) {
 const listContainer = document.querySelector('#list');
 listContainer.appendChild(listItem);

};

document.addEventListener('DOMContentLoaded', () =>{
  const form = document.querySelector('form');
  form.addEventListener('submit', formListHandler);


  seedData.forEach((sport) => {
    const li = createListItem(sport);
    addListItem(li);
  });
  // const deleteList = document.createElement('form-element')
  // deleteList.textContent = form.delete;

  const deleteListButton = document.querySelector('#delete');
   deleteListButton.addEventListener('click', handleDeleteAllClick);

})

const handleDeleteAllClick = function (event) {
const addList = document.querySelector('#list');
addList.innerHTML = '';
}
