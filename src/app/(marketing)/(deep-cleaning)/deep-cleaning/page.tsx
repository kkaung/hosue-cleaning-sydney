import React from 'react';
import { getCityFromPath } from '@/lib/next';
import { type Metadata } from 'next';

import { getMetadata } from '../_components/metadata';
import Content from '../_components/content';

export const runtime = 'edge';

export async function generateMetadata(): Promise<Metadata> {
    return getMetadata('Sydney');
}

export default function Page() {
    return (
        <Content
            city="Sydney"
            segments={[
                { title: 'Home', href: '/' },
                {
                    title: 'Deep Cleaning',
                    href: '/deep-cleaning',
                },
            ]}
        />
    );
}
