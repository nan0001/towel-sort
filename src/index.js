
// You should implement your task here.

module.exports = function towelSort (matrix) {
  const arg_arr = [];  
  for (let arg of arguments) {
    for (let i = 0; i < arg.length; i++){
      if (i % 2 !== 0){
        arg_arr.push(...arg[i].reverse())
      }
      else {
        arg_arr.push(...arg[i])
      }
    }    
  }
  return arg_arr;
}