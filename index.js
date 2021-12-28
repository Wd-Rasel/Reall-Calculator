var myValue = $("#display");

function insertNum (number) {
   var oldNums = myValue.val();
   myValue.val(oldNums + number);
}

function clearNum () {
    myValue.val('');
}

function calculate () {
  var result =  eval(myValue.val());
  myValue.val(result);
}

function deleteNum() {
   var lastNum = myValue.val();
   if(lastNum != '') {
        myValue.val(lastNum.slice(0,-1));
   }
}