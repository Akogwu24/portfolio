import React from 'react';
import { Box, Divider, Grid, GridItem, Heading, Text } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import react from '../../../../assets/react.svg';
import bootstrap from '../../../../assets/bootstrap-original.svg';
import css from '../../../../assets/css3.svg';
import git from '../../../../assets/git.svg';
import npm from '../../../../assets/npm.svg';
import tailwind from '../../../../assets/tailwindcss.svg';
import yarn from '../../../../assets/yarn.svg';
import wordpress from '../../../../assets/wordpress.svg';
import github from '../../../../assets/github.svg';
import google from '../../../../assets/google.svg';
import graphql from '../../../../assets/graphql.svg';
import html from '../../../../assets/html5.svg';
import javascript from '../../../../assets/javascript.svg';

const ToolBox = () => {
  return (
    <Box>
      <Heading pb={10} fontFamily='Patrick Hand' textAlign='center'>
        Tool box
      </Heading>
      <Grid
        templateColumns='repeat(5, 1fr)'
        textAlign='center'
        fontWeight='500'
        color='gray.600'
        rowGap='20px'
      >
        <GridItem>
          <Image mx='auto' w='55px' src={react} alt='react' />
          <Text>React</Text>
        </GridItem>
        <GridItem>
          <Image mx='auto' w='55px' src={javascript} alt='javascript' />
          <Text>Javascript</Text>
        </GridItem>
        <GridItem>
          <Image mx='auto' w='55px' src={css} alt='css' />
          <Text>CSS</Text>
        </GridItem>
        <GridItem>
          <Image mx='auto' w='55px' src={bootstrap} alt='bootstrap' />
          <Text>Bootstrap</Text>
        </GridItem>
        <GridItem>
          <Image mx='auto' w='55px' src={git} alt='git' />
          <Text>Git</Text>
        </GridItem>
        <GridItem>
          <Image mx='auto' w='55px' src={tailwind} alt='tailwind' />
          <Text>Tailwind CSS</Text>
        </GridItem>
        <GridItem>
          <Image mx='auto' w='55px' src={html} alt='html' />
          <Text>HTML5</Text>
        </GridItem>
        <GridItem>
          <Image mx='auto' w='55px' src={graphql} alt='graphql' />
          <Text>GraphQL</Text>
        </GridItem>
        <GridItem>
          <Image mx='auto' w='55px' src={npm} alt='npm' />
          <Text>npm</Text>
        </GridItem>
        <GridItem>
          <Image mx='auto' w='55px' src={google} alt='googl' />
          <Text>Google</Text>
        </GridItem>
        <GridItem>
          <Image mx='auto' w='55px' src={github} alt='github' />
          <Text>GitHub</Text>
        </GridItem>
        <GridItem>
          <Image mx='auto' w='55px' src={wordpress} alt='wordpress' />
          <Text>Wordpress</Text>
        </GridItem>
        <GridItem>
          <Image mx='auto' w='55px' src={yarn} alt='yarn' />
          <Text>Yarn</Text>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default ToolBox;
