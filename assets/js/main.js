// Creare un oggetto che descriva uno studente, 
// con le seguenti proprietà: nome, cognome e età. 
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto. 
// Creare un array di oggetti di studenti. 
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome. 
// Dare la possibilità all’utente, attraverso 3 prompt(), 
// di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, 
// cognome e età.

var nameSurname = [];
var formUtente = [];

$(document).ready(function(){
    printStudent();
    formStudent()
})

var studente ={
    'nome': 'mario',
    'cognome': 'rossi',
    'età': '22'
};

var studenti =[{
    'nome': 'luigi',
    'cognome': 'rossi',
    'età': '20'
},
{
    'nome': 'franco',
    'cognome': 'rossi',
    'età': '20'
},
{
    'nome': 'viktor',
    'cognome': 'rossi',
    'età': '20'
}];

function printStudent(){
    for (const key in studente) {
        console.log(key + ':', studente[key]);
    };
}

function formStudent(){
    $('.form-container button').click(function(){
        $('ul').show();
        var name = $('#name').val();
        var surename = $('#surename').val();
        var age = $('#age').val();

        var formUtente ={
            'nome': name,
            'cognome': surename,
            'età': age
        };
        for (const key in formUtente) {
            if(key === 'nome'){
                console.log(key + ':',formUtente['nome']);
            }else if(key === 'cognome'){
                console.log(key + ':',formUtente['cognome']);
            };
            
        };
        studenti.push(formUtente);
        printObj();
    });
}


function printObj(){
    for (let i = 0; i < studenti.length; i++) {
        
            $('ul').append('<li>'+studenti[i].nome + ' ' + studenti[i].cognome+'</li>');
            
            console.log(studenti[i].nome + ' : ' + studenti[i].cognome);            
    };
    
};






