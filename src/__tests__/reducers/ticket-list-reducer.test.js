import ticketListReducer from '../../reducer/ticket-list-reducer';
import * as c from '../../actions/ActionTypes';

describe('tickietListReducer', () => {

  let action;
  const currentState = {
    1 : {
    names: 'Ryan and Aimen',
    location: '5c',
    issue:'redux action is not working correctly',
    id: 1
    },
    2 : {
      names: 'Jasmine and Justin',
      location: '2b',
      issue: 'Reducer has side effects.',
      id: 2
    }
  }

  const ticketData = {
      names: 'Ryan and Aimen',
      location: '5c',
      issue:'redux action is not working correctly',
      id: 1
    }

    test('Should successfully delete a ticket', () => {
      action = {
        type: c.DELETE_TICKET,
        id: 1
      };
      expect(ticketListReducer(currentState, action)).toEqual({
        2: {
          names: 'Jasmine and Justin',
          location: '2b',
          issue: 'Reducer has side effects.',
          id: 2
        }
      });
    });

  test('Should successfully add new ticket data to mainTicketList', () => {
    const { names, location, issue, id } = ticketData;
    action = {
      type: c.ADD_TICKET,
      names: names,
      location: location,
      issue: issue,
      id: id
    }

    expect(ticketListReducer({}, action)).toEqual({
      [id] : {
        names:names,
        location: location,
        issue: issue,
        id: id
      }
    });
  });

  test('Should return default state if there is no action type pased into the reducer', () => {
    expect(ticketListReducer({}, {type:null })).toEqual({});
  });
});