export function changeRoute(route: string) {
  return {
    type: "CHANGE_PAGE",
    payload: { route }
  };
}
