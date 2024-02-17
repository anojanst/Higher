export type ExplorerConfig = {
  apiUrl: string;
};

export const getConfig = (): ExplorerConfig => {
  let config: ExplorerConfig = {
    apiUrl: import.meta.env.VITE_REACT_API_URL,
  };

  return config;
};
