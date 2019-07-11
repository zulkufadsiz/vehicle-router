import { createBrowserHistory } from 'history';

const history = createBrowserHistory();
// Listen for changes to the current location.
// const unlisten = history.listen((location, action) => {
//   // location is an object like window.location
// });

export default history;
