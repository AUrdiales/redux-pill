import { createStore as createReduxStore } from "redux";

import mainReducer from "<reducer-path>";

export function createStore() {
return createReduxStore(mainReducer, {});
}

class MyComponent extends Component {

render() {
return (

        <div>
            {localState}
        </div>
            )
        }
        }

export const MyComponentConnected = connect(mapStateToProps)(MyComponent)

ReactDOM.render(<Provider store={createStore()}><MyComponentConnected /></Provider>);
