import React from 'react';
import { Box, Flex, VStack } from '@chakra-ui/react';
import Navigation from './common/Navigation';
import Content from './common/Content';

function Dashboard() {
  return(
    <div>
        <Box display='flex' w='full'>
                <Navigation/>
                <Content/>
        </Box>
    </div>
  );
}

export default Dashboard;
