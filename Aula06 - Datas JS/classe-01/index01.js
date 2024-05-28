const { format } = require("date-fns");

const date = format(new Date(2020, 11, 25, 21, 30), "dd/MM/yyyy HH:mm:ss");

console.log(date);