import moment from "moment";

const filters = {
    text: '',
    sortedBy: 'date',
    startDate: 'undefined',
    endDate: 'undefined'
};

const altFilters = {
    text: 'bills',
    sortedBy: 'amount',
    startDate: moment(0),
    endDate: moment(0).add(3, 'days')
};

export {filters, altFilters};