import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'

import siteMetadata from '@/data/siteMetadata'

import { sortedBlogPost, allCoreContent } from '@/lib/utils/contentlayer'
import { InferGetStaticPropsType } from 'next'
import { allBlogs } from 'contentlayer/generated'
import BlogCard from '@/components/BlogCard'
import { RoughNotation } from 'react-rough-notation'

const MAX_DISPLAY = 3

export const getStaticProps = async () => {
  // TODO: move computation to get only the essential frontmatter to contentlayer.config
  const sortedPosts = sortedBlogPost(allBlogs)
  const posts = allCoreContent(sortedPosts)

  return { props: { posts } }
}

export default function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold font-serif leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Hi, I'm Ellie 👋
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            I'm a software engineer from Australia, currently living in sunny Barcelona, Spain. I
            created this space as a way to document my journey in tech, as well as a place for me to
            share{' '}
            <RoughNotation
              type="underline"
              show={true}
              color="#8b5cf6"
              animationDelay={800}
              animationDuration={1200}
            >
              code
            </RoughNotation>
            {', '}
            <RoughNotation
              type="underline"
              show={true}
              color="#06b6d4"
              animationDelay={800}
              animationDuration={1200}
            >
              projects
            </RoughNotation>
            , and{' '}
            <RoughNotation
              type="underline"
              show={true}
              color="#eab308"
              animationDelay={800}
              animationDuration={1200}
            >
              reflections
            </RoughNotation>
            .
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            return <BlogCard post={post} key={post.slug + post.date} />
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
    </>
  )
}
