class Calculator {
    static add(a:number, b:number) {
        return a+b;
    }
    
    static divide(a:number, b:number) {
        if(b===0) {
            console.error("geht nicht");
        }
        return a/b;
    }
}