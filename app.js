// 1
const first = document.querySelector('#first');
const p1 = document.createElement('p');
const p2 = document.createElement('p');
first.append(p1);
first.append(p2);
`{"id":18,"type":"programming","setup":"Why did the programmer quit his job?","punchline":"Because he didn't get arrays."}`;

const jokeJS1 = JSON.parse(`{"id":18,"type":"programming","setup":"Why did the programmer quit his job?","punchline":"Because he didn't get arrays."}`);
console.log(`Question 1`);
console.log(jokeJS1);

p1.innerText = jokeJS1.setup;
console.log(jokeJS1.setup);

p2.innerText = jokeJS1.punchline;
console.log(jokeJS1.punchline);

// 2
const second = document.querySelector('#second');
const p3 = document.createElement('p');
const p4 = document.createElement('p');
second.append(p3);
second.append(p4);

axios.get(`https://friends-quotes-api.herokuapp.com/quotes/random`)
  .then(res => {
    console.log(`Question 2`);
    console.log(res);
    const friendsJS2 = res.data;
    console.log(friendsJS2);
    p3.innerText = friendsJS2.character;
    p4.innerText = friendsJS2.quote;
  })
  .catch(err => {
    console.log(`Question 2 Failed`);
    console.log(err);
  });

// 3
const third = document.querySelector('#third');
const p5 = document.createElement('p');
const p6 = document.createElement('p');
third.append(p5);
third.append(p6);

async function quoteFunc (){
  try {
    const quoteJS3 = await axios.get(`https://friends-quotes-api.herokuapp.com/quotes/random`);
    console.log(`Question 3`);
    console.log(quoteJS3);
    p5.innerText = quoteJS3.data.character;
    p6.innerText = quoteJS3.data.quote;
    // 3d
  } catch (err) {
    console.log(err);
  }
}
quoteFunc();

// 4
const fourth = document.querySelector('#fourth');
const p7 = document.createElement('p');
fourth.append(p7);

const baseURL = `https://api.tvmaze.com`;
const id = `38963`;
const endpoint = `/shows/${id}/episodebynumber?`;
const season = `2`;
const number = `8`;
const queryString = `season=${season}&number=${number}`;
const fullEndpoint = baseURL + endpoint + queryString;

tvMazeFunc = async () => {
  try {
    const episode = await axios.get(fullEndpoint);
    console.log(`Question 4`);
    console.log(episode);
    console.log(episode.data.name);
    p7.innerHTML = episode.data.name;
  } catch (err) {
    console.log(err);
  }
}
tvMazeFunc();

// 5
const img = document.createElement(`img`);
const body = document.querySelector(`body`);

axios.get(`https://pokeapi.co/api/v2/pokemon/pikachu`)
.then(res => {
  console.log(`Question 5`);
  console.log(res);
  console.log(res.data.sprites.front_default);
  img.src = res.data.sprites.front_female;
  body.append(img);
})