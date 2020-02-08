import uuid from 'uuid';
export default {
    list: {
        items: [
            { id: uuid(), name: 'Eggs' },
            { id: uuid(), name: 'Milk' },
            { id: uuid(), name: 'Bread' },
        ],
        loading: false,
    }
}