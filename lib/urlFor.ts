import imageUrlBuilder from "@sanity/image-url";
import { client } from './sanity.client'

// Get a pre-configured url-builder from your sanity client

const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => builder.image(source);
