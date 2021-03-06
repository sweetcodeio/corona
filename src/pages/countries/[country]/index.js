import { useRouter } from 'next/router';
import { useEffect, useState, useCallback } from 'react';

import { Head } from '~/components/Head';
import { List } from '~/components/List';
import { InformationLayout } from '~/layouts/Information';
import { api } from '~/services/api';
import { objectLocaleString } from '~/utils';

const Country = () => {
  const {
    back,
    query: { country: countryName },
  } = useRouter();
  const [country, setCountryValue] = useState(null);

  const getCountry = useCallback(async () => {
    try {
      const countryData = await api
        .get(`/${countryName}`)
        .then(({ data: { data } }) => {
          if (data.error || !Object.keys(data).length) {
            throw new Error('Ocorreu um erro ao obter os dados.');
          }

          return objectLocaleString(data);
        });

      setCountryValue(countryData);
    } catch (error) {
      if (typeof countryName === 'string') {
        back();
      }
    }
  }, [countryName, back]);

  useEffect(() => {
    getCountry();
  }, [getCountry]);

  return (
    <>
      <Head
        title={`Covid Agora | ${country?.country || 'Carregando...'}`}
        description="Veja como anda o coronavírus no páis onde algum de seus familiares mora ou está."
      >
        <meta name="robots" content="noindex" />
      </Head>

      <InformationLayout loading={!country}>
        {country && (
          <List
            local={country.country}
            flag="/static/images/world/flag.png"
            lastUpdate={country.updated_at}
            info={country}
          />
        )}
      </InformationLayout>
    </>
  );
};

export default Country;
