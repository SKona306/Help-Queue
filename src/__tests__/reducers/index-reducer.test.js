import rootReducer from '../../reducer/index';
import { createStore } from 'redux';
import formVisibleReducer from '../../reducer/form-visible-reducer';
import ticketListReducer from '../../reducer/ticket-list-reducer';
import * as c from '../../actions/ActionTypes';

let store =createStore(rootReducer);

describe('rootReducer', () => {

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      mainTicketList: {},
      formVisibleOnPage: false
    });
  });

  test('Check that initial state of ticketListReducer matches root reducer', () => {
    expect(store.getState().mainTicketList).toEqual(ticketListReducer(undefined, { type: null }));
  });

  test('Check that initial state of formVisibleReducer matched root reducer', () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }));
  });

  test('Check that TOGGLE_FORM action works for formVisibleReducer and root reducer' , () => {
    const action = {
      type: c.TOGGLE_FORM
    }

    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));
  });
});