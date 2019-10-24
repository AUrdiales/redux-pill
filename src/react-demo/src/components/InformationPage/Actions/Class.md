
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

// usage with react class
class MyComponent extends Component {
    render() {
        return (
            <div>
                <button onClick={setCount(5)}>set count to 10</button>
            </div>
        );
    }
}

const mapDispatchToProps = (state) => {
    return {
        increment: () => dispatch(incrementCount()),
        setCount: () => dispatch(setCount())
    };
};

export const MyComponentConnected = connect(mapDispatchToProps)(MyComponent);
