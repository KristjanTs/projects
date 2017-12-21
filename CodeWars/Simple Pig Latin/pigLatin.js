function pigIt(str){
  let array = str.split(" ");
  for (word in array) {
    array[word] = array[word].slice(1) + array[word].slice(0,1) + "ay"
  }
  return array.join(" ");
}
