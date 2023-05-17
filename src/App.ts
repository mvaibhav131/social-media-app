import { RouterProvider } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import {router} from "lib/routes"; // you don't need to get file path due to jsconfig.json file


function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router}/>
    </ChakraProvider>
  );
}

export default App;
