import React from 'react';
import { VStack, useColorModeValue, Box, Center} from '@chakra-ui/react';
import TopBar from './TopBar';

function Content() {
    const bgColor = useColorModeValue("gray.200","whiteAlpha.50");
    const plateColor = useColorModeValue("white","black");
  return (
  <VStack
    w="87%"
    bg={bgColor} 
    spacing={12}>
      <TopBar/>
      <Box w='50%' h='fit-content' bgColor={plateColor} p={10}><Center>Page Not Found</Center></Box>
  </VStack>
  );
}

export default Content;
