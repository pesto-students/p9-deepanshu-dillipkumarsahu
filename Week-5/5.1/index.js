// Define the three callback functions
/**
 * 1-doTask1()
 * 2-doTask2()
 * 3-doTask3()
 **/
function doTask1(executer) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(executer, " -> Task 1 complete");
      resolve();
    }, 1000);
  });
}

function doTask2(executer) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(executer, " -> Task 2 complete");
      resolve();
    }, 2000);
  });
}

function doTask3(executer) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(executer, " -> Task 3 complete");
      resolve();
    }, 1500);
  });
}

// Define the async function to execute the tasks
async function executeAsyncFn() {
  await doTask1("Async");
  await doTask2("Async");
  await doTask3("Async");
}

// Define the generator function to execute the tasks
function* executeGeneratorFn() {
  yield doTask1("Generator");
  yield doTask2("Generator");
  yield doTask3("Generator");
}

executeAsyncFn();

const taskGenerator = executeGeneratorFn();
taskGenerator.next();
taskGenerator.next();
taskGenerator.next();
