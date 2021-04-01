const csv = require('csv-parser');
const fs = require('fs');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const data = [];
const headers = [];

let processData = () => {
    fs.createReadStream('data.csv')
    .pipe(csv({
        // push whatever headers was in the csv into the headers array for writing later
        mapHeaders: ({header, index}) => {
            headers.push({id:header, title:header});
            return header;
        }
    }))
    .on('data', (row) => {
        // filter for page visit types only
        if(row["Type"] === 'Page Visits (Anonymous)' || row["Type"] === 'Visit Web Page') { data.push(row) }
    })
    .on('end', () => {
        writeData(data);
    });
}

let writeData = (req) => {
    console.log("Writing file.")
    const csvWriter = createCsvWriter({
        // file will be called output.csv
        path:'output.csv',
        // remember the headers you pulled from the input csv file? yeah, here's where it's set
        header: headers
    });

    csvWriter.writeRecords(req)
    .then(() => console.log("File written!"));
}

processData();