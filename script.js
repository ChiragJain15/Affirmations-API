let url = "https://www.affirmations.dev/";
let request = new XMLHttpRequest();
request.open("GET", url);
request.responseType = "json";
request.send();

request.onload = () => {
  const affirmation = request.response;
  console.lof(affirmation);
};
