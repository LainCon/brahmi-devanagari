let devnagariBtn = document.getElementById('toDevBtn');
let brahmiBtn = document.getElementById('toBrahmiBtn');
let devText = document.getElementById('devText');
let brahmiText = document.getElementById('brahmiText');
let copyDevBtn = document.getElementById('copyDevBtn');
let copyBrahmiBtn = document.getElementById('copyBrahmiBtn');

devnagariBtn.addEventListener('click', generateDevnagari);
brahmiBtn.addEventListener('click', generateBrahmi);
copyDevBtn.addEventListener('click', copyDevText);
copyBrahmiBtn.addEventListener('click', copyBrahmiText);


let devnagariCharacters = ['अ', 'आ', 'इ', 'ई', 'उ', 'ऊ', 'ए', 'ऐ', 'ओ', 'औ','ा','ि','ी','ु','ू','े','ै','ो','ौ','्','ं', 'क',	'ख',	'ग',	'घ',	'ङ',	'च',	'छ',	'ज',	'झ',	'ञ',	'ट',	'ठ',	'ड',	'ढ',	'ण',	'त',	'थ',	'द',	'ध',	'न',	'प',	'फ',	'ब',	'भ',	'म',	'य',	'र',	'ल',	'व',	'श',	'ष',	'स',	'ह', '\u{0902}', '\u{0901}', '\u{0903}', '\u{0943}',
'1', '2', '3', '4', '5', '6', '7', '8', '9', '0'
];
let brahmiCharacters = ['𑀅', '𑀆', '𑀇', '𑀈', '𑀉', '𑀊', '𑀏', '𑀐', '𑀑', '𑀒', '𑀸','𑀺','𑀻','𑀼','𑀽','𑁂','𑁄','𑁃','𑁅','𑁆','ं','𑀓','𑀔','𑀕','𑀖','𑀗','𑀘','𑀙','𑀚','𑀛','𑀜','𑀝','𑀞','𑀟','𑀠','𑀡','𑀢','𑀣','𑀤','𑀥','𑀦','𑀧','𑀨','𑀩','𑀪','𑀫','𑀬','𑀭','𑀮','𑀯','𑀰','𑀱','𑀲','𑀳', '\u{11001}', '\u{11000}', '\u{11002}', '\u{1103E}',
'\u{11066}', '\u{11067}', '\u{11068}', '\u{11069}', '\u{1106A}', '\u{1106B}', '\u{1106C}', '\u{1106D}', '\u{1106E}', '\u{1106F}'];

function generateDevnagari(){
    console.log('\u{11001}')
    let tempBrahmiText = brahmiText.value;
    for(let i=0; i<devnagariCharacters.length; i++){
        let tempBrahmi = `${brahmiCharacters[i]}`
        let tempDev = `${devnagariCharacters[i]}`
        let pttrn = new RegExp(tempBrahmi, 'g');
        // console.log(pttrn)
        tempBrahmiText= tempBrahmiText.replace(pttrn, tempDev);
    }
    devText.value = tempBrahmiText;
    copyConten
}

function generateBrahmi(){
    let tempDevText = devText.value;
    for(let i=0; i<devnagariCharacters.length; i++){
        let tempBrahmi = `${brahmiCharacters[i]}`
        let tempDev = `${devnagariCharacters[i]}`
        let pttrn = new RegExp(tempDev, 'g');
        // console.log(pttrn)
        tempDevText= tempDevText.replace(pttrn, tempBrahmi);
    }
    brahmiText.value = tempDevText;
}

async function copyDevText(){
    let val = devText.value
    navigator.clipboard.writeText(val).then((res)=>console.log(val)).catch((err)=>{console.log(err)});
}

async function copyBrahmiText(){
    let val = brahmiText.value
    navigator.clipboard.writeText(val).then((res)=>console.log(val)).catch((err)=>{console.log(err)});
}