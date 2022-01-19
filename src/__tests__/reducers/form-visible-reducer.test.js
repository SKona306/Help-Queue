import formVisibleReducer from '../../reducer/form-visible-reducer';

describe("formVisibleReducer", () => {

  test('Should return default state if no action type is reconized', () => {
    expect(formVisibleReducer(false, { type: null })).toEqual(false);
  });

  test('Should toggle form visiblity state to true', () => {
    expect(formVisibleReducer(false, { type: 'TOGGLE_FORM'})).toEqual(true);
  });
});