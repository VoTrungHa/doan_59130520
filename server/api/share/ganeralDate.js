const moment = require("moment");
 
exports.createDateNow = () => {
  return moment().format("DD-MM-YYYY,h:mm"); 
};

exports.dateMoment = (year,month, day, hour, minute) => {
  // console.log(moment().format('DD-MM-YYYY,h:mm:ss'))
  return moment(`${year}-${month}-${day}`)
    .set({ hour: hour, minute: minute })
    .format("DD-MM-YYYY, hh:mm A");
};

exports.datebirth = (year, month, day) => {
  // console.log(moment().format('DD-MM-YYYY,h:mm:ss'))
  return moment(`${year}-${month}-${day}`) 
    .format("DD-MM-YYYY");
};

exports.time=(start)=>{ 
    const s = moment(start);
    console.log(s)
    const e=  moment().format() 
     const t= ((new Date(e)-new Date(s))/1000)/60;
    return Math.floor((t));
  
}