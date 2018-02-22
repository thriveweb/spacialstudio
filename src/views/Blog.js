import React from 'react'
import Helmet from 'react-helmet'
import _sortBy from 'lodash/sortBy'
import _pullAt from 'lodash/pullAt'
import _findIndex from 'lodash/findIndex'

import PageHeader from '../components/PageHeader'
import FeaturePostSection from '../components/FeaturePostSection'
import Categories from '../components/Categories'
import PostSection from '../components/PostSection'

import './Blog.css'

export default ({ page, posts, postCategories, showFeatured = true }) => {
  posts = _sortBy(posts, ['date']).reverse()

  const featuredPostIndex = showFeatured
    ? _findIndex(posts, post => post.status === 'Featured / Published')
    : 0
  const featuredPost =
    featuredPostIndex >= 0 ? _pullAt(posts, featuredPostIndex)[0] : null

  return (
    <main className='Blog' data-aos='fade-up'>
      <Helmet>
        <title>{page.title}</title>
      </Helmet>
      <PageHeader title={page.title} />
      <FeaturePostSection featuredPost={featuredPost} />
      <Categories categories={postCategories} />
      {!!posts.length && <PostSection posts={posts} />}
    </main>
  )
}
