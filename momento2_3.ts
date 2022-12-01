function addNumbers(x?:number,  y?:number, z?:number):number {
    if (x && y && z)
      return x+y+z;
    else
      return (0) ;
  }
  
  console.log(addNumbers(5,10,5));
  