
var userMonthNdx = { javascript: 0
                     ,user: 1
                     ,descr: 2 };

var userMonth = { 1: [ 0, 1, 'january' ]
                  ,2: [ 1, 2, 'february' ]
                  ,3: [ 2, 3, 'march' ]
                  ,4: [ 3, 4, 'april' ]
                  ,5: [ 4, 5, 'may' ]
                  ,6: [ 5, 6, 'june' ]
                  ,7: [ 6, 7, 'july' ]
                  ,8: [ 7, 8, 'august' ]
                  ,9: [ 8, 9, 'september' ]
                  ,10: [ 9, 10, 'october' ]
                  ,11: [ 10, 11, 'november' ]
                  ,12:  [ 11, 12, 'december' ] };
    
function isValidDate(dateStr) {
  // copied from http://www.codetoad.com/javascript_IsValidDate.asp
  var datePattern = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
  var matchArray = dateStr.match(datePattern);

  if (matchArray == null) {
    return false;
  }

  var month = matchArray[1]; 
  var jsmonth = userMonth[month][userMonthNdx.javascript];
  var day   = matchArray[2]; 
  var year  = matchArray[3]; 

var javascriptDate = new Date(year, jsmonth, day);
  return((day == javascriptDate.getDate()) &&
         (jsmonth == javascriptDate.getMonth()) &&
         (year == javascriptDate.getFullYear()));

}
