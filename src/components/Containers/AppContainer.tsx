import { ReactNode } from 'react';
import AppBar from '../AppBar';

type AppContainerProps = { 
  children: ReactNode;
}

export function AppContainer(props: AppContainerProps) {
  return (
    <div>
      <AppBar />
      {props.children}
    </div>
  );
}
