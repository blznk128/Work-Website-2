var config = {
    apiKey: "AIzaSyC_gMDAKLMcOtpzyVRm5tm985gL8Cis_KA",
    authDomain: "workproject-66313.firebaseapp.com",
    databaseURL: "https://workproject-66313.firebaseio.com",
    projectId: "workproject-66313",
    storageBucket: "workproject-66313.appspot.com",
    messagingSenderId: "821909990532"
  };

    firebase.initializeApp(config);

    // Create a variable to reference the database
    var database = firebase.database();

    // Initial Variables (SET the first set IN FIREBASE FIRST)
    // Note remember to create these same variables in Firebase!
    var name = "";
    var age = "";
    var phone = "";

    // Click Button changes what is stored in firebase
    $("#click-button").on("click", function(event) {
      // Prevent the page from refreshing
      event.preventDefault();

      // Get inputs
      name = $("#name-input").val().trim();
      age = $("#age-input").val().trim();
      phone = $("#phone-input").val().trim();

    var newPeople = {
        name: name,
        age: age,
        phone: phone
    }
      // Change what is saved in firebase
      database.ref().push(newPeople);
      $("#name-input").val("");
      $("#age-input").val("");
      $("#phone-input").val("");
      return false
    });

    database.ref().on("child_added", function(snapshot) {
      var person = snapshot.val().name;
      var age = snapshot.val().age;
      var phone = snapshot.val().phone;
      $("#displayed-data").append("<ul>" + "<li>" + "name" + person + "age" + age + "phone" + phone + "</li>" + "</ul>")

      // If any errors are experienced, log them to console.
    }, function(errorObject) {
      console.log("The read failed: " + errorObject.code);
    });