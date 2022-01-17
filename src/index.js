const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '**********': ' ',
};

function decode(expr) {
    let expres = [];
    let temp = [];
    let str = '';
    expr.split('').forEach((sym, index) => {
        str += sym;
        if ((index + 1) % 2 === 0) {
            temp.push(str);
            str = '';
        }
        if ((index + 1) % 10 === 0) {
            expres.push(temp);
            temp = [];
        }
    });
    
    return expres.map(elem => {
        const code = elem.map(pair => {
            if (pair === '11') return '-';
            else if (pair === '10') return '.';
            else if (pair === '**') return pair;
            else return '';
        }).join('')
        return MORSE_TABLE[code]
    }).join('');
}

module.exports = {
    decode
}