const visitor = require('../src/students')

// Save visitor into database
describe("sql and assignment", ()=>{

    it("save visitor into database", async()=>{
        
        let addvisitor = await visitor('Jabu',32, '09/17/2020','14:00','Motso', 'ok!');
        expect(addvisitor.visitor_name).toBe([])
        
    });
});

// // Return Id and visitor's name
// describe("sql and assignment", ()=>{
//     it("return Id and visitor's name", ()=>{
        
//         let addNewVisitor = visitor;
        
//         expect(addNewVisitor).toEqual("id: 1, visitor_name: 'Sekgomotso'");
//     });    
// });

// // delete a visitor
// describe("jasmine", ()=>{
//     it("should delete a visitor", ()=>{

//         let motso = visitor;

//         expect(motso).toEqual([]);
//     });
// });

// // Update visitor
// describe("sql and assignment", ()=>{
//     const ap = require('../src/students');
//     it("update visitor", ()=>{
        
//         let updateV = ap('motso',30, '09/17/2020','00:00','Tumi', 'nice meeting you!');
        
//         expect(updateV[0].visitor_name).toBe("juju");
//     });
    
// });

// delete all visitors
describe("node and sql assignment", ()=>{
    const db = require('../src/students');
    let juju = db;

    it('delete all visitors', ()=>{
        expect(juju).toBe([])
    });
});