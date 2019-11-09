function greetmeetimg (language){
return function(name,lastname){
if(language === 'en'){
console.log(name, lastname, language);
}
if(language === 'es'){
    console.log(name, lastname, language);
}
}
};
 var englishMeet = greetmeetimg('en');
 var spanishMeet = greetmeetimg('es');

 englishMeet('kunja', 'barri');
 spanishMeet('saru', 'konada');