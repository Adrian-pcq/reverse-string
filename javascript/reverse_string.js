function reverseString(str) {
  // type your code here
  const array=[]
  for(let i = str.length - 1; i>=0; i--){
    array.push(str[i])
  }
  return array.join('')
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
  //  3. Iterate over the array from end to beginig
  //  4. Storing each element in the newArray
  //  5. Convert the newArray into a String
// And a written explanation of your solution
