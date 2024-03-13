import {
    PageHeader,
    PageHeaderDescription,
    PageHeaderHeading,
} from '@/components/page-header';
import { Breadcrumbs } from '@/components/pagers/breadcrumbs';
import { Shell } from '@/components/shell';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { formatDate } from '@/lib/utils';
import { Metadata } from 'next';
import React from 'react';
import FAQs from '../_components/faqs';

export const runtime = 'edge';

export const metadata: Metadata = {
    title: 'House Cleaning Pricing Sydney',
    description:
        'Check our detailed cleaning pricing list. Professional & reliable service, 100% satisfaction guarantee. Book online in 60 seconds.',
};

const pricingList = [
    {
        title: '1 Bedroom, 1 Bathroom',
        price: '$339',
    },
    {
        title: '2 Bedroom, 1 Bathroom',
        price: '$400',
    },
    {
        title: '3 Bedroom, 2 Bathroom',
        price: '$469',
    },
    {
        title: '4 Bedroom, 2 Bathroom',
        price: '$549',
    },
    {
        title: '4 Bedroom, 3 Bathroom',
        price: '$579',
    },
    {
        title: '5 Bedroom, 3 Bathroom',
        price: '$659',
    },
    {
        title: '6 Bedroom, 3 Bathroom',
        price: '$709',
    },
];

export default function Page() {
    return (
        <Shell>
            <Breadcrumbs
                segments={[
                    { title: 'Home', href: '/' },
                    { title: 'Pricing', href: '/pricing' },
                ]}
                dottable={false}
            />
            <PageHeader className="text-center">
                <PageHeaderHeading>
                    House Cleaning Pricing Sydney
                </PageHeaderHeading>
                <PageHeaderDescription className="mx-auto mt-6">
                    <time
                        dateTime={'2024-01-04T00:00:00.000Z'}
                        className="block text-sm text-muted-foreground mb-2"
                    >
                        Updated on {formatDate('2024-01-04T00:00:00.000Z')}
                    </time>
                </PageHeaderDescription>
            </PageHeader>
            <section className="broder max-w-xl mx-auto w-full">
                <Table>
                    <TableCaption>A list of cleaning prices.</TableCaption>
                    <TableHeader>
                        <TableRow className="text-base">
                            <TableHead className="w-[300px]">
                                Home / Apartment
                            </TableHead>
                            <TableHead>Pricing</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {pricingList.map(p => (
                            <TableRow key={p.title} className="text-base">
                                <TableCell className="font-medium">
                                    {p.title}
                                </TableCell>
                                <TableCell>{p.price}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </section>
            <FAQs />
        </Shell>
    );
}
