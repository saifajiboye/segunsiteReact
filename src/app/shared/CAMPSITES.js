import archesImg from '../assets/img/arches4.jpg';
import yellowImg from '../assets/img/yellow.jpg';
import bryceImg from '../assets/img/bryce.jpg';
import zionImg from '../assets/img/zion.jpg';

export const CAMPSITES = [
    {
        id: 0,
        name: 'Arches National Park',
        image: archesImg,
        elevation: 5652,
        featured: false,
        description:
            "Famous for its over 2,000 natural sandstone arches and red rock landscapes in Utah."
    },
    {
        id: 1,
        name: 'Yellow Stone National Park',
        image: yellowImg,
        elevation: 11358,
        featured: false,
        description:
            "America's first national park, known for geothermal features like geysers and diverse wildlife."
    },
    {
        id: 2,
        name: 'Bryce National Park',
        image: bryceImg,
        elevation: 9115,
        featured: false,
        description:
            "Renowned for its unique hoodoo rock formations and vibrant orange-pink amphitheaters."
    },
    {
        id: 3,
        name: 'Zion national Park',
        image: zionImg,
        elevation: 8726,
        featured: true,
        description:
            "A dramatic canyon park in Utah with towering sandstone cliffs and scenic hiking trails."
    }
];
