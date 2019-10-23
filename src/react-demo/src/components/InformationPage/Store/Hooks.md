import { createStore as createReduxStore } from 'redux';

import mainReducer from '<reducer-path>';

export function createStore() {
    return createReduxStore(mainReducer, {});
}

const MyComponent = () => {
    const store = useStore();

    return <div>{store.getState()}</div>;
};

ReactDOM.render(
    <Provider store={createStore()}>
        <MyComponentConnected />
    </Provider>,
);
