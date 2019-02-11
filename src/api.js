const apiUrl =
  "http://35.234.148.3:8090/data/trials/uk/{postcode}/{km}/{sex}/{age}/.json";

export const getTrials = () => {
  console.log("trials");
  fetch("http://example.com/movies.json")
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      console.log(JSON.stringify(myJson));
    });
};
