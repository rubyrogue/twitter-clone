import React from 'react';

import {Container, Retweeted, Body, Avatar,
        Content, Header, Dot, Description,
        ImageContent, Icons, Status,
        CommentIcon, LikeIcon, RetweetIcon} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RetweetIcon/>
        Você retweetou
      </Retweeted>
      <Body>
        <Avatar/>
        <Content>
          <Header>
            <strong>Dorohedoro
              <span>@dorohedoro</span>
              <Dot/>
              <time>29 de Ago</time>
            </strong>
          </Header>
          <Description>Hands up for this episode! 🙌🏻😻</Description>
          <ImageContent/>
          <Icons>
            <Status>
              <CommentIcon/>
              18
            </Status>
            <Status>
              <RetweetIcon/>
              18
            </Status>
            <Status>
              <LikeIcon/>
              8
            </Status>
          </Icons>

        </Content>
      </Body>
    </Container>
  );
}

export default Tweet;