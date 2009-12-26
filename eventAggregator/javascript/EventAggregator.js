// add keys that will be used in the project
var EA_Keys = {
    EVT_FOO: 'EVT_FOO',
    EVT_TOO: 'EVT_TOO'
}

// shouldn't have to edit below this
var EventAggregator = Class.create({

	initialize: function() {
			this.trafficCop = $H();
	},

	subscribe: function(event, id, callback) {
		if (!this.eventKeyExists(event)) {
			this.addNewEventKey(event);
		}
		this.addKeyAndCallbackToEvent(event, id, callback);
	},

	unsubscribe: function(event, id) {
		this.getCallbacksForEvent(event).each( function(h) {
			h.unset(id);  // remove key/value from hash
		});
	},

	publish: function() {
		args = $A(arguments);
	  var eventKey = args.shift();
		subFuncArray = args.slice(1, args.length-1);
    this.getCallbacksForEvent(eventKey).each( function(hashElement) {
			hashElement.keys().each( function(k) {
				hashElement.get(k)(args);
			});
		});
	},

	eventKeyExists: function(eventKey) {
		return (this.trafficCop.get(eventKey));
	},

	addNewEventKey: function(eventKey)  {
		this.trafficCop.set(eventKey, $A());
	},

	addKeyAndCallbackToEvent: function(event, id, callback) {
		var h = $H();
		h.set(id, callback);
		this.trafficCop.get(event).push(h);
  },

  getCallbacksForEvent: function(event) {
		return this.trafficCop.get(event);
	},

  getKeys: function() {
			return this.trafficCop.keys();
  }



});

