import { createContext } from "react";

const userContext = createContext({
  currentUser: "default user",
});

export default userContext;
