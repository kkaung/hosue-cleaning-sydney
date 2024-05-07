import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import type { Post } from 'contentlayer/generated';
import Image from 'next/image';
import Link from 'next/link';
import React, { type HTMLAttributes } from 'react';

interface PostCardProps extends HTMLAttributes<HTMLElement> {
    post: Post;
}

export default function PostCard({ post, ...props }: PostCardProps) {
    return (
        <section className={cn(props.className, 'relative  space-y-2')}>
            <AspectRatio
                ratio={16 / 9}
                className="overflow-hidden rounded-xl relative"
            >
                <Image
                    fill
                    src={post.image}
                    alt={`${post.title}`}
                    className="bg-cover object-cover"
                />
                <Link
                    href={`/blog/${post.slugAsParams}`}
                    className="absolute inset-0"
                >
                    <span className="sr-only">View Blog Post</span>
                </Link>
            </AspectRatio>
            <div>
                <Link href={`/blog/${post.slugAsParams}`}>
                    <p className="text-xl font-semibold hover:underline">
                        {post.title}
                    </p>
                </Link>
            </div>
        </section>
    );
}
