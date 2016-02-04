function boo(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  console.log(typeof bool);
  if (typeof bool !== 'boolean') {
    bool = false;
  }
  console.log(bool);
  return bool;
}

boo(null);
