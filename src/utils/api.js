const GetTrials = () => {
  fetch("http://35.234.148.3:8090/data/trials/uk/CM27jp/100/m/70/.json")
    .then(res => res.json())
    .then(result => {
      console.log(result);
      return { result };
    });
  // .catch(error => {
  //   return { error };
  // });
};

export default GetTrials;
