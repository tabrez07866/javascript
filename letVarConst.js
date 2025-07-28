

testScope()

function testScope(){
    if (true) {
        var a = 10;   // Function scope
        let b = 20;   // Block scope
        const c = 30; // Block scope

        function x(){
            console.log(a)
            console.log(b)
            console.log(c)
        }
        x()
    }

    console.log(a); // ✅ 10
    console.log(b); // ❌ ReferenceError
    console.log(c); // ❌ ReferenceError
}



//memoory pahse
//testScope(){...}
//a=10
//b=20
//c=30

//exe phase


