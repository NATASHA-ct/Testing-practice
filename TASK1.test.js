const stringLength = require('./TASK1'); 

  
    test('is length greater than 1', () =>{
        expect(stringLength('hello')).toBe(5);
    });


    test('is length less than 1', () =>{
        expect(stringLength('')).toBe('characters must be more than 1');
    });

    test('is length more than 10', () =>{
        expect(stringLength('lewandowski')).toBe('characters must be less than 10');
    });
  
   
   
