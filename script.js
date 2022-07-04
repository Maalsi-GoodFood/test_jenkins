const date = new Date();

const strYear = '' + date.getFullYear();
const strMonth = '' + (date.getMonth() + 1);
const strDays = '' + date.getDate();

console.log("DATE NEW = " + strDays + '/' + strMonth + '/' + strYear);