import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortedBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')    
    });
});

test('should sort by amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortedBy).toBe('amount');
});

test('should sort by date', () => {
    const currentState = {
        text: '',
        sortedBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')            
    };
    const action = { type: 'SORT_BY_DATE' };
    const state = filtersReducer(currentState, action);
    expect(state.sortedBy).toBe('date');
});

test('should set text filter', () => {
    const text = 'Dimkas';
    const action = {
        type: 'SET_TEXT_FILTER', 
        text: text
    };
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe(text);
});

test('should set start date', () => {
    const startDate = moment();
    const action = {
        type: 'SET_START_DATE', 
        startDate: startDate    
    };
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toEqual(startDate);
});

test('should set end date', () => {
    const endDate = moment().subtract(4, 'days');
    const action = {
        type: 'SET_END_DATE', 
        endDate: endDate    
    };
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toEqual(endDate);
});
