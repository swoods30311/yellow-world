"use strict";
function kgToLbs(weight) {
    //Narrowing Union Type to a specific one
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
kgToLbs(10);
kgToLbs('10kg');
