var exports = module.exports = {};

function PasswordMessage(m){
    this.name = 'password message';
    this.message = m;
}

function inRange(char,min,max){
    let unicode = char.charCodeAt(0);
    if(unicode >= min && unicode <= max){
        return true;
    } else {
        return false;
    }
}

exports.checkLength = function(str){
    let valid = (str.length >= 8 && str.length <= 20);
    try{
        if(str.length < 8){
            throw new PasswordMessage("Your password is too short. Should be at least 8 letters.");
        }
        else if(str.length > 20){
            throw new PasswordMessage("Your password is too long. Should be at most 20 letters.");
        }
        else{
            throw new PasswordMessage("Your password is an appropriate length.");
        }
    }
    catch(e){
        console.log(e.name+": "+e.message);
        return valid;
    }
}


exports.containsUpper =function(str){
    let hasUpper = false;
    try {
        for(let i=0; i<str.length; i++)
        {
            if(inRange(str[i], 65, 90)){
                hasUpper = true;
                throw new PasswordMessage("Has Uppercase Character");
            }
        }
        if(hasUpper == false){
            throw new PasswordMessage("does not have uppercase character");
        }
    } catch (e) {
        console.log(e.message);
        return hasUpper;
    }
}


exports.containsLower =function(str){
    let hasLower = false;
    try{
        for(let i=0; i<str.length; i++){
            if(inRange(str[i], 97, 122)){
                hasLower = true;
            }
        }
        if(hasLower == true){
            throw new PasswordMessage("does have lowercase character");
        }
        if(hasLower == false){
            throw new PasswordMessage("does not have lowercase character");
        }
    } catch (e) {
        console.log(e.message);
        return hasLower;
    }
}


exports.containsNumerical =function(str){
    let hasNumber = false;
    try{
        for(let i=0; i<str.length; i++){
            if(inRange(str[i], 48, 57)){
                hasNumber = true;
                throw new PasswordMessage("has numerical character");
            }
        }
        if(hasNumber == false){
            throw new PasswordMessage("doesn't have numerical character");
        }
    } catch (e) {
        console.log(e.message);
        return hasNumber;
    }
}


exports.containsSpecial =function(str){
    let hasSpecial = false;
    let special = [33, 64, 35, 36, 37, 94, 38, 42];
    try{
        for(let specialChar=0; specialChar<=special.length; specialChar++){
            for(let strChar = 0; strChar<=str.length; strChar++){
                if(str[strChar].charCodeAt(0) == special[specialChar]){
                    throw new PasswordMessage("no special");
                }
            }
        }
    } catch (e) {
        console.log(e.message);
        return hasSpecial;
    }
}
