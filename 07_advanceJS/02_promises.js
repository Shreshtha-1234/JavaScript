// Two ways to create promises and two ways to consume them

// Way 1 : Creating promise separately and then consuming
const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Promise 1 Running");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("promise one consumed");
});




// Way 2 : Creating & consuming promise
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Promise 2 Running");
    resolve();
  }, 1000);
}).then(function () {
  console.log("promise 2 consumed");
});



// Way 3 : Creating a promise and returning some value
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Promise 3 Running");
    resolve({ username: "Shrey", email: "shreshtha1835.be21@chitkara.edu.in" });
  }, 1000);
});

promiseThree.then(function (obj) {
  console.log("Promise 3 consumed");
  console.log(obj);
});



// Way 4 : Creating promise with resolve and reject with errors
const promiseFive = new Promise(function(resolve , reject)
{
    let error = true;
    if(!error)
    {
        resolve({ username: "Shreshtha", email: "shreshtha7860@gmail.com" })
    }
    else
    {
        reject("Error : 404")
    }
})

promiseFive
.then(function(obj)
{
    console.log(obj);
    return obj.email;
})
.then(function(email){
    console.log(email);
    return "Success";
})
.then(function(val){
    console.log(val);
})
.catch(function(errorValue)
{
    console.log(errorValue);
})
.finally(function(){
    console.log("Promise 5 resolved");
})


async function consumePromiseFive()
{
    try
    {
    const response = await promiseFive;
    console.log(response);
    }
    catch(error)
    {
        console.log(error);
    }
}


consumePromiseFive()


//read about Promises.all()
