// Save visitor into database
describe("sql and assignment", ()=>{
    const {addNewVisitor,
        visitorsIdName} = require('../src/students');

    it("save visitor into database", async()=>{
        
        let newVisit = await addNewVisitor("Jojo", 12, "30/02/2020", "20:00", "MK", "dog");

        expect(newVisit[0].name).toEqual("sekgomotso");

    });

    // Return Id and visitor's name

    it("return Id and visitor's name", async()=>{

        let visit  = await visitorsIdName ();
        
        expect(visit).toEqual({ id: 1, visitor_name: 'sekgomotso' });
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