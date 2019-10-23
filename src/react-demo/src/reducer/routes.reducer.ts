export function routesReducer(
  state = { currentRoute: "information" },
  action: { type: string; payload: any }
) {
  switch (action.type) {
    case "CHANGE_PAGE":
      return {
        ...state,
        currentRoute: action.payload.route
      };

    default:
      return state;
  }
}
