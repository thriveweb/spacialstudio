import React from 'react'
import Helmet from 'react-helmet'

import PageHeader from '../components/PageHeader'
import EnquiryFormControlled from '../components/EnquiryFormControlled'
import EnquiryFormSimple from '../components/EnquiryFormSimple'
import EnquiryFormSimpleAjax from '../components/EnquiryFormSimpleAjax'
import Content from '../components/Content'
import './Contact.css'

export default ({ page, siteTitle }) => (
  <div className='Contact'>
    <PageHeader title={page.title} subtitle='<Contact />' />
    <div className='Section thin'>
      <div className='Container'>
        <Content source={page.content} />
        <h3>{'<EnquiryFormSimpleAjax />'}</h3>
        <EnquiryFormSimpleAjax name='Simple Form Ajax' />
        <br />
      </div>
    </div>
    <Helmet>
      <title>{page.title}</title>
    </Helmet>
  </div>
)
