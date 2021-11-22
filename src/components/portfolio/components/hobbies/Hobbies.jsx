import {
  Box,
  Heading,
  Divider,
  Text,
  UnorderedList,
  ListItem,
  ListIcon,
  Flex,
  Stack,
} from '@chakra-ui/layout';
import { BsBullseye } from 'react-icons/bs';
import { hobbies } from '../../data/sidebarData';
import HobbiesCarousel from './components/HobbiesCarousel';
const Hobbies = () => {
  return (
    <Box>
      <Heading fontFamily='Patrick Hand' textAlign='center'>
        Hobbies and Interests
      </Heading>
      <Text textAlign='center'>
        Outside of Coding, Research and Learning new things, I involve in other
        activities like
      </Text>
      <Divider mb={6} />
      <Flex h='100%' justify='space-between' align='center'>
        <UnorderedList spacing={3}>
          {hobbies.map((hobby) => (
            <ListItem
              key={hobby.hobby}
              fontSize='18px'
              fontWeight='600'
              letterSpacing='1px'
              color='rgba(7, 48, 18, 0.8)'
            >
              <ListIcon as={BsBullseye} color='#018c26' />
              {hobby.hobby}
            </ListItem>
          ))}
        </UnorderedList>
        <Divider
          opacity='0.7'
          bgColor='rgba(7, 48, 18, 0.8)'
          w='2px'
          h='350px'
        />
        {/* carousel showing images for moments */}
        <HobbiesCarousel />
      </Flex>
    </Box>
  );
};

export default Hobbies;
