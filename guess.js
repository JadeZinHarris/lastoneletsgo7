function sumZero (gravy) {
    for(let i=0; i<gravy.length; i++) {
        for(let j=0; j<gravy.length; j++){
            if(i !==j&& gravy[i] - gravy [j] === 0) {
                return true
            }
        }
    }
    return false
}
console.log(sumZero([10,12,30,40,25]))
//runtime 0(n)

function uniqueChars (green) {
    const randomL = {}
    for(let i=0; i<green.length; i++) {
        if(randomL[green[i]]) {
            return true
        } else {
            return false
        }
    }
}

console.log(uniqueChars('Greenday'))

//runtime: 1? 

function isPangram(gzZ) {
    gzZ= gzZ.toLowerCase()
    const counting = {
        w:0,
        z:0,
        y: 0,
        t: 0,
        j: 0,
    }
    for(let i=0; i<gzZ.length; i++)  {
        if (counting[gzZ[i]] !== 0) {
            counting[gzZ[i]] = counting[gzZ[i]]+1
           
        } 
    
        }
        for(letter in counting){
            if(counting[letter] === 0) {
                return false
            }
        }
        return true
    } 
   

console.log(isP('The random zebra'))

//runtime 0(n)

function findLongestWord(kz) {
    var jade = 0
    for(let i=0; i<kz.length; i++) {
        if (kz[i].length > jade) {
        jade = kz[i].length 
        }
    }
    return jade
}

console.log(findLongestWord(['green','Pizza',"applecider"]))

//runtime 0(n)