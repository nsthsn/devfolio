export default {
    methods : {
        onCheckout: function(event, value) {
            // fire a tag for conversion tracking
            // this.$gtm.push({event: event + ' ' + action});
    
            // fire an event for analytics goal tracking
            this.$ga.event({
                eventCategory: event,
                eventValue: value
            });
          }
    }
}