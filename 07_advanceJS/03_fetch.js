// Two ways of using fetch

async function getChaiAndCodeData()
{
    try
    {
    let response = await fetch("https://api.github.com/users/hiteshchoudhary");
    let data =  await response.json();
    console.log(data);
    }
    catch(error)
    {
        console.log(error);
    }
}
getChaiAndCodeData();


// AJAX' works with 'callbacks'; 'fetch' works with 'promises'.
// Use JSON.parse() to parse the response for AJAX. Use json() to parse the response for fetch.
// Body.json() is asynchronous and returns a Promise object that resolves to a JavaScript object.
//  JSON.parse() is synchronous can parse a string and change the resulting returned JavaScript object.

fetch("https://api.github.com/users/hiteshchoudhary").
then(function(response){
    return response.json();
}).
then(function(obj){
    console.log(obj.followers);
}).
catch(function(error)
{
    console.log("error");
})