(function(){

    this.myUtils = {}

    myUtils = {}

    myUtils.myEach = function myEach(arr, cb){
        var len = arr.length;
        for(var i=0; i<len; i++){
            cb(arr[i], i, arr);
        }
    }

    myUtils.myMap = function myMap(arr, cb){
        var len = arr.length;
        var newArr = [];
        for(var i=0; i<len; i++){
             newArr[i] = cb(arr[i], i, arr);
        };
        return newArr;
    };

    myUtils.myReduce = function myReduce(arr, cb, val){
        var len = arr.length;
        val = val || 0;
        for(var i=0; i<len; i++){
            val = cb(val, arr[i], i, arr)
        };
        return val;
    };

    // myUtils.buildElement
    // myUtils.buildElement = function buildElement(arr, cb) {
    //     var len = arr.length;
    //     var htmlString;
    //     for(var i=0; i<len; i++){
    //         htmlString = htmlString + cb(arr[i]);
    //     }
    //     return htmlString + "</tr>";
    // }
    // myUtils.toDollarAmount;
    myUtils.toDollarAmount = function toDollarAmount(num){
        return Math.floor(num*100)/100;
    }


    // myUtils.toCurrencyString;
    myUtils.toCurrencyString = function toCurrencyString(arr, cb){
        var len = arr.length;
        for(var i=0; i<len; i++){
            return cb(arr[i]);
        };
    };
    
}.call(this))
