// 1
const first = document.querySelector("#first");
const p1 = document.createElement("p");
const p2 = document.createElement("p");
first.append(p1);
first.append(p2);
const jokeJSON1 = `{"id":18,"type":"programming","setup":"Why did the programmer quit his job?","punchline":"Because he didn't get arrays."}`;
const jokeJS1 = JSON.parse(jokeJSON1);
p1.innerText = jokeJS1.setup;
p2.innerText = jokeJS1.punchline;

// 2
const second = document.querySelector("#second");
const p3 = document.createElement("p");
const p4 = document.createElement("p");
second.append(p3);
second.append(p4);

axios
  .Get(`https://official-joke-api.appspot.com/random_joke`)
    .then((res) => {
    console.log(res);

    const jokeJS2 = res;
    p3.innerText = jokeJS2.data.setup;
    p4.innerText = jokeJS2.data.punchline;
  })
  .catch((err) => console.log(`This is the error: ${err}`));

// 3
const third = document.querySelector("#third");
const p5 = document.createElement("p");
const p6 = document.createElement("p");
third.append(p5);
third.append(p6);

async function jokeFunc() {
  try {

    const jokeJS3 = await axios.get(
      `https://official-joke-api.appspot.com/random_joke`
    );
    console.log(jokeJS3);
    // 3c
    p5.innerText = jokeJS3.data.setup;
    p6.innerText = jokeJS3.data.punchline;
  } catch (err) {
    console.log(err);
  }
}
jokeFunc();

// 4
const fourth = document.querySelector("#fourth");
const p7 = document.createElement("p");
fourth.append(p7);

const id = "38963";
const season = "1";
const number = "8";

const baseURL = `https://api.tvmaze.com`;
const ebnEndpoint = `/shows/${id}/episodebynumber?season=${season}&number=${number}`;
const fullURL = baseURL + ebnEndpoint;

async function tvMazeFunc(){
    try{

        const mando = await axios.get(fullURL);
        p7.innerText = mando.data.name;
    }catch(err){
        console.log(err);
        
    }
}
tvMazeFunc()