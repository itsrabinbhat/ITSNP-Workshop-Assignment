// Reference error
try {
  Sum(num1, num2);
} catch (error) {
  console.log(error);
  //console.log(error.message);
}

// Type error
try {
    const name = "test user";
    console.l0(name);
  } catch (error) {
    console.log(error);
  }

// Custom Range error
try{
    let num = 5;
    if(num > 0){
        throw new RangeError("Your num is out of Range");
    }
}
catch(error){
    console.log(error);
}

// Custom syntax error
try{
    throw new SyntaxError("Incorrect syntax");
}catch(error){
    console.log(error);
}

// Syntax error
try{
    eval("Learning JS");
}
catch(error){
    console.log(error);
}