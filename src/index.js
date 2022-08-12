const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};




function decode(expr) {
    let input = expr.split('')
    let out = []
    let arr = []
    const arrLength = input.length / 2
    let j = 0
    let ddddd
    let resolt = []
    for (let i = 0; i < arrLength; i++) {
        if (i % 5 == 0) {
            out.push(' ')
        }
        out.push(String(input.splice(0, 2)))

    }
    for (let i = 0; i < out.length; i++) {
        if ((out[i]) == '1,0') {
            resolt.push('.')
        } else if ((out[i]) == '1,1') {
            resolt.push('-')
        } else if ((out[i]) == '*,*') {
            i += 4
            resolt.push('**')
        } else if ((out[i]) == ' ') {

            resolt.push(' ')
        }

    }
    let asd = resolt.join(' ')
    let pus = asd.trim().split('  ')
    let input1 = []
    let asdd = []

    for (let i = 0; i < pus.length; i++) {
        asdd.push(pus[i].trim())

    }

    for (let i = 0; i < pus.length; i++) {
        if (asdd[i] == '**') {
            input1.push(' ')
        }
        for (let kay in MORSE_TABLE) {
            if (kay == asdd[i].split(' ').join('')) {
                input1.push(MORSE_TABLE[kay])

            }
        }

    }


    let result = input1.join('')
    return result
}


module.exports = {
    decode
}