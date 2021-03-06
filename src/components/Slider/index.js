import PropTypes from 'prop-types';
import { useState, useEffect, useCallback } from 'react';

import { Container, Image } from './styles';

export const Slider = ({ images }) => {
  const [selected, setSelected] = useState(0);

  const handleChange = useCallback(() => {
    setSelected(oldSelected => {
      return oldSelected === images.length - 1 ? 0 : oldSelected + 1;
    });
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleChange();
    }, 7000);

    return () => {
      clearInterval(interval);
    };
  }, [handleChange]);

  return (
    <Container>
      {images.map((image, i) => (
        <Image
          key={image}
          src={image}
          selected={selected === i}
          alt={`Slider ${i}`}
        />
      ))}
    </Container>
  );
};

Slider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};
