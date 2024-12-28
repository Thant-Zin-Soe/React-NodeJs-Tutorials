 /*  (function(){
            console.log("Function excuete!")
        })();// Expression // ta kar htae run or excuete tel namspace or module */

        window.Module= window.Module ||  (function(){
            console.log("Function excuete!")
            function internal(){
                console.log("Internal Function");
            }
             return {api: internal}; 
       })();