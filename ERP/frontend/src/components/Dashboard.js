import React from 'react';
import { Box, Flex, VStack } from '@chakra-ui/react';
import Navigation from './common/Navigation';
import { Outlet } from 'react-router-dom';

function Dashboard() {
  return(
    <div>
        <Box display='flex' w='full'>
                <Navigation/>
                <Outlet/>
        </Box>
    </div>
  );
}

export default Dashboard;
