function personSelect(names, num) {
  let namesSplit = names.split(",");
  namesSplit.sort(function() { return .5 - Math.random() });
  let out = [];
  let size;
  let i=0;
  let number = Math.ceil(namesSplit.length/ num);

  // If number of names is even
  if (namesSplit.length % number === 0) {
      size = Math.floor(namesSplit.length / number);
      while (i < namesSplit.length) {
          out.push(namesSplit.slice(i, i += size));
      }
  }
  // if number of names is odd
  else {
      number--;
      size = Math.floor(namesSplit.length / number);
      if (namesSplit.length % size === 0)
          size--;
      while (i < size * number) {
          out.push(namesSplit.slice(i, i += size));
      }
      out.push(namesSplit.slice(size * number));
        console.log(size*number);

  }
  return  out ;
}
