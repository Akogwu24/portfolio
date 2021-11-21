import { Box, HStack, Text } from '@chakra-ui/layout';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/tabs';
import React from 'react';
import ContentWrapper from '../common/Wrapper';
import Hobby from './components/hobbies/Hobbies';
import Projects from './components/projects/Projects';
import ToolBox from './components/toolbox/ToolBox';
import sidebarNav from './data/sidebarData';
import Milestones from './components/milestones/Milestone';

const index = () => {
  return (
    <Box bg='gray.50' pb={32} pt={64}>
      <ContentWrapper>
        <Box>
          <Tabs variant='unstyled' bg='gray.100' shadow='xl' display='flex'>
            <TabList
              flex={2.5}
              pb={10}
              pt={20}
              borderRadius='2px'
              display='flex'
              shadow='5px 0px 6px 1px rgba(0,0,0,0.2)'
              flexDirection='column'
              minW='250px'
            >
              {sidebarNav.map((nav, index) => (
                <Tab
                  key={nav.title}
                  my={6}
                  mx={3}
                  fontFamily='Courgette'
                  bg='gray.100'
                  className='tab'
                  _selected={{
                    boxShadow:
                      'inset 5px 5px 10px 0 rgba(0, 0, 0, 0.2), inset -8px -8px 16px 0 rgba(255, 255, 255, 0.4)',
                  }}
                  _focus={{ border: 'none' }}
                >
                  <HStack w='100%'>
                    <Box>{nav.icon}</Box>
                    <Text fontSize='17px' pl={2} textAlign='left' flex={1}>
                      {nav.title}
                    </Text>
                  </HStack>
                </Tab>
              ))}
            </TabList>

            <TabPanels flex={7.5}>
              <TabPanel>
                <Projects />
              </TabPanel>
              <TabPanel>
                <ToolBox />
              </TabPanel>
              <TabPanel>
                <Milestones />
              </TabPanel>
              <TabPanel>
                <Hobby />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </ContentWrapper>
    </Box>
  );
};

export default index;
