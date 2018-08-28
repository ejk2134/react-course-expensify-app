import authReducer from '../../reducers/auth';

test('should log user in', () => {
    const uid = 'abc123';
    const action = {
        type: 'LOGIN',
        uid
    };
    const state = authReducer(undefined, action);
    expect(state).toEqual({ uid });
});

test('should log user out', () => {
    const state = authReducer({ uid: 'blah123' }, { type: 'LOGOUT' });
    expect(state).toEqual({});
});