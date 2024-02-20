import { type Metadata } from 'next';
import React from 'react';
import { BreadcrumbJsonLd, OrganizationJsonLd } from 'next-seo';
import { absoluteUrl } from '@/lib/utils';
import { siteConfig } from '@/configs/site';

import Content from './_components/content';

export const runtime = 'edge';

export const metadata: Metadata = {
    title: `Professional House Cleaning Service Sydney`,
    description: `Sydney's most trusted house cleaning service delivers sparkling results at affordable prices. 100% Satisfaction Guarantee. Book online in 60 seconds!

`,
};

export default function Page() {
    return (
        <>
            <Content />
            <OrganizationJsonLd
                useAppDir
                id={absoluteUrl('')}
                type=""
                name={siteConfig.name}
                description={siteConfig.description}
                legalName={siteConfig.name}
                url={absoluteUrl('')}
                logo={absoluteUrl('/')}
                sameAs={[
                    siteConfig.links.facebook,
                    siteConfig.links.linkin,
                    siteConfig.links.instagram,
                    siteConfig.links.twitter,
                    siteConfig.links.youtube,
                ]}
                address={{
                    streetAddress: '101/ 761 - 763 George St Haymarket',
                    addressLocality: 'Sydney',
                    addressRegion: 'NSW',
                    postalCode: '2000',
                    addressCountry: 'AU',
                }}
                aggregateRating={{
                    ratingValue: siteConfig.rating.ratingValue,
                    ratingCount: siteConfig.rating.ratingCount,
                }}
                brand={{
                    name: siteConfig.name,
                }}
            />
            <BreadcrumbJsonLd
                useAppDir
                itemListElements={[
                    {
                        position: 1,
                        name: 'Home',
                        item: absoluteUrl(''),
                    },
                ]}
            />
        </>
    );
}
