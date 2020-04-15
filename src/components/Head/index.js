import NextHead from 'next/head';
import PropTypes from 'prop-types';
import React from 'react';

const HeadComponent = ({
  title,
  description,
  url,
  image,
  noDefaultTags,
  children,
}) => {
  return (
    <NextHead>
      <title>{title}</title>

      <link rel="shortcut icon" href="/static/images/icon.png" />
      <link rel="icon" href="/static/images/icon.png" />

      {/* Site Verification */}

      {!noDefaultTags && (
        <>
          <meta property="og:locale" content="pt_BR" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Covid Agora" />

          <meta name="description" content={description} />

          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />

          {!!url && <meta property="og:url" content={url} />}
          {!!image && <meta property="og:image" content={image} />}
        </>
      )}

      {children}
    </NextHead>
  );
};

HeadComponent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string,
  noDefaultTags: PropTypes.bool,
  children: PropTypes.node,
};

HeadComponent.defaultProps = {
  description:
    'Dados mundial, nacional e regional do coronavírus na palma da sua mão. Dados oficiais e atualizados em tempo real, garantindo a veracidade e a qualidade do serviço, entregando a melhor experiência ao usuário.',
  url: '',
  image: '',
  noDefaultTags: false,
  children: null,
};

export default HeadComponent;
