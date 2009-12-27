
function EventAggregator() {
    this.aggregator = {};

    this.subscribe = function(evt, fn_id, fn) {
        if (this.aggregator[evt] == undefined) {
            this.aggregator[evt] = [];
        }
        this.aggregator[evt].push(fn)
    };

    this.publish = function(eventID) {
        jQuery.each(this.aggregator[eventID], function() {
                this();
            });
    }

    this.unsubscribe = function(eventID, functionID) {
    }
}
