/* eslint-disable no-case-declarations */
/* eslint-disable no-undef */
let initialState = {
  categoriesList : [
    {name : 'Clothes1',displayName : 'Clothes dress',description : 'ggggg'},
    {name : 'Clothes2',displayName : 'Clothes dress',description : 'ggggg'},
    {name : 'Clothes23',displayName : 'Clothes dress',description : 'ggggg'},
    {name : 'Clothes4',displayName : 'Clothes dress',description : 'ggggg'},
  ],
  active:'false',
};
export default (state = initialState, action) => {
  let { type, payload } = action;
  console.log('action',action);

  switch (type) {
    case 'CATEGORIES':
      let active = !state.active;

      let categories = state.categoriesList.map(category => {
        console.log('category',category);
        if ((category.name === payload) && active) {
          return { name: categoriesList.name, displayName: categoriesList.displayName  };
        }
        return {};
      });

      return { categories  };


    default:
      return state;
  }
};

export const categories = name => {
  return {
    type: 'CATEGORIES',
    payload: name,
  };
};


