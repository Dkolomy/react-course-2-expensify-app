//const moment = require.requireActual('moment');
const moment = jest.requireActual('moment');
export default (timestamp = 0) => {
    return moment(timestamp);
};
