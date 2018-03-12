import categoryReducer from '../reducers/category.js';


describe('Category Reducer Test', function(){
 
  describe('CATEGORY_CREATE Test', () => {

    beforeAll(() => {

      this.timeStamp = new Date().toDateString();
      this.action = {
        type: 'CATEGORY_CREATE',
        payload:  {
          id: 39,
          timeStamp: this.timeStamp,
          name: 'Evil Robots',
          amount: 29.99,
        },
      };
      
      this.createState = categoryReducer([], this.action);
      this.category = this.createState[0];
    });
    
    it('Should create a category and return a state object with an array of categories', () => {
      expect(this.createState).toBeInstanceOf(Array);
      expect(this.createState.length).toEqual(1);
    });

    it('Should contain an category object with the data that was sent', () => {
      expect(this.category.id).toEqual(39);
      expect(this.category.name).toEqual('Evil Robots');
      expect(this.category.amount).toEqual(29.99);
      expect(this.category.timeStamp).toEqual(this.timeStamp);
    });
  });

  describe('CATEGORY_UPDATE Test', () => {

    beforeAll(() => {

      this.timeStamp = new Date().toDateString();
      this.action = {
        type: 'CATEGORY_UPDATE',
        payload:  {
          id: 39,
          timeStamp: this.timeStamp,
          name: 'Evil Robots',
          amount: 199.99,
        },
      };
   
      this.updateState = categoryReducer(this.createState, this.action);
      this.category = this.updateState[0];
    });
    
    it('Should update a category and return a state object with an array of categories', () => {
      expect(this.updateState).toBeInstanceOf(Array);
      expect(this.updateState.length).toEqual(1);
    });

    it('Should contain an category object with the modified data that was sent', () => {
      expect(this.category.id).toEqual(39);
      expect(this.category.name).toEqual('Evil Robots');
      expect(this.category.amount).toEqual(199.99);
      expect(this.category.timeStamp).toEqual(this.timeStamp);
    });
  });

  describe('CATEGORY_DELETE Test', () => {

    beforeAll(() => {

      this.timeStamp = new Date().toDateString();
      this.action = {
        type: 'CATEGORY_DELETE',
        payload: 39,
      };

      this.action_none = {
        type: 'CATEGORY_DELETE',
        payload: 79,
      };
   
      this.deleteState = categoryReducer(this.updateState, this.action);
      this.deleteStateNone = categoryReducer(this.updateState, this.action_none);
    });
    
    it('Should delete a category and return a state object without the object', () => {
      expect(this.deleteState).toBeInstanceOf(Array);
      expect(this.deleteState.length).toEqual(0);
    });

    it('Should not delete a category that does not exist', () => {
      expect(this.deleteStateNone).toBeInstanceOf(Array);
      expect(this.deleteStateNone.length).toEqual(1);
    });
  });

  describe('CATEGORY_RESET Test', () => {

    beforeAll(() => {
      this.timeStamp = new Date().toDateString();
      this.action = {
        type: 'CATEGORY_RESET',
      };
      this.resetState = categoryReducer(this.updateState, this.action);
    });
    
    it('Should reset state to an empty array', () => {
      expect(this.deleteState).toBeInstanceOf(Array);
      expect(this.deleteState.length).toEqual(0);
    });
  });

});