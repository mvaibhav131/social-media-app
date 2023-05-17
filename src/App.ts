import { RouterProvider } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
// @ts-expect-error TS(2307): Cannot find module 'lib/routes' or its correspondi... Remove this comment to see the full error message
import {router} from "lib/routes"; // you don't need to get file path due to jsconfig.json file


function App() {
  return (
    // @ts-expect-error TS(2749): 'ChakraProvider' refers to a value, but is being u... Remove this comment to see the full error message
    <ChakraProvider>
      // @ts-expect-error TS(2749): 'RouterProvider' refers to a value, but is being u... Remove this comment to see the full error message
      <RouterProvider router={router}/>
    </ChakraProvider>
  );
}

export default App;
