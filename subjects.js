"use strict";

const subject = require("console-read-write");
const arraySubject = [];

async function inputSubject(){
    subject.write("Quantas matérias você possuí?")
    const a = await subject.read(Number);
    if(a >=1 && a <= 10 ) {
        subject.write("Digite os nomes de suas matérias:")
        for(let i = 0; i < a;i++) {
            const subjectName = await subject.read(String);
            arraySubject.push([subjectName]);
        }
    } else {
        return console.log('Input inválido, por gentileza, coloque um número entre 1 e 10.');
    }
}

module.exports = {
    inputSubject,
    arraySubject
}