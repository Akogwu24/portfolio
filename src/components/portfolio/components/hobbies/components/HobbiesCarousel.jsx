import React, { useState, useEffect } from 'react';
import { Box, Circle, Square } from '@chakra-ui/layout';
import { FcPrevious, FcNext } from 'react-icons/fc';
import { Img } from '@chakra-ui/image';
import { hobbiesImages } from '../../../data/sidebarData';
import { useDisclosure } from '@chakra-ui/react';
import { Slide } from '@chakra-ui/react';

const HobbiesCarousel = () => {
  const [index, setIndex] = useState(0);
  const { image } = hobbiesImages[index];
  const { isOpen, onToggle } = useDisclosure();

  const handlePrevious = () => {
    index === 0
      ? setIndex(hobbiesImages.length - 1)
      : setIndex((index) => index - 1);
  };

  useEffect(() => {
    setInterval(() => {
      // handleNext();
    }, 2000);
    return () => {
      clearInterval();
    };
  }, []);

  const handleNext = () => {
    index === hobbiesImages.length - 1
      ? setIndex(0)
      : setIndex((index) => index + 1);
  };
  return (
    <Square flex={0.8} justifyContent='space-between'>
      <Circle {...iconContainer} onClick={handlePrevious}>
        <FcPrevious {...icon} />
      </Circle>

      <Box bg='red' w='250px' h='180px'>
        <Img
          w='100%'
          h='100%'
          // objectFit='cover'
          borderRadius='5px'
          src={image}
          alt='moments'
        />
      </Box>

      <Circle {...iconContainer} onClick={handleNext}>
        <FcNext {...icon} />
      </Circle>
    </Square>
  );
};

export default HobbiesCarousel;

const icon = { size: 25 };
const iconContainer = {
  bg: 'gray.300',
  p: 2,
  cursor: 'pointer',
  transition: 'all 0.2s ease-in',
  _hover: { bg: 'gray.400' },
};
