let s = "{{([[[(((([{[]}]))))]]])}}"
  let stack = [];
   for (let par of s) {
       if (par === '(') stack.push(')');
       else if (par === '[') stack.push(']');
       else if (par === '{') stack.push('}');
       else if (stack.pop() !== par) return false;
   }
   if(stack.length === 0){
     console.log(1)
   } else {
     console.log(2)
   }

// modify code if needed
