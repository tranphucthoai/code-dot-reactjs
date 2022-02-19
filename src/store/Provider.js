import Context from "./Context";

function Provider({ children, values }) {
  <Context.Provider value={values}>{children}</Context.Provider>;
}

export default Provider;
