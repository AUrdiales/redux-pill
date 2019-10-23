class MyComponent extends Component {
    render() {
        return <div>{this.props.name}</div>;
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        name: state.name,
        surname: ownProps.surname,
    };
};

export const MyComponentConnected = connect(mapStateToProps)(MyComponent);
