import { Icons } from '@/components/icons';
import type { FooterItem, MainNavItem } from '@/types';

export type SiteConfig = typeof siteConfig;

const links = {
    facebook:
        'https://www.facebook.com/people/House-Cleaning-Service-Sydney/61556722978102/',
    instagram: 'https://instagram.com/housecleaningservicesydney',
    twitter: 'https://twitter.com/cleaningsyd',
    pinterest: 'https://www.pinterest.com.au/houseclenaingservicesydney/',
    linkin: 'https://www.linkedin.com/company/house-cleaner-sydney',
    youtube: 'https://www.youtube.com/@HouseCleaningServiceSydn-dl2kv',
    googlemap: '',

    buynsw: '',
    yelp: '',
    trustpilot:
        'https://www.trustpilot.com/review/housecleaningservicesydney.com.au',
};

export const siteConfig = {
    logo: 'House Cleaning Sydney',
    name: 'House Cleaning Sydney',
    title: `House Cleaning Sydney`,
    description: `Our top-rated cleaning services come with a 200% satisfaction guarantee. We deliver sparkling results you'll love with our professional cleaners. Book online in 60 seconds!`,
    url: 'https://housecleaningservicesydney.com.au',
    ogImage: 'https://housecleaningservicesydney.com.au/opengraph-image.png',
    mainNav: [
        {
            title: 'Services',
            items: [
                {
                    title: 'Deep Cleaning',
                    href: '/deep-cleaning',
                },
                {
                    title: 'Regular Cleaning',
                    href: '/regular-cleaning',
                },
                {
                    title: 'End Of Lease Cleaning',
                    href: '/end-of-lease-cleaning',
                },
                {
                    title: 'Office Cleaning',
                    href: '/office-cleaning',
                },
                {
                    title: 'Oven Cleaning',
                    href: '/oven-cleaning',
                },
                {
                    title: 'Carpet Cleaning',
                    href: '/carpet-cleaning',
                },
                {
                    title: 'Window Cleaning',
                    href: '/window-cleaning',
                },
                {
                    title: 'After Builder Cleaning',
                    href: '/after-builder-cleaning',
                },
            ],
        },
        {
            title: 'Pricing',
            href: '/pricing',
        },
    ] satisfies MainNavItem[],
    links,
    footerNav: [
        {
            title: 'Services',
            items: [
                {
                    title: 'Deep Cleaning',
                    href: '/deep-cleaning',
                },
                {
                    title: 'Regular Cleaning',
                    href: '/regular-cleaning',
                },
                {
                    title: 'End Of Lease Cleaning',
                    href: '/end-of-lease-cleaning',
                },
                {
                    title: 'Office Cleaning',
                    href: '/office-cleaning',
                },
                {
                    title: 'Oven Cleaning',
                    href: '/oven-cleaning',
                },
                {
                    title: 'Carpet Cleaning',
                    href: '/carpet-cleaning',
                },
                {
                    title: 'Window Cleaning',
                    href: '/window-cleaning',
                },
                {
                    title: 'After Builder Cleaning',
                    href: '/after-builder-cleaning',
                },
            ],
        },
        {
            title: 'Useful Links',
            items: [
                { title: 'Contact Us', href: '/contact' },
                { title: 'About Us', href: '/about' },
                { title: 'Blog', href: '/blog' },
                { title: 'Pricing', href: '/pricing' },
                { title: 'Checklist', href: '/checklist' },
                { title: 'FAQs', href: '/frequently-asked-questions' },
                { title: 'Privacy Policy', href: '/privacy' },
                { title: 'Terms And Conditions', href: '/terms' },
            ],
        },
    ] satisfies FooterItem[],
    business: {
        email: 'contact@housecleaningservicesydney.com.au',
        phone: '1302 245 417',
        address: '10/75 King St, Sydney NSW 2000',
        openingHour: 'Mon – Sun: 9:00 AM – 5:00 PM',
    },
    rating: {
        ratingValue: 4.9,
        ratingCount: 1027,
    },
};

export const siteServices: {
    title: string;
    slug: string;
    icon?: keyof typeof Icons;
}[] = [];
