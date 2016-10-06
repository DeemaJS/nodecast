function makeIterator(array){
    var nextIndex = 0;
    
    return {
       next: function(){
           return nextIndex < array.length ?
               {value: array[nextIndex++], done: false} :
               {done: true};
       }
    }
}

var iter = makeIterator(['hi', 'how', 'why', 54]);

console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().value);

console.log(iter.next().done);

function* myIt (){
    yield 45;
    var result = Math.pow(yield "a", yield "b");
    return result;
}

var myIterable = myIt();

console.log(myIterable.next().value);
myIterable.next();
console.log(myIterable.next(5).value);
console.log(myIterable.next(3).value);
