import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Background from './Background';
import store from '../../Redux/store';
import { SetBackground } from '../../Redux/action';
import dummyService, { loadBackgroundImageResults } from '../../Services/dummyService';
import { ServiceProvider } from '../../Services/ServicesContext';

describe('App', () => {

  let component: React.ReactElement;

  beforeEach(() => {
    component = (
      <Provider store={store}>
        <ServiceProvider value={dummyService}>
          <Background />
        </ServiceProvider>
      </Provider>
    );
  });

  it('should renders background', () => {

    store.dispatch(SetBackground(loadBackgroundImageResults[4]));

    const { getByText, container } = render(component);
    const authorElement = getByText(/Léo Maradan/i);
    const photoElement = getByText(/Photo/i);
    const anchor = container.querySelectorAll('a');
    const span = container.querySelector('span');
    const backgroundImage = container.querySelector('div[style]');

    expect(authorElement).toBeInTheDocument();
    expect(authorElement).toHaveAttribute('href');
    expect(authorElement.getAttribute('href')).toBe('https://www.flickr.com/photos/leomaradan/');
    expect(photoElement).toBeInTheDocument();
    expect(photoElement).toHaveAttribute('href');
    expect(photoElement.getAttribute('href')).toBe('https://www.flickr.com/photos/leomaradan/8306292879/');

    expect(backgroundImage).toBeInTheDocument();
    expect(backgroundImage).toHaveAttribute('style');
    expect(backgroundImage?.getAttribute('style')).toContain('https://live.staticflickr.com/8492/8306292879_ca0d123fd8_o.jpg');

    expect(anchor.length).toBe(2);
    expect(span).toBeNull();
  });

  it('should renders background with additionnal info', () => {

    store.dispatch(SetBackground(loadBackgroundImageResults[0]));

    const { getByText, container } = render(component);
    const authorElement = getByText(/Léo Maradan/i);
    const photoElement = getByText(/Photo/i);
    const anchor = container.querySelectorAll('a');
    const span = container.querySelector('span');

    expect(authorElement).toBeInTheDocument();
    expect(authorElement).toHaveAttribute('href');
    expect(authorElement.getAttribute('href')).toBe('https://www.flickr.com/photos/leomaradan/');
    expect(photoElement).toBeInTheDocument();
    expect(photoElement).toHaveAttribute('href');
    expect(photoElement.getAttribute('href')).toBe('https://www.flickr.com/photos/leomaradan/5970127767/');

    expect(span).toBeInTheDocument();
    expect(span?.textContent).toBe('Kyoto, Japon');

    expect(anchor.length).toBe(2);
    expect(span).not.toBeNull();
  });

  it('should renders background with image name', () => {

    store.dispatch(SetBackground(loadBackgroundImageResults[10]));

    const { getByText, container } = render(component);
    const authorElement = getByText(/Léo Maradan/i);
    const photoElement = getByText(/Sunrise on cloud sea/i);
    const anchor = container.querySelectorAll('a');
    const span = container.querySelector('span');

    expect(authorElement).toBeInTheDocument();
    expect(authorElement).toHaveAttribute('href');
    expect(authorElement.getAttribute('href')).toBe('https://www.flickr.com/photos/leomaradan/');
    expect(photoElement).toBeInTheDocument();
    expect(photoElement).toHaveAttribute('href');
    expect(photoElement.getAttribute('href')).toBe('https://www.flickr.com/photos/leomaradan/23180668313/');

    expect(anchor.length).toBe(2);
    expect(span).toBeNull();
  });

  it('should renders background with source (without source name) and no image page url', () => {

    const image = loadBackgroundImageResults[10];
    image.sourceUrl = 'source';
    delete image.imagePageUrl;
    store.dispatch(SetBackground(image));

    const { getByText, container } = render(component);
    const authorElement = getByText(/Léo Maradan/i);
    const photoElement = getByText(/Sunrise on cloud sea/i);
    const sourceElement = getByText(/source/i);
    const anchor = container.querySelectorAll('a');
    const span = container.querySelector('span');

    expect(authorElement).toBeInTheDocument();
    expect(authorElement).toHaveAttribute('href');
    expect(authorElement.getAttribute('href')).toBe('https://www.flickr.com/photos/leomaradan/');

    expect(photoElement).toBeInTheDocument();
    expect(photoElement).toHaveAttribute('href');
    expect(photoElement.getAttribute('href')).toBe('https://live.staticflickr.com/642/23180668313_3684717efd_o.jpg');

    expect(sourceElement).toBeInTheDocument();
    expect(sourceElement).toHaveAttribute('href');
    expect(sourceElement.getAttribute('href')).toBe('source');

    expect(anchor.length).toBe(3);
    expect(span).toBeNull();
  });

  it('should renders background with source (without source name) and no image page url', () => {

    const image = loadBackgroundImageResults[10];
    image.sourceUrl = 'source';
    image.sourceName = 'Flickr';
    store.dispatch(SetBackground(image));

    const { getByText, container } = render(component);
    const authorElement = getByText(/Léo Maradan/i);
    const photoElement = getByText(/Sunrise on cloud sea/i);
    const sourceElement = getByText(/flickr/i);
    const anchor = container.querySelectorAll('a');
    const span = container.querySelector('span');

    expect(authorElement).toBeInTheDocument();
    expect(authorElement).toHaveAttribute('href');
    expect(authorElement.getAttribute('href')).toBe('https://www.flickr.com/photos/leomaradan/');

    expect(photoElement).toBeInTheDocument();
    expect(photoElement).toHaveAttribute('href');
    expect(photoElement.getAttribute('href')).toBe('https://live.staticflickr.com/642/23180668313_3684717efd_o.jpg');

    expect(sourceElement).toBeInTheDocument();
    expect(sourceElement).toHaveAttribute('href');
    expect(sourceElement.getAttribute('href')).toBe('source');

    expect(anchor.length).toBe(3);
    expect(span).toBeNull();
  });
});
