export type Creator = { name: string; handle: string; url: string; image: string };
export type Video = { id: string; title: string; featured?: boolean };
export type Reel = { url: string; image: string; title: string };
export type Testimonial = { creator: string; url: string; videoId?: string; image?: string };
export type Thumbnail = { src: string; alt: string };

const image = (name: string) => `/images/${name}.jpg`;

export const creators: Creator[] = [
  ['Jacob Parker', '@jacobpxrker', 'https://www.instagram.com/jacobpxrker/', 'creator-jacob-parker'],
  ['Ben Kump', '@benkumpofficial', 'https://www.instagram.com/benkumpofficial/', 'creator-ben-kump'],
  ['Drej', '@drejtradezz', 'https://www.instagram.com/drejtradezz/', 'creator-drej'],
  ['Eytan Ayalon', '@eytan.ayalon', 'https://www.instagram.com/eytan.ayalon/', 'creator-eytan-ayalon'],
  ['Damian May', '@damianmay_', 'https://www.instagram.com/damianmay_/', 'creator-damian-may'],
  ['Bodie', '@infobodie', 'https://www.instagram.com/infobodie/', 'creator-bodie'],
  ['Danelle', '@daa.nnel', 'https://www.instagram.com/daa.nnel/', 'creator-danelle'],
  ['George', '@yarvadeg', 'https://www.instagram.com/yarvadeg/', 'creator-george'],
  ['J-Rock', '@jrocktrading', 'https://www.instagram.com/jrocktrading/', 'creator-j-rock'],
  ['Camden', '@camdencashh', 'https://www.instagram.com/camdencashh', 'creator-camden'],
  ['Monetra', '@monetraai', 'https://www.instagram.com/monetraai', 'creator-monetra'],
  ['Nikita', '@nikitagerasim0v', 'https://www.instagram.com/nikitagerasim0v', 'creator-nikita'],
  ['Adam Palomeque', '@adampalomeque', 'https://www.instagram.com/adampalomeque', 'creator-adam-palomeque'],
  ['Heikstepo', '@heikstepo', 'https://www.instagram.com/heikstepo', 'creator-heikstepo'],
].map(([name, handle, url, imageName]) => ({ name, handle, url, image: image(imageName) }));

export const featuredVideo: Video = { id: 'uBOV5DoajLw', title: 'Featured edit', featured: true };
export const videos: Video[] = ['yJxf5TFq688', 'f95wcMzLz1Y', '8kRfKT8ZsRU', 'iQY1LkYZyOA', 'jipUYbjaQ0Q', 'CDTtkGZEqsM', '3aaSjCcLvP0'].map((id, index) => ({ id, title: `Video ${index + 1}` }));
export const testimonials: Testimonial[] = [
  { creator: '@eytan.ayalon', url: 'https://www.instagram.com/eytan.ayalon/', videoId: '1Ab0s36W9zU' },
  { creator: '@benkumpofficial', url: 'https://www.instagram.com/benkumpofficial/', image: image('testimonial-ben-kump') },
];
export const reels: Reel[] = ['DYnUBoryvXw', 'DYDxJMiNf9e', 'DXx0ntEhso_', 'DYEEbC-MJG5', 'DWthgPXDnTR'].map((id, index) => ({ url: `https://www.instagram.com/reel/${id}/`, image: image(`reel-${index + 1}`), title: `Reel ${index + 1}` }));
export const thumbnails: Thumbnail[] = [1, 2, 3, 4].map((number) => ({ src: image(`thumbnail-${number}`), alt: `Thumbnail design ${number}` }));
