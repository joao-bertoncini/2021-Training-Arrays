"use strict";

const subject = require("./subjects.js");
const input = require("console-read-write");
const tests = ['Test 1:', 'Test 2:', 'Test 3:', 'Test 4:'];
const answers = [];

async function inputGrades() {
    input.write("Escreva as notas de cada uma de suas provas:");
    for (let i = 0; i < subject.arraySubject.length; i++) {
        console.log('\n'+subject.arraySubject[i][0]);
            for(let a = 0; a < tests.length; a++) {
                console.log(tests[a]);
                const result = await input.read(Number);
                if(result >= 0 && result <= 10) {
                    subject.arraySubject[i].push(result);
                    answers.push(result);
                } else {
                    console.log('Input inválido, por gentileza, coloque um número entre 1 e 10.')
                    a--;
                }
            }
        console.log(subject.arraySubject);
        console.log(answers);
    }
}

async function average() {
    console.log('\n');
        for(let i = 0; i < subject.arraySubject.length; i++)  {
        const number = answers.map(Number);
        const clean = number.slice(0, 4);
        const total = clean.reduce((acum, actual) => acum += actual)/tests.length;
        if(total >= 6) {
        console.log(`Sua média de ${subject.arraySubject[i][0]} é ${total}, está aprovado.`)
        } else {
        console.log(`Sua média de ${subject.arraySubject[i][0]} é ${total}, você ficou de recuperação.`)
        }
        answers.splice(0,4);
    }
    console.log('\n');
}

async function run() {
    await subject.inputSubject();
    await inputGrades();
    average();
}

module.exports = {
    run
}