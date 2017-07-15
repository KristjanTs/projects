function simplify(poly){
  //your code here
  console.log(poly);
 // poly = poly.replace(/^\+/,"");
  let numbers = poly.split(/[a-z]+/).filter(val => val).map(val => val.length == 1 && /\+|-/.test(val)?val + 1:val);
  let letters = poly.replace(/\d/g,'').split(/\+|-/).filter(val => val);
  if (numbers.length < letters.length){
     numbers.unshift("+1"); 
  }
  letters = letters.map(function(str){
    return (str.split("").sort().join(""));
  });
  let temp = [];
  letters.forEach(function(str){
    if(temp.indexOf(str) === -1){
      temp.push(str);
    }
  });
  temp.sort(function(a, b){
    return a.length !== b.length?a.length - b.length:a.localeCompare(b);
  });
  temp = temp.map(function(str1){
    let nums = [];
    letters.forEach(function(str2, index){
      if(str2 === str1){
        nums.push(numbers[index]);
      }
    });
    if(nums.length !== 1){
      let res = eval(nums.join(""));
      if(res == 1){
        return '+' + str1;
      }else if(res == -1){
        return '-' + str1;
      }else{
        return res?(res > 0? '+' + res + str1: res + str1): '';
      }
    }else{
      if(nums[0] == 0 || nums[0] == -0 || nums[0] == +0){
        return "";
      }else{
        return nums[0] == '-1' || nums[0] == '+1'? nums[0].slice(0, 1) + str1: nums[0] + str1; 
      }
    } 
  });
  return temp.join("").replace(/^\+/g,"");
        
    
  
}
