// function outer()
// {
//     console.log("it is outer function")
//     function inner()
//     {
//         console.log("it is inner function")
//     }
//     inner()
// }

// outer()
// inner().

function outer()
{
    console.log("it is outer function")
    function inner(name)
    {
        console.log("it is inner function")
        return `${name}`
    }
    console.log("name=",inner("raj"))
}

outer()