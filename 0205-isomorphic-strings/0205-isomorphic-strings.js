/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let mapS = new Map();
    let mapT = new Map();

    for(let i = 0; i<s.length; i++){
        let schar = s[i];
        let tchar = t[i];

        if(mapS.has(schar)){
            if(mapS.get(schar) !== tchar){
                return false;
            }
        }
        else{
            mapS.set(schar, tchar);
        }

        if(mapT.has(tchar)){
            if(mapT.get(tchar)!== schar){
                return false;
            }
        }
        else{
            mapT.set(tchar, schar);
        }
    }
    return true;
};