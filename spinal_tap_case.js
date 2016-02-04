function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  str = str.toLowerCase();
  str = str.replace(/\s/g, "-");
  str = str.replace(/_/g, "-");
  console.log(str);
  return str;
}

spinalCase("The_Andy_Griffith_Show")
