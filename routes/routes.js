const Express = require('express')
const router = Express.Router()

router.get('/', function(req,res) {
  res.render('index');
})

router.post('/', function(req, res) {
  const params = req.body;

  const newData = {
    status: personSelect(params.names, params.number, params.number2),
  };

  res.render('results', newData);
});



function personSelect(names, number, number2) {
if (number2) {
  let namesSplit = names.split(",");
  namesSplit.sort(function() { return .5 - Math.random() });
  let out = [];
  let size;
  let i=0;
  let number = Math.ceil(namesSplit.length/ number2);

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

} else {

  let namesSplit = names.split(",");
  namesSplit.sort(function() { return .5 - Math.random() });
  let out = [];
  let size;
  let i=0;
  // If number of names is even
  if (namesSplit.length % number === 0) {
      size = Math.floor(namesSplit.length / number);
      while (i < namesSplit.length) {
          out.push(namesSplit.slice(i, i += size));
      }
  }
  // if number of names is odd
  //Problem when just 2 teams when odd
  else {
    if (parseInt(number) === 2) {
      size = Math.floor(namesSplit.length / number);
      number--;
    }else {
      number--;
      size = Math.floor(namesSplit.length / number);
    }
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

}


module.exports = router;
