// Get visible expenses
import moment from "moment";

export default (expenses, {text, sortedBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt);

                                    // startDate <= createdAtMoment
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
                                    // endDate >= createdAtMoment
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;

        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if(sortedBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        else if(sortedBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
};
