const db = require('../data/dbConfig');
const Hobbits = require('./hobbitsModel');

describe('hobbits model', () => {
    beforeEach(async () => {
        await db('hobbits').truncate()
    });

    describe('insert function', () => {
        it('inserts hobbits into the db', async () => {
            let hobbitsNumber;
            hobbitsNumber = await db('hobbits');
            expect(hobbitsNumber).toHaveLength(0);
            await Hobbits.insert({name: 'Gaffer'});
            hobbitsNumber = await db('hobbits')
            expect(hobbitsNumber).toHaveLength(1)
        })

        it('inserts', async () => {
            let hobbit = await Hobbits.insert({ name: 'Sam2' })
            expect(hobbit.name).toBe('Sam2')
        })
    })
})