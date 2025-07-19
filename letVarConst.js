function testScope(){
    if (true) {
        var a = 10;   // Function scope
        let b = 20;   // Block scope
        const c = 30; // Block scope
    }

    console.log(a); // ✅ 10
    console.log(b); // ❌ ReferenceError
    console.log(c); // ❌ ReferenceError
}

testScope()