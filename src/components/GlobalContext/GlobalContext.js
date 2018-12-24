// import React from 'react';
//
// import axios from 'axios';
//
// const _defaultState = {
//   films: {
//     ids: [],
//     items: {},
//     currentFilm: {},
//   },
// };
//
// const GlobalContext = React.createContext(_defaultState);
//
// const isServer = typeof window === 'undefined';
// const INITIAL_STATE = !isServer && window.INITIAL_STATE ? window.INITIAL_STATE : { ..._defaultState };
//
// const _connect = (Component, props) => state => {
//   return <Component globalState={{ ...state }} {...props} />;
// };
//
// export function connect(Component) {
//   return class extends React.Component {
//     render() {
//       return <GlobalContainer>
//         <GlobalContext.Consumer>
//           {_connect(Component, this.props)}
//         </GlobalContext.Consumer>
//       </GlobalContainer>;
//     }
//   }
// }
//
// export default class GlobalContainer extends React.Component {
//   constructor(props) {
//     super(props);
//     this.actions = {
//       fetchFilms: this.handleFetchFilms,
//       fetchFilm: this.handleFetchFilm,
//       selectFilm: this.handleSelectFilm,
//     };
//     this.state = { ...INITIAL_STATE };
//   }
//
//   handleFetchFilms = async () => {
//     const response = await axios.get(`https://swapi.co/api/films/`);
//     let data = response.data.results.reduce((acc, result) => {
//       if (!acc.ids.includes(result.url)) {
//         acc.ids = [...acc.ids, result.url];
//       }
//       acc.items[result.url] = { ...result };
//       return acc;
//     }, this.state.films);
//     this.setState({ films: { ...data } })
//   };
//
//   handleFetchFilm = (fid) => {
//
//   };
//
//   handleSelectFilm = (fid) => {
//
//   };
//
//   render() {
//     return (
//       <GlobalContext.Provider
//         value={{
//           state: this.state,
//           actions: this.actions,
//         }}
//       >
//         {this.props.children}
//       </GlobalContext.Provider>
//     );
//   }
// }
