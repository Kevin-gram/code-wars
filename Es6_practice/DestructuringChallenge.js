function extractProfile(user){
    const  {name,city}=user
      const z={
          name,
          city
      }
      return z 
  }
  const user ={name:'kevin',city:'los Angels',occupation:'software engineer at google'}
  console.log(extractProfile(user))