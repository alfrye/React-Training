
const isAdult = (age) => {
    if (age >=  18) {
        return true
    } else {
        return false;
    }
}

const canDrink = (age) => {
    if (age >=21 ) {
        return true
    } else {
        return false;
    }
}

const IsSenior = (age) =>  age >=65;
//export default IsSenior
export {IsSenior as default, isAdult, canDrink} 