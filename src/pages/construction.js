import Head from 'next/head';
import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';

import Layout from '~/layouts/Default';
import { Container, Content, BackButton } from '~/styles/pages/construction';

const ConstructionPage = () => (
  <>
    <Head>
      <title>Covid Agora | Em Construção</title>
    </Head>

    <Layout>
      <Container>
        <Content>
          <h1>EM BREVE !</h1>
          <h2>
            Aplicativo em desenvolvimento pela equipe{' '}
            <span style={{ color: '#000' }}>Hitechline</span>.
          </h2>

          <BackButton href="/">
            <FiArrowLeft size="2.5rem" /> Voltar para o Início
          </BackButton>
        </Content>
      </Container>
    </Layout>
  </>
);

export default ConstructionPage;
