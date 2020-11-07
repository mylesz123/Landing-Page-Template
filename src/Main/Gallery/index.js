import React from 'react';
import PropTypes from 'prop-types';

import ShowCase from '../Showcase';
import { Center } from '../../Components';

const Picture = ({ item }) => {
  const { href, src, description, title } = item;
  return (
    <div className="col-sm-6 col-md-4 col-lg-4">
      <div className="portfolio-item">
        <div className="hover-bg">
          <a href={href} title={description} data-lightbox-gallery="gallery1">
            <div className="hover-text">
              <h4>{title}</h4>
            </div>
            <img src={src} className="img-responsive" alt={description} />
          </a>
        </div>
      </div>
    </div>
  );
};

Picture.propTypes = {
  item: PropTypes.shape({
    href: PropTypes.string,
    src: PropTypes.string,
    description: PropTypes.string,
    title: PropTypes.string,
  }),
};

const items = [
  {
    id: 1,
    href: 'img/portfolio/01-large.jpg',
    src: 'img/portfolio/01-small.jpg',
    description: 'Project Title',
    title: 'Lorem Ipsum',
  },
  {
    id: 2,
    href: 'img/portfolio/02-large.jpg',
    src: 'img/portfolio/02-small.jpg',
    description: 'Project Title',
    title: 'Lorem Ipsum',
  },
  {
    id: 3,
    href: 'img/portfolio/03-large.jpg',
    src: 'img/portfolio/03-small.jpg',
    description: 'Project Title',
    title: 'Lorem Ipsum',
  },
  {
    id: 4,
    href: 'img/portfolio/04-large.jpg',
    src: 'img/portfolio/04-small.jpg',
    description: 'Project Title',
    title: 'Lorem Ipsum',
  },
  {
    id: 5,
    href: 'img/portfolio/05-large.jpg',
    src: 'img/portfolio/05-small.jpg',
    description: 'Project Title',
    title: 'Lorem Ipsum',
  },
  {
    id: 6,
    href: 'img/portfolio/06-large.jpg',
    src: 'img/portfolio/06-small.jpg',
    description: 'Project Title',
    title: 'Lorem Ipsum',
  },
  {
    id: 7,
    href: 'img/portfolio/07-large.jpg',
    src: 'img/portfolio/07-small.jpg',
    description: 'Project Title',
    title: 'Lorem Ipsum',
  },
  {
    id: 8,
    href: 'img/portfolio/08-large.jpg',
    src: 'img/portfolio/08-small.jpg',
    description: 'Project Title',
    title: 'Lorem Ipsum',
  },
  {
    id: 9,
    href: 'img/portfolio/09-large.jpg',
    src: 'img/portfolio/09-small.jpg',
    description: 'Project Title',
    title: 'Lorem Ipsum',
  },
];

const Gallery = () => (
  <ShowCase
    id="portfolio"
    title="Gallery"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
          dapibus leonec."
  >
    <div className="portfolio-items">
      {items.map((item) => (
        <Picture {...{ key: item.id, item }} />
      ))}
    </div>
  </ShowCase>
);

export default Gallery;
