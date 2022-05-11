import { createClient } from 'next-sanity';
import config from './config';
import imageUrlBuilder from '@sanity/image-url';

export const sanityClient = createClient(config);

export const urlFor = source => imageUrlBuilder(sanityClient).image(source);
