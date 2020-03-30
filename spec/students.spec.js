// Save visitor into database
describe("sql and assignment", ()=>{
    const {addNewVisitor,
        visitorsIdName,
        deleteVisitor,
        updateV,
        visitorId,
        deleteAll} = require('../src/students');

    it("save visitor into database", async()=>{
        
        let newVisit = await addNewVisitor("She", 18, "30/03/2019", "12:00", "He", "Ayt");

        expect(newVisit[0].visitor_name).toEqual("sekgomotso");

    });

    // Return Id and visitor's name
    it("return Id and visitor's name", async()=>{

        let visitOne  = await visitorsIdName ();
        
        expect(visitOne).toEqual({ id: 1, visitor_name: 'sekgomotso' });
    });
    
    // Delete a visitor
    it("should delete a visitor given an id", async() => {
        let deleteOne = await deleteVisitor (9);

        expect(deleteOne).toEqual('deleted')
    });

    // Update a visitor
    it("update a visitor", async() => {
        let newUpdate = await updateV ('cavin');

        expect(newUpdate.visitor_name).toEqual('cavin')
    });

    // return visitor info given an id
    it("should return specified visitor", async() => {
        let infoV = await visitorId(4);

        expect(infoV).toEqual([
            {
              id: 2,
              visitor_name: 'cavin',
              visitors_age: 28,
              date_of_visit: '18/02/2020',
              time_of_visit: '12:00',
              assistant: 'George',
              comments: 'Done'
            }
          ])
    });

    // delete all visitors
    it("should delete all visitors", async() => {
        let allD = await deleteAll();

        expect(allD).toEqual([])
    });

});