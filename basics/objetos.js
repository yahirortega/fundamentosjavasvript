//objetos en java
/*
objeto ={
    key: value,
    key: value
} 

objeto.key
objeto ['key']
*/

const subject = {
    name: 'Aplicaciones web',
    cuatri :  3,
    alumno : 'Adri',
    clase: 'Aplicaciones Web',
    'clasroom':'lab1'
}
console.log(subject);
console.log(subject.alumno);
console.log(subject.clase);
console.log(subject['clasroom']);


subject.alumno = 'Adri';
subject.career='TIADSM';
console.log(subject);

const profesor ={
    name: 'fracisco',
    age: 21,
    clase: 'Aplicaciones web',
    city:'huamantla'
}
const group={
    name:'4B',
    profesor: [profesor,profesor,profesor],
    subject: [subject,subject,subject]
}
console.log (group);
console.log(group.profesor[0].profesor);
console.log(group.subject[1].alumno);
console.log(group.subject[1].cuatri);