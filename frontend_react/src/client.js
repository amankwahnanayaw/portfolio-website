import sanityClient from '@sanity/client';
import imgUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 's8ho6u13',
    dataset: 'production',
    apiVersion: '2024-02-01',
    useCdn: 'true',
    token: 'skbgbeCki1wGcDFvPyvmWNTKHYsLchuysD5DuBXvw8SRlhhg5UMndMDrk3b7zKYBoGs9Y99BxRco6JoKgRHPserRe3m2IEPaHNzIKBxTX34ej5SalpQ5tbYpKyuZ3QbFao8jgw3Np2ThtqWWVnSmKD4YPL9QxIBphmw5a7EgpokT9IiYl0yz',
});