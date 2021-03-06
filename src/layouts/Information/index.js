import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { FiArrowLeft } from 'react-icons/fi';

import { Header, Content } from './styles';

import { Link } from '~/components/Link';
import { Spinner } from '~/components/Spinner';
import { loadAnalytics } from '~/utils';

export const InformationLayout = ({ children, loading }) => {
  const router = useRouter();

  const paths = router.pathname.split(/\//).filter(p => !!p);
  const redirectPath = paths.slice(0, paths.length - 1).join('/');

  useEffect(() => {
    loadAnalytics();
  }, []);

  return (
    <>
      <Header>
        <button type="button" onClick={() => router.push(`/${redirectPath}`)}>
          <FiArrowLeft size="4rem" color="#fff" />
        </button>

        <Link href="/aboutus" target="_blank">
          <img src="/icon.png" alt="Covid Agora Logo" />

          <span>
            <strong>Covid Agora</strong>
          </span>
        </Link>
      </Header>

      <Content>{loading ? <Spinner /> : children}</Content>
    </>
  );
};

InformationLayout.propTypes = {
  children: PropTypes.node.isRequired,
  loading: PropTypes.bool,
};

InformationLayout.defaultProps = {
  loading: false,
};
