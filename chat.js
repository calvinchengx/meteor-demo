// if using mongodb
// Persons = new Mongo.Collection('persons');

// if using rethinkdb
// create "persons" table manually in RethinkDB's web ui
Persons = new Rethink.Table('persons');
r = Rethink.r;

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
    }
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });

  // insert some sample data if Person table is empty
  if (Persons.count().run() === 0) {
    Persons.insert([{
      name: "Calvin",
      age: 39
    }, {
      name: "Isaac",
      age: 21
    }, {
      name: "Nicholas",
      age: 21
    }]).run();
  }

}
