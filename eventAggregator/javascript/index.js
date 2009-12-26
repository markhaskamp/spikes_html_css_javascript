
function updateC2() {
		var s = $('c2').innerHTML;
    $('c2').innerHTML = s + '<br />eddie would go';
}

function updateC3() {
		var s = $('c3').innerHTML;
		$('c3').innerHTML = s + '<br />kilroy was here';
}

document.observe('dom:loaded', function() { 

	var ea = new EventAggregator();

  ea.eventSubscribe('UpdateCDivs', updateC2);
  ea.eventSubscribe('UpdateCDivs', updateC3);

	$('foo').observe('mouseover', function() {$('foo').setStyle({cursor: "pointer"})});
	$('foo').observe('mouseout', function() {$('foo').setStyle({cursor: "default"})});

	$('foo').observe('click', function() { ea.eventPublish('UpdateCDivs'); } );
});

