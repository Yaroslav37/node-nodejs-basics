const parseArgs = () => {
    const elements = process.argv.slice(2);
    const output = elements.map((element, index) => {
        if (index % 2 === 0){
            return `${element.slice(2)} is ${elements[index + 1]}`;
        }
    }).filter(Boolean);
    // let output = [];
    // for (let i = 0; i < elements.length; i+=2){
    //     output.push(`${elements[i].slice(2)} is ${elements[i+1]}`);
    // }
    console.log(output.join(", "));
};

parseArgs();
