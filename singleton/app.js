const logger = require('./logger');

logger.log("Aplicação iniciada");

const logger2 = require('./logger');
logger2.log("Nova mensagem de outro módulo");

console.log("Ambos são a mesma instância", logger === logger2);