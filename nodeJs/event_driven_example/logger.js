const fs = require('fs')
const os = require('os')
const EventEmitter = require('events')

class Logger extends EventEmitter{

    log(message){
        this.emit('message',{message})
    };
}

const logger = new Logger();
const logFile = './eventLog.txt'

// Making format of log message
const logToFile = (event)=>{

    const logMessage = `${ new Date().toISOString() } -${event.message} \n`;
    fs.appendFileSync(logFile,logMessage)
}

// Listening the event
logger.on('message',logToFile)

// Emitting the event
setInterval(() => {
       const memoryUsage =  (os.freemem() / os.totalmem()) * 100;
       logger.log(`Current Memory usage: ${memoryUsage.toFixed(2)}`)
}, 3000);

logger.log('Application started');
logger.log('Application event occurred');