// Lexical  Scoping: If we a function inside another function , then inner function will have access to
// elements of outer function
// function outer()
// {
//     const user = "Rahul";
//     function inner()
//     {
//         console.log(user);
//     }
//     inner();
// }
// outer();


// closure : when we retrun a function from another function , not just its reference but also the lexical scope of that function is returned
function outer()
{
    const user = "Mayank";
    function inner()
    {
        console.log(user);
    }
    return inner;
}
const f = outer();
f();