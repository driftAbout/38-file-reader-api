import {category_create, category_update, category_delete, category_reset} from '../actions/category-actions';

describe('Category Actions Tests', function (){

  describe('category_create test', () => {
    beforeAll(() => {
      this.action = category_create({name: 'Spirits', amount: 666 });
    });

    it('Should return a payload and type action message', () => {
      expect(this.action).toBeInstanceOf(Object);
      expect(this.action.type).toBeDefined();
      expect(this.action.payload).toBeDefined();
    });

    it('Should return  a type of CATEGORY_CREATE', () => {
      expect(this.action.type).toEqual('CATEGORY_CREATE');
    });

    it('Should return a payload with the data sent', () => {
      expect(this.action.payload.name).toEqual('Spirits');
      expect(this.action.payload.amount).toEqual(666);
    });

    it('Should return a payload with appended data', () => {
      expect(this.action.payload.timeStamp).toBeDefined();
      expect(this.action.payload.id).toBeDefined();
    });
  }); 

  describe('category_update test', () => {
    beforeAll(() => {
      this.timeStamp = new Date().toDateString;
      this.action = category_update(
        {
          name: 'Nourishment', 
          amount: 789,
          timeStamp: this.timeStamp,
          id: 7,
        });
    });

    it('Should return a payload and type action message', () => {
      expect(this.action).toBeInstanceOf(Object);
      expect(this.action.type).toBeDefined();
      expect(this.action.payload).toBeDefined();
    });

    it('Should return  a type of CATEGORY_UPDATE', () => {
      expect(this.action.type).toEqual('CATEGORY_UPDATE');
    });

    it('Should return a payload with the data sent', () => {
      expect(this.action.payload.name).toEqual('Nourishment');
      expect(this.action.payload.amount).toEqual(789);
      expect(this.action.payload.timeStamp).toEqual(this.timeStamp);
      expect(this.action.payload.id).toEqual(7);
    });
  }); 

  describe('category_delete test', () => {
    beforeAll(() => {
      this.action = category_delete({id:8675309});
    });

    it('Should return a payload and type action message', () => {
      expect(this.action).toBeInstanceOf(Object);
      expect(this.action.type).toBeDefined();
      expect(this.action.payload).toBeDefined();
    });

    it('Should return  a type of CATEGORY_DELETE', () => {
      expect(this.action.type).toEqual('CATEGORY_DELETE');
    });

    it('Should return a payload with the data sent', () => {
      expect(this.action.payload.id).toEqual(8675309);
    });
  });

  describe('category_reset test', () => {
    beforeAll(() => {
      this.action = category_reset();
    });

    it('Should return a payload and type action message', () => {
      expect(this.action).toBeInstanceOf(Object);
      expect(this.action.type).toBeDefined();
      expect(this.action.payload).not.toBeDefined();
    });

    it('Should return  a type of CATEGORY_RESET', () => {
      expect(this.action.type).toEqual('CATEGORY_RESET');
    });
  });

});