
var descriptiveMonth = { january: 0,
                         february: 1,
                         march: 2,
                         april: 3,
                         may: 4,
                         june: 5,
                         july: 6,
                         august: 7,
                         september: 8,
                         october: 9,
                         november: 10,
                         december: 11 };

var userMonth = { 1: 'january'
                ,2: 'february'
                ,3: 'march'
                ,4: 'april'
                ,5: 'may'
                ,6: 'june'
                ,7: 'july'
                ,8: 'august'
                ,9: 'september'
                ,10: 'october'
                ,11: 'november'
                ,12: 'december' };
    
function isValidDate(dateStr) {
  // copied from http://www.codetoad.com/javascript_IsValidDate.asp
  var datePattern = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
  var matchArray = dateStr.match(datePattern);

  if (matchArray == null) {
    return false;
  }

  var month = matchArray[1]; 
  monthString = userMonth[month];
  var derivedMonth = descriptiveMonth[monthString];
  var day   = matchArray[2]; 
  var year  = matchArray[3]; 

  var javascriptDate = new Date(year, descriptiveMonth[monthString], day);
  return((day == javascriptDate.getDate()) &&
         (derivedMonth == javascriptDate.getMonth()) &&
         (year == javascriptDate.getFullYear()));

}
