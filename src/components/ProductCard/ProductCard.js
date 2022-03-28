import React from 'react';
import DOMPurify from 'dompurify';
import { ChevronRight, ChevronLeft } from 'react-feather';
import useProduct from '../../hooks/useProduct';
import { formatCurrency } from '../../utils/formatCurrency';
import * as S from './style';

const ProductCard = () => {
  const { data } = useProduct('anyIdValue');

  const sizes = data?.variants.map((variant) => ({
    id: variant.id,
    value: variant.dimensions?.[0].value,
    hasLowStock: variant.hasLowStock,
  }));
  const price = `${data?.localisationContext?.currencySymbol}  ${formatCurrency(
    data?.priceInfo?.prices?.[1].value
  )}`;

  const handleClick = () => console.log('ADDED TO THE BAG');

  return (
    <S.Wrapper>
      <S.ImageWrapper>
        <S.ControlButton>
          <ChevronLeft size={24} />
        </S.ControlButton>

        <S.Image src={data?.images[0].url} />

        <S.ControlButton>
          <ChevronRight size={24} />
        </S.ControlButton>
      </S.ImageWrapper>

      <S.Description>
        <S.Title>{data?.displayName}</S.Title>

        <S.Price>{price}</S.Price>

        <S.Specification
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(data?.htmlDescription),
          }}
        />

        <S.Sizes>
          {sizes?.map((size) => (
            <S.Size key={size.id} disabled={size.hasLowStock}>
              {size.value}
            </S.Size>
          ))}
        </S.Sizes>

        <S.Button onClick={handleClick}>ADD TO BAG</S.Button>

        <S.FullDetails href="#">
          <span>See full details</span>
          <ChevronRight />
        </S.FullDetails>
      </S.Description>
    </S.Wrapper>
  );
};

export default ProductCard;
