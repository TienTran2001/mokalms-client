'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { ArrowRight, CalendarDays, Clock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// Extend dayjs with relativeTime plugin
dayjs.extend(relativeTime);

import { IBlog } from '@/types/blog';

interface BlogCardProps {
  post: IBlog;
}

export function BlogCard({ post }: BlogCardProps) {
  const formatDate = (dateString: string) => {
    const date = dayjs(dateString);
    const now = dayjs();
    const diffDays = now.diff(date, 'day');

    // Show relative time for recent posts (within 3 days)
    if (diffDays < 3) {
      return date.fromNow();
    }

    // Show formatted date for older posts
    return date.format('MMM D, YYYY');
  };

  // Calculate approximate read time based on content length
  const calculateReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(' ').length;
    const readTime = Math.ceil(wordCount / wordsPerMinute);
    return `${readTime} min`;
  };

  return (
    <article className="group overflow-hidden border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 bg-white rounded-xl">
      {/* Thumbnail */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={
            post.thumbnail ||
            'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          }
          alt={post.title}
          fill
          loading="lazy"
          quality={75}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <Badge className="bg-white/90 text-gray-900 hover:bg-white">
            {post.category?.name || 'Uncategorized'}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Meta Info */}
        <div className="flex items-center text-sm text-gray-500 justify-between">
          <div className="flex items-center space-x-1">
            <CalendarDays className="h-4 w-4" />
            <span>{formatDate(post.publishedAt || post.createdAt)}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{calculateReadTime(post.content)} read</span>
          </div>
        </div>

        {/* Title */}
        <Link
          href={`/blogs/${post.slug}`}
          aria-label={`Read article: ${post.title}`}
        >
          <h3 className="font-bold text-xl text-gray-900 hover:text-blue-600 transition-colors line-clamp-2 group-hover:text-blue-600 leading-tight">
            {post.title}
          </h3>
        </Link>

        {/* Excerpt */}
        <p className="text-gray-600 mt-2 line-clamp-3 leading-relaxed">
          {post.excerpt}
        </p>

        {/* Author & Read More */}
        <div className="flex items-center justify-between pt-4">
          {/* Author */}
          <div className="flex items-center space-x-3">
            <Avatar className="w-10 h-10 ring-2 ring-white/50 shadow-lg transition-all duration-200">
              <AvatarImage
                src={post.author?.avatar}
                alt={post.author?.username || post.author?.name || 'Author'}
              />
              <AvatarFallback className="bg-gradient-to-br from-primary to-primary/80 text-white text-sm font-bold">
                {post.author?.username
                  ? post.author.username.slice(0, 2).toUpperCase()
                  : post.author?.name
                    ? post.author.name.slice(0, 2).toUpperCase()
                    : 'A'}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium text-gray-900">
                {post.author?.username || post.author?.name || 'Anonymous'}
              </p>
              <p className="text-xs text-gray-500">Author</p>
            </div>
          </div>

          {/* Read More Link */}
          <Link
            href={`/blogs/${post.slug}`}
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
            aria-label={`Read full article: ${post.title}`}
          >
            Read Article
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
