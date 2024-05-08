function* getEmployee() {
    const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];
    const facts = [];
    for (const name of names) {
      const returnedData = yield name; 
      facts.push(returnedData); 
    }
    return facts;
  }
  const generatorIterator = getEmployee();
  let name = generatorIterator.next().value; 
  name = generatorIterator.next(`${name} is cool!`).value; 
  

  