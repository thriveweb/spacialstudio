import React from 'react'
import Helmet from 'react-helmet'

import PageHeader from '../components/PageHeader'
// import FeaturedPost from '../components/FeaturedPost'
import PostSection from '../components/PostSection'
import './Blog.css'

export default ({ page, posts }) => (
  <div className='Blog'>
    <Helmet>
      <title>{page.title}</title>
    </Helmet>
    <PageHeader title={page.title} />
    <PostSection posts={posts} />
  </div>
)
