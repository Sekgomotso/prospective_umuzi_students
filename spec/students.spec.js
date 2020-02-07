// Save visitor into database
describe("sql and assignment", ()=>{
    const juju = require('../src/students');
    it("saves vis..", async(err, data)=>{
        
        let addNewVisitor = await juju ('motso',30, '09/17/2020','00:00','Tumi', 'nice meeting you!');
        expect(addNewVisitor[0]).toBe("motso")
    });
});

// Return Id and visitor's name
describe("sql and assignment", ()=>{
    const juju = require('../src/students');
    it("saves vis..", ()=>{
        
        let addNewVisitor = juju('motso',30, '09/17/2020','00:00','Tumi', 'nice meeting you!');
        
        expect(addNewVisitor.data.rows).toBe("id: 27, visitor_name: 'Sekgomotso'");
    });
    
});

// delete all visitors
describe("node and sql assignment", ()=>{
    const db = require('../src/students');
    it('delete all visitors', ()=>{
        expect(db.addNewVisitor('motso',30, '09/17/2020','00:00','Tumi', 'nice meeting you!').toBe([]))
    })
})