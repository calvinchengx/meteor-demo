Messages = new Mongo.Collection("messages");

if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    },
    doubleNumber: function(num) {
      return num * 2;
    }
  });

  Template.hello.events({
    'click .clickable': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
      var message = $('textarea').val();
      $('textarea').val('');
      console.log('inserting message: ', message);
      Messages.insert({
        text: message
      });
    }
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });

}
