const fs = require('fs');


function parseFile(filePath) {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        const lines = data.split('\n');
        const list1 = [];
        const list2 = [];
        
        for (let line of lines) {
            line = line.trim();
            if(line.length === 13) {
                const firstColumn = line.slice(0,5);
                const secondColumn = line.slice(8,13);
                
                list1.push(firstColumn);
                list2.push(secondColumn);
            }
        }
        return { list1, list2 };

    } catch (error) {
        console.log('Error reading file: ', error.message)
    }
}


module.exports = parseFile;
