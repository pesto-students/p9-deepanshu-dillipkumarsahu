function createIncrement() {
  let count = 0;
  function increment() {
    count++;
  }
  let message = `Count is ${count}`;
  function log() {
    console.log(message);
  }
  return [increment, log];
}
const [increment, log] = createIncrement();
increment();
increment();
increment();
log();

/**
 *
 * The answer will be "Count is 0".
 * 
 * Because the count variable and the message variable are declared in the createIncrement function, which creates a 
 * closure around them. When the increment function is called, it modifies the value of count within the closure, but 
 * the value of message remains unchanged. When the log function is called, it logs the value of message, which was set 
 * to "Count is 0" when the function was declared.
 *
 * **/
