
var dvMonth = { 1: 0 ,2: 1 ,3: 2 ,4: 3 ,5: 4 ,6: 6 ,7: 6 ,8: 7 ,9: 8 ,10: 9 ,11: 10 ,12: 11 }
    
function isValidDate(dateStr) {
  // copied from http://www.codetoad.com/javascript_IsValidDate.asp
  var datePattern = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
  var matchArray = dateStr.match(datePattern);

  if (matchArray == null) {
    return false;
  }

  var month = matchArray[1]; 
  var day   = matchArray[2]; 
  var year  = matchArray[3]; 

  var javascriptDate = new Date(year, dvMonth[month], day);
  return((day == javascriptDate.getDate()) &&
         (dvMonth[month] == javascriptDate.getMonth()) &&
         (year == javascriptDate.getFullYear()));

}
