import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

const TOKEN_API = "token";

const TokenApiContext = createContext({} as TokenApiData);

interface TokenApiData {
  tokenApi: string | null;
  setTokenApi: Dispatch<SetStateAction<string | null>>;
  deleteTokenApi: () => void;
}

export function TokenApiProvider({ children }: { children: ReactNode }) {
  const [tokenApi, setTokenApi] = useState(localStorage.getItem(TOKEN_API));
  useEffect(() => {
    if (tokenApi) {
      localStorage.setItem("token", tokenApi);
    }
  }, [tokenApi]);

  function deleteTokenApi() {
    localStorage.removeItem("token");
    setTokenApi(null);
  }

  return (
    <TokenApiContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        tokenApi,
        setTokenApi,
        deleteTokenApi,
      }}
    >
      {children}
    </TokenApiContext.Provider>
  );
}

export function useTokenApi(): TokenApiData {
  return useContext(TokenApiContext);
}
