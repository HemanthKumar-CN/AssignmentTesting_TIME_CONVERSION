// function conv(n) {
//     if(n<60000)
//     {
//         var x = n % 1000;
//         if(x == 0)
//         {
//             return x/1000+" seconds"
//         }
//         else
//         {
//             return Math.floor(n/1000)+" seconds  "+x+" milliseconds"
//         }
//     }
//     else if(n < 3600000)
//     {
//         var y = n % 60000;

//         if(y == 0)
//         {
//             return n/60000+" minutes"
//         }
//         else
//         {
//             var min = Math.floor(n/60000);
            
//             if(y == 0)
//             {
//                 return min +" minutes"
//             }
//             else
//             {
//                 return min + " minutes"+" "+Math.floor(y/1000) +" seconds "+ y%1000+" milliseconds";
//             }
            
//         }
        
        
//     }
//     else if(n >= 3600000)
//     {
//         var hf = n % 3600000;
//         if(hf == 0)
//         {
//             return Math.floor(n/3600000)+" Hour"
//         }
//         else
//         {
            
            
//             return Math.floor(n/3600000)+" Hr " + hf / 60000;
//         }
        
//     }
// }

// console.log(conv(3700000));




function msToTime(s) {
    var cpy = s;
    var ms = cpy % 1000;
    cpy = (cpy - ms) / 1000;
    var secs = cpy % 60;
    cpy = (cpy - secs) / 60;
    var mins = cpy % 60;
    var hrs = (cpy - mins) / 60;

    if(s<1000)
    {
        return ms+" milliseconds "
    }
    else if(s<60000)
    {
        if(secs == 0)
        {
            return ms+" milliseconds "
        }
        else
        {
            return secs+" seconds "+ms+" milliseconds "
        }
        
    }
    else if(s < 3600000 )
    {
        return mins+" minutes "+ secs+" seconds "+ms+" milliseconds "
    }
    else
    {
        return hrs+" Hour "+mins+" minutes "+ secs+" seconds "+ms+" milliseconds "
    }

    
  
    
  }


//   console.log(msToTime(200000));

module.exports = msToTime


