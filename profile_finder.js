//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intruiging Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    },
];


function lookUp(firstName, prop){
// Only change code below this line
  var found_name = false;
  var return_value;
  for(var i = 0; i < contacts.length; i++){
    if (contacts[i].firstName === firstName){
      found_name = true;
      if(contacts[i].hasOwnProperty(prop)){
        return_value = contacts[i][prop];
        break;
      }
      else{
        return_value = "No such property";
        break;
      }
    }
    else{
      return_value = "No such contact";
    }

  }
  console.log(return_value);
  return return_value;
// Only change code above this line
}

// Change these values to test your function
//lookUp("Akira", "likes");
lookUp("Akira", "address");
