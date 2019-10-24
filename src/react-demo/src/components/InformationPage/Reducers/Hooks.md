
export const INCREMENT = 'INCREMENT';
export const SET_COUNT = 'SET_COUNT';

export const incrementCount = () => {
    return {
        type: INCREMENT,
    };
};

export const setCount = count => {
    return {
        type: SET_COUNT,
        payload: {
            count,
        },
    };
};

// pass the action directly
dispatch({ type: INCREMENT });

// pass an action creator that we defined before
dispatch(setCount(5))

// usage with react hooks
const MyComponent = props => {
    const dispatch = useDispatch()

    return (
        <div>
            <button onClick={incrementCount()}>increment count</button>
        </div>
    );
};
