describe("sql and assignment", ()=>{
    const juju = require('../students.js');
    it("saves vis..", async(err, data)=>{
        let addNewVisitor = await juju ('motso',30, '09/17/2020','00:00','Tumi', 'nice meeting you!');
        expect(addNewVisitor[0]).toBe("motso")
    });
});