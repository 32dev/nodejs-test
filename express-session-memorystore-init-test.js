const session = require('express-session');
const MemoryStore = require('memorystore')(session);
console.log(MemoryStore);