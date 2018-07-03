import types from '../actions/types';

const DEFAULT_STATE = {
    username: 'Guest'
};

export default (state = DEFAULT_STATE, action) => {

    console.log('User Reducer:', action);


    switch (action.type){
        default:
            return state;
    }
}
