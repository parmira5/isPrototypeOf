(function(){
   function myPrototypeOf (parent, child){
    var childsPrototype = Object.getPrototypeOf(child);

       if (parent === null || parent === undefined){
           return TypeError
       }
        if (parent === childsPrototype){
           return true;
       }
       if (parent !== childsPrototype){
           if (childsPrototype !== null){
               return myPrototypeOf(parent, childsPrototype);
           } else {
               return false;
           }
       }
    }
   window.myPrototypeOf = myPrototypeOf;
})(this);