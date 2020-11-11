const morgan = require('morgan')
const chalk = require('chalk')

const statusColor = (statusCode) => {
  const status = statusCode.toString()[0]
  switch (status) {
  case '5': 
    return chalk.black.bgRed(` ${statusCode} `)
  case '4': 
    return chalk.black.bgYellow(` ${statusCode} `)
  case '3': 
    return chalk.black.bgCyan(` ${statusCode} `)
  case '2': 
    return chalk.black.bgGreen(` ${statusCode} `)
  default:
    return chalk.white.bgBlack(` ${statusCode} `)
  }
}

const methodColor = (method) => {
  switch (method) {
  case 'GET': 
    return chalk.black.bgGreenBright(` ${method} `)
  case 'POST': 
    return chalk.black.bgBlueBright(` ${method} `)
  case 'PUT': 
    return chalk.black.bgYellowBright(` ${method} `)
  case 'DELETE': 
    return chalk.black.bgMagentaBright(` ${method} `)
  default:
    return chalk.white.bgBlack(` ${method} `)
  }
}


const format = (tokens, req, res) =>{
  const httpVersion = `HTTPv${tokens['http-version'](req, res)}`
  const method = tokens.method(req, res)
  const url = tokens.url(req, res)
  const httpStatus = tokens.status(req, res)
  const referer = tokens.referrer(req, res) === undefined ? 'no referer': tokens.referrer(req, res)
  const remoteAddress = tokens['remote-addr'](req, res)
  const remoteUser = tokens['remote-user'](req, res) === undefined ? 'no remote user': tokens['remote-user'](req, res)
  const userAgent = tokens['user-agent'](req, res)

  return [
    chalk.grey(httpVersion),
    methodColor(method),
    chalk.grey(url),
    statusColor(httpStatus),
    chalk.blue(referer),
    chalk.cyan(remoteAddress),
    chalk.blueBright(remoteUser),
    chalk.green(userAgent)
  ].join(' ')
}

const logger = morgan(format)

module.exports = logger