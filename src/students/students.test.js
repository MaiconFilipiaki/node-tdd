const student = require('./student');

/*
*/



//describe é funcao que descreve oq vamos testar
describe('Students test ', () => {
    it('Must return 10 where notes will 5, 3 and 2', () => {
        const notes = [5, 3, 2];
        expect(student.sum(notes)).toEqual(10);
    })

    it('Must return 0 where a note equal zero', () => {
        const notes = [1, 2, 3, 0];
        expect(student.sum(notes)).toEqual(0);
    })

    it('Must return X where a student has notes bigger 5', () => {
        const notes = [1, 2, 3, 4, 5, 6, 7];
        expect(student.sum(notes)).toEqual(56);
    })
})