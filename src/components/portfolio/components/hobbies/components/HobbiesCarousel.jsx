import React, { useState, useEffect } from 'react';
import { Box, Circle, Square } from '@chakra-ui/layout';
import { FcPrevious, FcNext } from 'react-icons/fc';
import { Img } from '@chakra-ui/image';
import { hobbiesImages } from '../../../data/sidebarData';

const HobbiesCarousel = () => {
  const [index, setIndex] = useState(0);
  const { image } = hobbiesImages[index];

  const handlePrevious = () => {
    if (index === 0) {
      setIndex(hobbiesImages.length - 1);
    } else {
      setIndex((index) => index - 1);
    }
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
    if (index === hobbiesImages.length - 1) {
      setIndex(0);
    } else {
      setIndex((index) => index + 1);
    }
  };
  return (
    <Square flex={0.8} justifyContent='space-between' px={8}>
      <Circle {...iconContainer} onClick={handlePrevious}>
        <FcPrevious {...icon} />
      </Circle>
      <Box>
        <Img w='200px' borderRadius='5px' src={image} alt='moments' />
      </Box>
      <Circle {...iconContainer} onClick={handleNext}>
        <FcNext {...icon} />
      </Circle>
    </Square>
  );
};

export default HobbiesCarousel;

const icon = { size: 25 };
const iconContainer = { bg: 'gray.300', p: 2, cursor: 'pointer' };
