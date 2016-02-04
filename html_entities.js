function convert(str) {
  "use strict";
  // &colon;&rpar;
  str = str.replace(/&/g, '&amp;');
  str = str.replace(/</g, '&lt;');
  str = str.replace(/>/g, '&gt;');
  str = str.replace(/"/g, '&quot;');
  str = str.replace(/'/g, '&apos;');

  console.log(str);
  return str;
}

convert("Dolce & Gabbana"); // Dolce &​amp; Gabbana.
convert("Hamburgers < Pizza < Tacos"); // Hamburgers &​lt; Pizza &​lt; Tacos.
convert("Sixty > twelve"); // Sixty &​gt; twelve.
convert('Stuff in "quotation marks"'); // Stuff in &​quot;quotation marks&​quot;
convert("Shindler's List"); // Shindler&​apos;s List.
convert("<>"); // &​lt;&​gt;
convert("abc"); // abc
