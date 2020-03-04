const visitor = require('../src/students');

// Save visitor into database
describe("sql and assignment", ()=>{

    it("save visitor into database", async()=>{
        
        let addNewVisitor = await visitor;
        expect(addNewVisitor).toEqual({ addNewVisitor: Function });
        
    });
});

// Return Id and visitor's name
describe("sql and assignment", ()=>{

    const Visitor = require('../src/students');

    it("return Id and visitor's name", async()=>{

        let visitorsIdName  = await Visitor ('juju', 28, '05/17/2020', '00:00', 'Nkunzi', 'ola.');
        
        expect(visitorsIdName).toEqual({ id: 27, visitor_name: 'juju' } );
    });    
});

// delete a visitor
describe("jasmine", ()=>{
    it("should delete a visitor", ()=>{

        let motso = visitor;

        expect(motso).toEqual({ });
    });
});

// Update visitor
describe("sql and assignment", ()=>{
    const ap = require('../src/students');
    it("update visitor", ()=>{
        
        let updateV = ap;
        
        expect(updateV.visitor_name[0]).toBe("juju");
    });
    
});

// delete all visitors
describe("node and sql assignment", ()=>{
    const db = require('../src/students');
    let juju = db;

    it('delete all visitors', ()=>{
        expect(juju).toEqual({ })
    });
});