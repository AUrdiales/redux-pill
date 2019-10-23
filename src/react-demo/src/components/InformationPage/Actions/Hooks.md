const MyComponent = props => {
    const name = useSelector(state => state.name);

    return (
        <div>
            {name} {props.surname}
        </div>
    );
};
