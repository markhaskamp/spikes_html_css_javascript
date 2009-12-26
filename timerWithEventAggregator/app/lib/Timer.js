
var Timer = Class.create({

        initialize: function() {
            this.stopFlag = false;
        }

        , setEventAggregator: function(ea) {
            this.ea = ea;

            try {
                this.ea.subscribe(EA_Keys.TIMER_STOP, 'timer.stop', this.stop.bind(this)); 
            }
            catch(exc) {
                this.stopFlag = true;
                throw('Timer ERROR. ' + exc);
            }
        }

        ,start: function() {
            new PeriodicalExecuter(this.timerIntervalEvent.bind(this), 1);
        }

        ,stop: function() {
            this.stopFlag = true;
        }

        ,timerIntervalEvent: function(pe) {

            try {
                if (this.stopFlag) {
                    pe.stop();
                    return;
                }
            }
            catch(exc) {
                pe.stop();
                throw('Timer ERROR. ' + exc);
            }

            this.ea.publish(EA_Keys.TIMER_TICK);
        }

    });

// console.log('== == == == ==');
// for (var x in this) {
//     console.log(x);
//     console.log(typeof(eval('this.'+x)));
// }
// console.log('== == == == ==');

