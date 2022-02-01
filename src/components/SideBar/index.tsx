import React from 'react';
import List from '../List';
import News from '../News';
import StickyBox from 'react-sticky-box';
import FollowSuggestion from '../FollowSuggestion';
import {Container, SearchWrapper, SearchInput, SearchIcon, Body} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon/>
      </SearchWrapper>
      <StickyBox>
        <Body>
          <List 
            title = "U may like it!"
            elements = {[
              <FollowSuggestion name = "Nikaido" nickname = "@nikaido_mahou"/>,
              <FollowSuggestion name = "Caiman" nickname = "@crazy_lizard"/>,
              <FollowSuggestion name = "Eren Jaeger" nickname = "@badass_titan"/>
            ]}/>
          <List   
            title = "U may like it!"
            elements = {[
              <News/>,
              <News/>,
              <News/>
            ]}/>
          <List 
            title = "U may like it!"
            elements = {[
              <News/>,
              <News/>,
              <News/>
            ]}/>
        </Body>
      </StickyBox>
    </Container>
  );
}

export default SideBar;