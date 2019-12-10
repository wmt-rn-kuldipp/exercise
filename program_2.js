function max_of_three(x, y, z) 
 {
  max = 0;
  if (x > y)
  {
    max = x;
  } else
  {
    max = y;
  }
  if (z > max) 
  {
    max = z;
  }
  return max;
}
console.log(max_of_three(1,2,3));
console.log(max_of_three(0,5,3));
console.log(max_of_three(10,50,40));