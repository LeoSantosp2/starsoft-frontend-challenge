import { useState, useContext, createContext } from 'react';

import { ShowHiddenContextProps } from '../types/show-hidden-context-props';

interface Props {
  children: React.ReactNode;
}

export const ShowHiddenContext = createContext<ShowHiddenContextProps>(
  {} as ShowHiddenContextProps,
);

export const ShowHiddenProvider: React.FC<Props> = ({ children }: Props) => {
  const [showHidden, setShowHidden] = useState(-999);

  const handleShowHidden = (value: number) => {
    setShowHidden(value);
  };

  return (
    <ShowHiddenContext.Provider value={{ showHidden, handleShowHidden }}>
      {children}
    </ShowHiddenContext.Provider>
  );
};

export const useShowHidden = () => {
  const context = useContext(ShowHiddenContext);

  return context;
};
