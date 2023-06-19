let devnagariBtn = document.getElementById('toDevBtn');
let brahmiBtn = document.getElementById('toBrahmiBtn');
let devText = document.getElementById('devText');
let brahmiText = document.getElementById('brahmiText');

devnagariBtn.addEventListener('click', generateDevnagari);
brahmiBtn.addEventListener('click', generateBrahmi);

let devnagariCharacters = ['अ', 'आ', 'इ', 'ई', 'उ', 'ऊ', 'ए', 'ऐ', 'ओ', 'औ','ा','ि','ी','ु','ू','े','ै','ो','ौ','्','ं', 'क',	'ख',	'ग',	'घ',	'ङ',	'च',	'छ',	'ज',	'झ',	'ञ',	'ट',	'ठ',	'ड',	'ढ',	'ण',	'त',	'थ',	'द',	'ध',	'न',	'प',	'फ',	'ब',	'भ',	'म',	'य',	'र',	'ल',	'व',	'श',	'ष',	'स',	'ह'];
let brahmiCharacters = ['𑀅', '𑀆', '𑀇', '𑀈', '𑀉', '𑀊', '𑀏', '𑀐', '𑀑', '𑀒', '𑀸','𑀺','𑀻','𑀼','𑀽','𑁂','𑁄','𑁃','𑁅','𑁆','ं','𑀓','𑀔','𑀕','𑀖','𑀗','𑀘','𑀙','𑀚','𑀛','𑀜','𑀝','𑀞','𑀟','𑀠','𑀡','𑀢','𑀣','𑀤','𑀥','𑀦','𑀧','𑀨','𑀩','𑀪','𑀫','𑀬','𑀭','𑀮','𑀯','𑀰','𑀱','𑀲','𑀳'] ;

function generateDevnagari(){
    let tempBrahmiText = brahmiText.value;
    for(let i=0; i<devnagariCharacters.length; i++){
        let tempBrahmi = `${brahmiCharacters[i]}`
        let tempDev = `${devnagariCharacters[i]}`
        let pttrn = new RegExp(tempBrahmi, 'g');
        console.log(pttrn)
        tempBrahmiText= tempBrahmiText.replace(pttrn, tempDev);
    }
    devText.value = tempBrahmiText;
}

function generateBrahmi(){
    let tempDevText = devText.value;
    for(let i=0; i<devnagariCharacters.length; i++){
        let tempBrahmi = `${brahmiCharacters[i]}`
        let tempDev = `${devnagariCharacters[i]}`
        let pttrn = new RegExp(tempDev, 'g');
        console.log(pttrn)
        tempDevText= tempDevText.replace(pttrn, tempBrahmi);
    }
    brahmiText.value = tempDevText;
}