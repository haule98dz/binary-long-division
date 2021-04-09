var cv = document.getElementById('cv')
var ct= cv.getContext('2d');


function divide() {
    var sa = $('#A').val();
    var sb = $('#B').val();
    var dividend, divisor;
    try {
        dividend = parseInt(sa, 2);
        divisor = parseInt(sb, 2);
    } catch (error) {
        alert('Wrong input');
        return;
    }
    
    var quotient, remainder;
    addLine(sa);
    
    

}

function addLine(s, indent = 0) {
    var child = '<p>';
    for (var i = 0; i< indent; i++) {
        child += '&nbsp';
    }
    child += s + '</p>';
    $('#result').append(child);
}

function getBinLen(x) {
    if (x == 0) return 0;
    var len = 0;
    do {
        x = x>>1;
        len++;
    } while (x!=0);
    return len;
}
