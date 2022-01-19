import formVisibleReducer from '../../reducer/form-visible-reducer';
import * as c from '../../actions/ActionTypes';

describe("formVisibleReducer", () => {

  test('Should return default state if no action type is reconized', () => {
    expect(formVisibleReducer(false, { type: null })).toEqual(false);
  });

  test('Should toggle form visiblity state to true', () => {
    expect(formVisibleReducer(false, { type: c.TOGGLE_FORM})).toEqual(true);
  });
});