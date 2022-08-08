import * as React from 'react';
import  {InfoProvider}  from './src/context/GlobalContext';
import AppRotas from './src/rotas/AppRotas'
import Loading from './src/telas/loading';


export default function App() {
  return (
    <InfoProvider>
      <AppRotas/>
    </InfoProvider>
    );
}