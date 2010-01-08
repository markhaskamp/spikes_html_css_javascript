
function showArray(a) {
    var str = 'array\n';

    var str = 'array\n';
    a.each( function(n, v) {
            str += v;
        })
        alert(str);

}

$(document).ready(function() {
        $('#1').click( function() {
                showArray($('li'));
            });

        $('#2').click( function() {
                showArray($('.contentBlockB .names'));
            });

        $('#3').click( function() {
                showArray($('.contentBlockA:has(.bodyBlock)'));
            });

        $('#4').click( function() {
                alert($('span#reds_1b')[0].innerHTML);
            });

        $('#5').click( function() {
                showArray($('span.names'));
            });

    });
