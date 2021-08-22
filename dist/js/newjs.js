'use strict';

const user = {
    name: "tralala",
    tel: "+888948333",
    parents: {
        papa: "oleksii",
        mama: "marta"
    },
}

const clone = JSON.parse(JSON.stringify(user));

    
    clone.parents.mama = 'ukakak';
    console.log(user);
    console.log(clone);