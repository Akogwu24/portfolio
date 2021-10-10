import { Box, Flex, Heading, HStack, Text } from '@chakra-ui/layout';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/tabs';
import React from 'react';
import { MdWork } from 'react-icons/md';
import ContentWrapper from '../common/Wrapper';
import Content from './components/Content';
import Sidebar from './components/Sidebar';
import Education from './components/tabs/Education';
import Hobby from './components/tabs/Hobby';
import Projects from './components/tabs/Projects';
import TechStatcks from './components/tabs/TechStatcks';
import sidebarNav from './data/sidebarData';

const index = () => {
  return (
    <Box bg='gray.50' py={64}>
      <ContentWrapper>
        <Box>
          <Tabs variant='unstyled' bg='gray.100' shadow='xl' display='flex'>
            <TabList
              flex={2.3}
              py={5}
              borderRadius='2px'
              display='flex'
              shadow='5px 0px 6px 1px rgba(0,0,0,0.2)'
              flexDirection='column'
            >
              {sidebarNav.map((nav, index) => (
                <Tab
                  key={index}
                  my={5}
                  className='tab'
                  _selected={{
                    color: 'rgba(250, 250, 250, 1)',
                    bg: 'rgba(25, 24, 97)',
                  }}
                  _focus={{ border: 'none' }}
                >
                  <HStack w='100%'>
                    <Box>{nav.icon}</Box>
                    <Text pl={2} textAlign='left' flex={1}>
                      {nav.title}
                    </Text>
                  </HStack>
                </Tab>
              ))}
            </TabList>

            <TabPanels flex={7.7}>
              <TabPanel>
                <Education />
              </TabPanel>
              <TabPanel>
                <Projects />
              </TabPanel>
              <TabPanel>
                <TechStatcks />
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
