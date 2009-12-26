var counter = 0;
var ea;

function displayForTimerTick() {
    counter++;
    $('counter').innerHTML = counter;

    if (counter >= 10) {
        ea.publish(EA_Keys.TIMER_STOP);
    }
}

function displayForTimerStopped() {
    $('counter').innerHTML = 'stop';
}

document.observe('dom:loaded', function() {

        ea = new EventAggregator();
        ea.subscribe(EA_Keys.TIMER_TICK, 'index_displayForTimerTick', displayForTimerTick);
        ea.subscribe(EA_Keys.TIMER_STOP, 'index_displayForTimerStopped', displayForTimerStopped);

        var t = new Timer();
        
        try {
            t.setEventAggregator(ea);
        }
        catch(exc) {
           console.log('problem with t.setEventAggregator: ' + exc);
        }
        t.start();
    });


