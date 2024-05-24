
    //     host: 'localhost',
    //     port: 8080,
    //     protocol: 'http'
    // };
    
    // const options = {
    //     port: 3000,
    //     protocol: 'https'
    // };
    // Write the code to create a new object named config by merging defaults and options, with properties 
    // in options overriding those in defaults where they overlap.
const defaults={
    host: 'localhost',
    port: '8080',
    protocol:'hht'
};
const options ={
    port:3000,
    protocol: 'hhtps'
}

const config={...defaults,...options}
console.log(config)