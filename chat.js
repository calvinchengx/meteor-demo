Messages = new Mongo.Collection("messages");

if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    messages: function() {
      return Messages.find();
    }
  });

  Template.hello.events({
    'click .clickable': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
      var message = $('textarea').val();
      $('textarea').val('');
      console.log('inserting message: ', message);
      Meteor.call('addMessage', message, function(err, result) {
        if (err) {
            console.log(err)
        }
      });
    }
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });

  Meteor.methods({
    addMessage: function(text) {
      Messages.insert({
        text: text
      });
    }
  });

}
