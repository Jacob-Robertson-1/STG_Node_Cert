const fibinocciStringArray = [
    "zero",
    "one",
    "one",
    "two",
    "three",
    "five",
    "eight",
    "thirteen",
    "twenty one",
    "thirty four",
    "fifty five",
    "eighty nine",
    "one hundred fourty four",
    "two hundred thirty three",
    "three hundred seventy seven",
    "six hundred ten",
    "nine hundred eighty seven",
    "one thousand five hundred and ninty seven",
    "two thousand five hundred and eighty four",
    "four thousand one hundred and eighty one",
    "six thousand seven hundred and sixty five",
    "ten thousand nine hundred and fourty six",
    "seventeen thousand seven hundred and eleven",
    "twenty eight thousand six hundred and fifty seven",
    "fourty six thousand three hundred and sixty eight",
    "seventy five thousand and twenty five",
    "one hundred and twenty one thousand three hundred and ninty three",
    "one hundred and ninty six thousand four hundred and eighteen",
    "three hundred and seventeen thousand eight hundred and eleven"]

// only handles values up tofibinocci value of 28
function fibinocciToString (n:number) {   
    var numToString = n.toString()
    var numsWordValue = fibinocciStringArray[n]
    var res = `${n} - ${numToString}`
    return res;
} 
export default fibinocciToString;
   