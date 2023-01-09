const { format } = require("date-fns");
const { v4 : uuid } = require("uuid");

const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path")

const logEvent = async (message,logFile) => {
    const date = `${format(new Date(), 'yyyMMdd\tHH:mm:ss')}`;
    const logTime = `${date}\t${uuid()}\t${message}\n`;
    
    try {
        if(!fs.existsSync(path.join(__dirname,"logs"))){
            await fsPromises.mkdir(path.join(__dirname,"logs"));
        }
        await fsPromises.appendFile(path.join(__dirname,"logs",logFile),logTime);
    } catch (error) {
        console.error(error);
    }
}

module.exports = logEvent;