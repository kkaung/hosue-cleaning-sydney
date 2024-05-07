import React from 'react';
import { type Metadata } from 'next';

import Content from './_components/content';

export const metadata: Metadata = {
    title: `Professional House Cleaning Service - House Cleaner Sydney`,
    description: `Sydney's most trusted house cleaning service delivers sparkling results at affordable prices. 100% Satisfaction Guarantee. Book online in 60 seconds!
`,
};

export default function Page() {
    return (
        <>
            <Content />
        </>
    );
}
