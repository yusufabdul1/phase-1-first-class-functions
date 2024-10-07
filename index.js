function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    function NamedFunction() {
        console.log ("I am a named function!")
    }
    return NamedFunction
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log("I am an anonymous function!")
    }
}