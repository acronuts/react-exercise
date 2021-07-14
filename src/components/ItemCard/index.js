import React, { Fragment } from 'react';
import { CardWrapper, ImageCardContainer, InfoContainer } from './styled';

const ItemCard = ({ item }) => {
  const link = `/article/${item.id}`;

  const endDate = new Date(item.endDate)
    .toLocaleDateString()
    .replaceAll('/', '-');
  const endTime = new Date(item.endDate).toLocaleTimeString();

  return (
    <Fragment>
      <CardWrapper to={{ pathname: link, state: { articleId: item.id } }}>
        <ImageCardContainer src={item.imageUrl} />
        <InfoContainer>
          <div>
            <h3>{item.title}</h3>
          </div>
          <div>
            <p>
              Ending on:{' '}
              <strong>
                {endDate}</strong> at <strong>{endTime}
              </strong>
            </p>
          </div>
          {item.buyNowPrice !== null ? (
            <p style={{ fontSize: 18, fontWeight: 600 }}>
              {item.buyNowPrice.toFixed(2)} CHF
            </p>
          ) : (
            <div />
          )}
        </InfoContainer>
      </CardWrapper>
    </Fragment>
  );
};

export default ItemCard;
