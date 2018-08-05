import moment from 'moment';

export default [{
    id: '1',
    description: 'tennis shoes',
    note: '',
    amount: 195,
    createdAt: 0
}, {
    id: '2',
    description: 'falafel',
    note: '',
    amount: 195050,
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: '3',
    description: 'vegan steak',
    note: '',
    amount: 6969,
    createdAt: moment(0).add(4, 'days').valueOf()
}];