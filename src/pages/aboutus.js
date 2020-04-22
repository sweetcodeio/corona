import React, { useEffect, useState } from 'react';
import { FaGithub } from 'react-icons/fa';

import Layout from '~/layouts/Default';

import Head from '~/components/Head';

import { githubApi } from '~/services/api';

import {
  Container,
  Header,
  MembersContainer,
  Row,
  Brands,
} from '~/styles/pages/aboutus';

const discordMembers = {
  devhijazi: {
    username: 'Hijazi',
    discriminator: '#0808',
  },
  pablo1v: {
    username: 'pablo1v',
    discriminator: '#1177',
  },
};

const AboutUsPage = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    async function getMembers() {
      const { data } = await githubApi.get('orgs/sweetcodeio/members');

      setMembers(
        data.map(member => Object.assign(member, discordMembers[member.login])),
      );
    }

    getMembers();
  }, []);

  return (
    <>
      <Head
        title="Covid Agora - Sobre Nós"
        description="Equipe responsavel pelo desenvolvimento da plataforma"
        image="/static/images/bg_team.jpg"
      >
        <meta property="og:image:alt" content="Thumbnail" />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="720" />
      </Head>

      <Layout loading={!members.length}>
        <Container>
          <Header>
            <p>
              Site pensado e desenvolvido pela equipe <b>SweetCode</b>.
            </p>
          </Header>

          <MembersContainer>
            {members.map(member => (
              <Row key={member.id}>
                <img src={member.avatar_url} alt="Member Logo" />

                <Brands>
                  <span>
                    {member.username}
                    <span>{member.discriminator}</span>
                  </span>

                  <a
                    href={member.html_url}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <FaGithub size="2.8rem" color="#fff" />
                  </a>
                </Brands>
              </Row>
            ))}
          </MembersContainer>
        </Container>
      </Layout>
    </>
  );
};

export default AboutUsPage;