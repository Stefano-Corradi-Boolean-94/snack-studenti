/*
Abbiamo un elenco degli studenti di una facoltà
Ogni studente ha un nome, un cognome, un numero di matricola e un elenco di voti.
Dobbiamo creare un nuovo elenco dove ogni studente ha un nome-cognome, matricola e media voti
*** BONUS
Aggiungere la foto o l’avatar dello studente e stampare tutti gli studenti con delle card HTML in ordine alfabetico per cognome

*/

const teamContainer = document.querySelector('.team-container');

const students = [
  {
    name:'Wayne',
    lastname:'Barnett',
    code: getRandomNumber(9999,100000),
    image: 'wayne-barnett-founder-ceo.jpg',
    votes:[
      {
        subject: 'italiano',
        vote: getRandomNumber(1,10)
      },
      {
        subject: 'storia',
        vote: getRandomNumber(1,10)
      },
      {
        subject: 'geografia',
        vote: getRandomNumber(1,10)
      },
      {
        subject: 'matematica',
        vote: getRandomNumber(1,10)
      },
    ]
  },
  {
    name:'Angela',
    lastname:'Caroll',
    code: getRandomNumber(9999,100000),
    image: 'angela-caroll-chief-editor.jpg',
    votes:[
      {
        subject: 'italiano',
        vote: getRandomNumber(1,10)
      },
      {
        subject: 'storia',
        vote: getRandomNumber(1,10)
      },
      {
        subject: 'geografia',
        vote: getRandomNumber(1,10)
      },
      {
        subject: 'matematica',
        vote: getRandomNumber(1,10)
      },
    ]
  },
  {
    name:'Walter',
    lastname:'Gordon',
    code: getRandomNumber(9999,100000),
    image: 'walter-gordon-office-manager.jpg',
    votes:[
      {
        subject: 'italiano',
        vote: getRandomNumber(1,10)
      },
      {
        subject: 'storia',
        vote: getRandomNumber(1,10)
      },
      {
        subject: 'geografia',
        vote: getRandomNumber(1,10)
      },
      {
        subject: 'matematica',
        vote: getRandomNumber(1,10)
      },
    ]
  },
  {
    name:'Angela',
    lastname:'Lopez',
    code: getRandomNumber(9999,100000),
    image: 'angela-lopez-social-media-manager.jpg',
    votes:[
      {
        subject: 'italiano',
        vote: getRandomNumber(1,10)
      },
      {
        subject: 'storia',
        vote: getRandomNumber(1,10)
      },
      {
        subject: 'geografia',
        vote: getRandomNumber(1,10)
      },
      {
        subject: 'matematica',
        vote: getRandomNumber(1,10)
      },
    ]
  },
  {
    name:'Scott',
    lastname:'Estrada',
    code: getRandomNumber(9999,100000),
    image: 'scott-estrada-developer.jpg',
    votes:[
      {
        subject: 'italiano',
        vote: getRandomNumber(1,10)
      },
      {
        subject: 'storia',
        vote: getRandomNumber(1,10)
      },
      {
        subject: 'geografia',
        vote: getRandomNumber(1,10)
      },
      {
        subject: 'matematica',
        vote: getRandomNumber(1,10)
      },
    ]
  },
  {
    name:'Barbara',
    lastname:'Ramos',
    code: getRandomNumber(9999,100000),
    image: 'barbara-ramos-graphic-designer.jpg',
    votes:[
      {
        subject: 'italiano',
        vote: getRandomNumber(1,10)
      },
      {
        subject: 'storia',
        vote: getRandomNumber(1,10)
      },
      {
        subject: 'geografia',
        vote: getRandomNumber(1,10)
      },
      {
        subject: 'matematica',
        vote: getRandomNumber(1,10)
      },
    ]
  },
];

// metto in ordine alfabetico l'array delgi studenti
students.sort((a, b) => a.lastname.localeCompare(b.lastname))

// rimappo l'arrai degli studenti
const studentsRemap = students.map( student => {
  
  const {name, lastname, code, votes, image} = student;
  const mediaVotes = getVotesMedia(votes);
  
  const studentObj = {
    name: `${name} ${lastname}`,
    code,
    mediaVotes,
    image
  }

  return studentObj;
  
})

drawStudents(studentsRemap)


/// FUNCTIONS

function drawStudents(students){
  teamContainer.innerHTML = '';
  students.forEach(drawStudentCard )
}

function drawStudentCard(student){
  console.log(student);

  const {name, mediaVotes, image} = student;

  const HTMLCard = `
    <div class="team-card">
      <div class="card-image">
        <img
        src="img/${image}"
        alt="${name}"
        />
      </div>
      <div class="card-text">
        <h3>${name}</h3>
        <p>Media voti: ${mediaVotes}</p>
      </div>
    </div>
    `

    teamContainer.innerHTML += HTMLCard;
}



function getVotesMedia(votes){
  let sum = 0;
  votes.forEach( exam => {
    sum += exam.vote
  } )
  return Math.round(sum / votes.length);
}

function getRandomNumber(min, max){
  return Math.floor(Math.random() * (max - min +1) + min);
}
