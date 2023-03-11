export const getRandomNumber = () => {
    return Math.round(Math.random()*2e6 - 1e6);
}

export const getMinimumPositifInteger = (array) => {
   const positifNumbers = array.filter((item)=>(item > 0));
   if(!positifNumbers.length)
    return 0;
   const sortedPositifNumbers = positifNumbers.sort((a,b)=> a-b);
   if(sortedPositifNumbers.length === 1 && sortedPositifNumbers[0] === 1)
    return 0;
   return sortedPositifNumbers[0] - 1;
}