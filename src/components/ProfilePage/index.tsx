import React from 'react';
import Feed from '../Feed';
import {Container, Banner, Avatar, 
        ProfileData, LocationIcon, 
        CakeIcon, Followage, EditButton} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar/>
      </Banner>

      <ProfileData>
        <EditButton outlined>Edit profile</EditButton>
        <h1>Rúbia Oliveira</h1>
        <h2>@rubia_marques</h2>
        <p>
          こんにちは！Rúbiaです。よろしくね！
        </p>
        <ul>
          <li>
            <LocationIcon/>
              Minas Gerais, Brasil
          </li>
          <li>
            <CakeIcon/>
            Nascido em 29 de Agosto de 1995.
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>102</strong>
          </span>
          <span>
          <strong>1348 </strong> seguidores 
          </span>
        </Followage>

      </ProfileData>
      <Feed/>
    </Container>
  );
}

export default ProfilePage;