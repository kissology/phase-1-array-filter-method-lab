const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function findMatching(arr, str){
  let result = arr.filter((element) => element.toLowerCase() === str.toLowerCase());
  return result;
}

function fuzzyMatch(arr, str){
  let result = arr.filter((element) => element[0].toLowerCase() === str[0].toLowerCase())
  return result;
}

function matchName(arr, str){
  let result = arr.filter((element) => element.name.toLowerCase() === str.toLowerCase());
  return result;
}

// Code your soution here