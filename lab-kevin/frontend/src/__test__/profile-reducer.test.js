import expenseReducer from '../reducers/expense.js';


describe('Expense Reducer Test', function(){
 
  describe('CATEGORY_CREATE Test', () => {

    beforeAll(() => {

      this.timeStamp = new Date().toDateString();
      this.action = {
        type: 'CATEGORY_CREATE',
        payload:  {
          id: 401,
          timeStamp: this.timeStamp,
          name: 'Code Fellows Survival Supplies',
          amount: 43.58,
        },
      };
      
      this.createCatState = expenseReducer({}, this.action);
    });
    
    it('Should create a property name with the category id with an array as the value in the state object', () => {
      expect(this.createCatState).toBeInstanceOf(Object);
      expect(this.createCatState.hasOwnProperty('401')).toBe(true);
      expect(this.createCatState['401'].length).toEqual(0);
    });
  });

  describe('EXPENSE_CREATE TEST', () => {

    beforeAll(() => {

      this.timeStamp = new Date().toDateString();
      this.action = {
        type: 'EXPENSE_CREATE',
        payload:  {
          category_id: 401,
          id: 17,
          timeStamp: this.timeStamp,
          name: 'crying cap',
          amount: 3.49,
        },
      };
      
      this.createExpenseState = expenseReducer(this.createCatState, this.action);
      this.expense = this.createExpenseState['401'][0];
    });
    
    it('Should add an expense object to the category array in the state object', () => {
      expect(this.createExpenseState).toBeInstanceOf(Object);
      expect(this.createExpenseState['401'].length).toEqual(1);
    });

    it('Should contain an expense object with the data that was sent', () => {
      expect(this.expense.id).toEqual(17);
      expect(this.expense.category_id).toEqual(401);
      expect(this.expense.name).toEqual('crying cap');
      expect(this.expense.amount).toEqual(3.49);
      expect(this.expense.timeStamp).toEqual(this.timeStamp);
    });

  
  });

  describe('CATEGORY_UPDATE Test', () => {

    beforeAll(() => {
      this.timeStamp = new Date().toDateString();
      this.action = {
        type: 'EXPENSE_UPDATE',
        payload:  {
          category_id: 401,
          id: 17,
          timeStamp: this.timeStamp,
          name: 'crying cap',
          amount: 13.27,
        },
      };
      this.updateExpenseState = expenseReducer(this.createExpenseState, this.action);
      this.expense = this.updateExpenseState['401'][0];
    });
    
    it('Should update an expense and return a state object with an array of expenses for each category id', () => {
      expect(this.updateExpenseState).toBeInstanceOf(Object);
      expect(this.updateExpenseState['401'].length).toEqual(1);
    });

    it('Should contain an category object with the modified data that was sent', () => {
      expect(this.expense.id).toEqual(17);
      expect(this.expense.category_id).toEqual(401);
      expect(this.expense.name).toEqual('crying cap');
      expect(this.expense.amount).toEqual(13.27);
      expect(this.expense.timeStamp).toEqual(this.timeStamp);
    });
  });

  describe('EXPENSE_DELETE Test', () => {

    beforeAll(() => {
      this.timeStamp = new Date().toDateString();
      this.action = {
        type: 'EXPENSE_DELETE',
        payload:  {
          category_id: 401,
          id: 17,
          timeStamp: this.timeStamp,
          name: 'crying cap',
          amount: 13.27,
        },
      };

      this.action_none = {
        type: 'EXPENSE_DELETE',
        payload:  {
          category_id: 401,
          id: 23,
          timeStamp: this.timeStamp,
          name: 'Pork flavored Ramen noodles, 2 cases',
          amount: 12.99,
        },
      };

      this.deleteExpenseState = expenseReducer(this.updateExpenseState, this.action);
      this.deleteExpenseStateNone = expenseReducer(this.updateExpenseState, this.action_none);
    });
    
    it('Should delete an  expense and return a state object without the object', () => {
      expect(this.deleteExpenseState).toBeInstanceOf(Object);
      expect(this.deleteExpenseState['401'].length).toEqual(0);
    });

    it('Should not delete an expense that does not exist', () => {
      expect(this.deleteExpenseState).toBeInstanceOf(Object);
      expect(this.deleteExpenseStateNone['401'].length).toEqual(1);
    });
  });


  describe('CATEGORY_DELETE Test', () => {

    beforeAll(() => {

      this.action = {
        type: 'CATEGORY_DELETE',
        payload: 401,
      };

      this.action_none = {
        type: 'CATEGORY_DELETE',
        payload: 301,
      };
   
      this.deleteCatState = expenseReducer(this.updateExpenseState, this.action);
      this.deleteCatStateNone = expenseReducer(this.updateExpenseState, this.action_none);
    });
    
    it('Should delete a category and return a state object without the expense object', () => {
      expect(this.deleteCatState).toBeInstanceOf(Object);
      expect(this.deleteCatState['401']).toBeUndefined();
    });

    it('Should not delete a category that does not exist', () => {
      expect(this.deleteCatStateNone).toBeInstanceOf(Object);
      expect(this.deleteCatStateNone['401'].length).toEqual(1);
    });
  });

  describe('EXPENSE_RESET Test', () => {

    beforeAll(() => {
      this.action = {
        type: 'EXPENSE_RESET',
      };
      this.resetExpenseState = expenseReducer(this.updateExpenseState, this.action);
    });
    
    it('Should reset state to an empty array', () => {
      expect(this.resetExpenseState).toBeInstanceOf(Object);
      expect(Object.keys(this.resetExpenseState).length).toEqual(0);
    });
  });

});