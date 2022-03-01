import React from 'react';
import { Box, Flex, VStack } from '@chakra-ui/react';
import Navigation from './common/Navigation';
import { Outlet } from 'react-router-dom';
import store from '../redux/store';

function Dashboard() {
  
  return(
    <div>
        <Box display='flex' w='full'>
                {/* <h1>{JSON.stringify(store.getState())}</h1> */}
                <Navigation/>
                <Outlet/>
        </Box>
    </div>
  );
}

export default Dashboard;
