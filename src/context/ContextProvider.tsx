/* eslint-disable @typescript-eslint/no-unused-expressions */
import {
  useState,
  useContext,
  createContext,
  useEffect,
  ReactNode,
  FC,
} from 'react';
import { baseURL } from '../baseURL';

interface ContextProviderProps {
  children: ReactNode;
}

const AppContext = createContext<any>(null);

const AppProvider: FC<ContextProviderProps> = ({ children }) => {
  const [posts, setPosts] = useState<any>([]);

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>('');

  const fetchData = () => {
    setLoading(true);
    fetch(baseURL)
      .then((res) => {
        if (!res.ok) {
          return setError('error happened');
        }
        return res.json();
      })
      .then((data) => setPosts(data));
    setLoading(false);
  };
  console.log(posts);

  useEffect(() => {
    fetchData();
  }, []);
  //console.log(data);
  return (
    <AppContext.Provider
      value={{
        posts,
        loading,
        error,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
