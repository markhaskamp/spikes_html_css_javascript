function hide_parent_control(control_array, parent_control) {

    var counter = 0;
    $.each(control_array, function(ndx, value) {

	if (control_exists(value)) {
	    counter = counter + 1;
	}
    });

    if (counter === 0) {
	$(parent_control).hide();
    }
}

function control_exists(ctl_selector) {
    return ($(ctl_selector).length);
}


$(document).ready(function() {

});
