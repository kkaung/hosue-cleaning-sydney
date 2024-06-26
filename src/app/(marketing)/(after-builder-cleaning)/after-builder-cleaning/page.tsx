import { getCityFromPath } from '@/lib/next';
import { type Metadata } from 'next';
import React from 'react';

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
                    title: 'After Builder Cleaning',
                    href: '/after-builder-cleaning',
                },
            ]}
        />
    );
}
