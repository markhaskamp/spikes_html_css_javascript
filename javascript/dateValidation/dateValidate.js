
function isValidDate(dateStr) {
  // copied from http://www.codetoad.com/javascript_IsValidDate.asp
  var datePattern = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
  var matchArray = dateStr.match(datePattern);

  if (matchArray == null) {
    return false;
  }

  var month = matchArray[1]; 
  var day   = matchArray[2]; 
  month--;
  var year  = matchArray[3]; 

  var javascriptDate = new Date(year, month, day);
  return((day == javascriptDate.getDate()) &&
        (month == javascriptDate.getMonth()) &&
        (year == javascriptDate.getFullYear()));

}
