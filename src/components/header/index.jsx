import { Box, Flex, HStack, Text, VStack } from '@chakra-ui/layout';
import React from 'react';
import ContentWrapper from '../common/Wrapper';
import Navbar from './components/Navbar';
import twitter from '../../assets/twitter.png';
import SolidButton from '../common/SolidButton';
import { Image } from '@chakra-ui/image';
import wave from '../../assets/wave3.svg';

const index = () => {
  return (
    <Box
      className='hero'
      bg='myColor.primary'
      color='#FFF'
      h='70vh'
      fontFamily='Roboto'
    >
      <ContentWrapper>
        <Flex d='column' justifyContent='space-between' h='100%'>
          <Navbar />

          <HStack justify='space-between' h='calc(100% - 36px)'>
            <VStack align='start'>
              <HStack mb={4} spacing={4}>
                <img width='20px' src={twitter} alt='twitter' />
                <img width='20px' src={twitter} alt='twitter' />
                <img width='20px' src={twitter} alt='twitter' />
              </HStack>
              <Text>
                Hi, I am <span className='my-name'>Emmanuel</span>
              </Text>
              <Text>A Front End Developer With a Knack for building </Text>
              <Text>Excellent Client side Applications</Text>
              <SolidButton bg='myColor.tatiary' color='#000'>
                Hire Me
              </SolidButton>
            </VStack>
            <VStack
              w='300px'
              borderRadius='50%'
              borderBottom='2px solid #FDD2BF'
              pb='12px'
              pos='relative'
            >
              <Box
                h='100%'
                w='100%'
                bg='#000'
                pos='absolute'
                opacity='0.1'
                // zIndex={2}
                borderRadius='50%'
                pointerEvents='none'
              ></Box>
              <Image
                w='95%'
                _hover={{
                  transform: 'scale(1.07)',
                  transition: 'all 1s ease-in-out',
                }}
                borderRadius='50%'
                src='https://bit.ly/sage-adebayo'
                alt='Segun Adebayo'
              />
            </VStack>
          </HStack>
        </Flex>
      </ContentWrapper>
      <Box pointerEvents='none'>
        <Image src={wave} alt='wave' />
      </Box>
    </Box>
  );
};

export default index;
