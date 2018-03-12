import {expense_create, expense_update, expense_delete, expense_reset} from '../actions/expense-actions';

describe('Expense Actions Tests', function (){

  describe('expense_create test', () => {
    beforeAll(() => {
      this.action = expense_create({name: 'toejam', amount: .06, category_id: 13 });
    });

    it('Should return a payload and type action message', () => {
      expect(this.action).toBeInstanceOf(Object);
      expect(this.action.type).toBeDefined();
      expect(this.action.payload).toBeDefined();
    });

    it('Should return  a type of EXPENSE_CREATE', () => {
      expect(this.action.type).toEqual('EXPENSE_CREATE');
    });

    it('Should return a payload with the data sent', () => {
      expect(this.action.payload.name).toEqual('toejam');
      expect(this.action.payload.amount).toEqual(.06);
      expect(this.action.payload.category_id).toEqual(13);
    });

    it('Should return a payload with appended data', () => {
      expect(this.action.payload.timeStamp).toBeDefined();
      expect(this.action.payload.id).toBeDefined();
    });
  }); 

  describe('expense_update test', () => {
    beforeAll(() => {
      this.timeStamp = new Date().toDateString;
      this.action = expense_update(
        {
          name: 'fungi', 
          amount: 21,
          timeStamp: this.timeStamp,
          id: 86,
          category_id: 27,
        });
    });

    it('Should return a payload and type action message', () => {
      expect(this.action).toBeInstanceOf(Object);
      expect(this.action.type).toBeDefined();
      expect(this.action.payload).toBeDefined();
    });

    it('Should return  a type of EXPENSE_UPDATE', () => {
      expect(this.action.type).toEqual('EXPENSE_UPDATE');
    });

    it('Should return a payload with the data sent', () => {
      expect(this.action.payload.name).toEqual('fungi');
      expect(this.action.payload.amount).toEqual(21);
      expect(this.action.payload.timeStamp).toEqual(this.timeStamp);
      expect(this.action.payload.category_id).toEqual(27);
      expect(this.action.payload.id).toEqual(86);
    });
  }); 

  describe('expense_delete test', () => {
    beforeAll(() => {
      this.action = expense_delete({
        name: 'fungi', 
        amount: 21,
        timeStamp: this.timeStamp,
        id: 86,
        category_id: 27,
      });
    });

    it('Should return a payload and type action message', () => {
      expect(this.action).toBeInstanceOf(Object);
      expect(this.action.type).toBeDefined();
      expect(this.action.payload).toBeDefined();
    });

    it('Should return  a type of EXPENSE_DELETE', () => {
      expect(this.action.type).toEqual('EXPENSE_DELETE');
    });

    it('Should return a payload with the data sent', () => {
      expect(this.action.payload.name).toEqual('fungi');
      expect(this.action.payload.amount).toEqual(21);
      expect(this.action.payload.timeStamp).toEqual(this.timeStamp);
      expect(this.action.payload.category_id).toEqual(27);
      expect(this.action.payload.id).toEqual(86);
    });
  });

  describe('category_reset test', () => {
    beforeAll(() => {
      this.action = expense_reset();
    });

    it('Should return a payload and type action message', () => {
      expect(this.action).toBeInstanceOf(Object);
      expect(this.action.type).toBeDefined();
      expect(this.action.payload).not.toBeDefined();
    });

    it('Should return  a type of EXPENSE_RESET', () => {
      expect(this.action.type).toEqual('EXPENSE_RESET');
    });
  });

});