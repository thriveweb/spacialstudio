import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Helmet from 'react-helmet'
// import { Switch } from 'react-router-transition'
import _kebabCase from 'lodash/kebabCase'
import _findIndex from 'lodash/findIndex'
import _merge from 'lodash/merge'

import ScrollToTopOnMount from './components/ScrollToTopOnMount'
import AOS from './components/AOS'
import Meta from './components/Meta'
import Home from './views/Home'
import About from './views/About'
import SingleService from './views/SingleService'
import Project from './views/Project'
import SingleProject from './views/SingleProject'
import Blog from './views/Blog'
import SinglePost from './views/SinglePost'
import Contact from './views/Contact'
import ClientArea from './views/ClientArea'
import NoMatch from './views/NoMatch'
import Nav from './components/Nav'
import NavPopup from './components/NavPopup'
import Footer from './components/Footer'
import ServiceWorkerNotifications from './components/ServiceWorkerNotifications'
import Spinner from './components/Spinner'
import { documentHasTerm } from './util/collection'

import data from './data.json'

class App extends Component {
  state = {
    data,
    navPopup: false,
    loading: false
  }

  componentDidMount = () => {
    this.fetchPreviewContent()
  }

  fetchPreviewContent = () => {
    if (
      !window.netlifyIdentity ||
      !window.netlifyIdentity.currentUser() ||
      process.env.NODE_ENV === 'development'
    ) {
      return false
    }
    import('./util/fetch-content').then(({ fetchContent }) => {
      this.setState({ loading: true })
      fetchContent()
        .then(newData => {
          this.setState(prevState => {
            const data = _merge(prevState.data, newData)
            return { data, loading: false }
          })
        })
        .catch(() => this.setState({ loading: false }))
    })
  }

  getDocument = (collection, name) =>
    this.state.data[collection] &&
    this.state.data[collection].filter(page => page.name === name)[0]

  getDocuments = collection => this.state.data[collection]

  handleNavPopupClose = () => this.setState({ navPopup: false })
  handleNavPopupOpen = () => this.setState({ navPopup: true })

  render () {
    const globalSettings = this.getDocument('settings', 'global')
    const {
      siteTitle,
      siteUrl,
      siteDescription,
      socialMediaCard,
      headerScripts
    } = globalSettings

    /* Custom posts setup */
    const staff = this.getDocuments('staff')
    const projects = this.getDocuments('projects')
    const posts = this.getDocuments('posts')
    const services = this.getDocuments('services')
    const postCategories = this.getDocuments('postCategories')
    // const postCategories = getCollectionTerms(posts, 'category', 'asc')

    const RouteWithFooter = ({ children, scrollToTop = true, ...props }) => (
      <div className='RouteWithFooter' {...props}>
        {children}
        {scrollToTop && <ScrollToTopOnMount />}
        <Footer globalSettings={globalSettings} />
      </div>
    )

    return (
      <Router>
        <div className='React-Wrap'>
          {this.state.loading && <Spinner />}
          <AOS />
          <ServiceWorkerNotifications reloadOnUpdate />
          <Helmet titleTemplate={`${siteTitle} | %s`} />
          <Meta
            title={siteTitle}
            url={siteUrl}
            description={siteDescription}
            absoluteImageUrl={
              socialMediaCard &&
              socialMediaCard.image &&
              siteUrl + socialMediaCard.image
            }
            twitterCreatorAccount={
              socialMediaCard && socialMediaCard.twitterCreatorAccount
            }
            twitterSiteAccount={
              socialMediaCard && socialMediaCard.twitterSiteAccount
            }
            headerScripts={headerScripts}
          />
          <Nav
            services={services}
            handleNavPopupOpen={this.handleNavPopupOpen}
          />
          <NavPopup
            services={services}
            active={this.state.navPopup}
            handleClose={this.handleNavPopupClose}
          />
          <Switch>
            <Route
              path='/'
              exact
              render={props => (
                <RouteWithFooter>
                  <Home
                    page={this.getDocument('pages', 'home')}
                    projects={projects}
                    posts={posts}
                    services={services}
                    {...props}
                  />
                </RouteWithFooter>
              )}
            />
            <Route
              path='/about/'
              exact
              render={props => (
                <RouteWithFooter>
                  <About
                    page={this.getDocument('pages', 'about')}
                    staff={staff}
                    services={services}
                    {...props}
                  />
                </RouteWithFooter>
              )}
            />
            <Route
              path='/services/:slug/'
              render={props => {
                const slug = props.match.params.slug
                const singleService = services.find(
                  item => _kebabCase(item.title) === slug
                )

                const Comp = props => (
                  <SingleService
                    singleService={singleService}
                    projects={projects}
                    posts={posts}
                    {...props}
                  />
                )

                return (
                  <RouteWithFooter>
                    <Comp {...props} />
                  </RouteWithFooter>
                )
              }}
            />
            <Route
              path='/project/'
              exact
              render={props => (
                <RouteWithFooter>
                  <Project
                    page={this.getDocument('pages', 'project')}
                    projects={projects}
                    {...props}
                  />
                </RouteWithFooter>
              )}
            />
            <Route
              path='/projects/:slug/'
              render={props => {
                const slug = props.match.params.slug
                const singleProject = projects.find(
                  item => _kebabCase(item.title) === slug
                )
                return (
                  <RouteWithFooter>
                    <SingleProject singleProject={singleProject} {...props} />
                  </RouteWithFooter>
                )
              }}
            />
            <Route
              path='/blog/'
              exact
              render={props => (
                <RouteWithFooter>
                  <Blog
                    page={this.getDocument('pages', 'blog')}
                    posts={posts}
                    postCategories={postCategories}
                    {...props}
                  />
                </RouteWithFooter>
              )}
            />
            <Route
              path='/blog/category/:slug/'
              render={props => {
                //  help needed
                const slug = props.match.params.slug
                const categoryPosts = posts.filter(post =>
                  documentHasTerm(post, 'categories', slug)
                )
                return (
                  <RouteWithFooter scrollToTop={false}>
                    <Blog
                      page={this.getDocument('pages', 'blog')}
                      posts={categoryPosts}
                      postCategories={postCategories}
                      showFeatured={false}
                      {...props}
                    />
                  </RouteWithFooter>
                )
              }}
            />
            <Route
              path='/blog/:slug/'
              render={props => {
                const slug = props.match.params.slug
                const singlePostID = _findIndex(
                  posts,
                  item => _kebabCase(item.title) === slug
                )
                const singlePost = posts[singlePostID]
                const nextPost = posts[singlePostID + 1]
                const prevPost = posts[singlePostID - 1]
                return (
                  <RouteWithFooter>
                    <SinglePost
                      singlePost={singlePost}
                      nextPostURL={
                        nextPost && `/blog/${_kebabCase(nextPost.title)}`
                      }
                      prevPostURL={
                        prevPost && `/blog/${_kebabCase(prevPost.title)}`
                      }
                      {...props}
                    />
                  </RouteWithFooter>
                )
              }}
            />
            <Route
              path='/contact/'
              exact
              render={props => (
                <RouteWithFooter>
                  <Contact
                    page={this.getDocument('pages', 'contact')}
                    globalSettings={globalSettings}
                    siteTitle={siteTitle}
                    {...props}
                  />
                </RouteWithFooter>
              )}
            />
            <Route
              path='/client-area/'
              exact
              render={props => (
                <RouteWithFooter>
                  <ClientArea
                    page={this.getDocument('pages', 'clientArea')}
                    globalSettings={globalSettings}
                    siteTitle={siteTitle}
                    {...props}
                  />
                </RouteWithFooter>
              )}
            />

            <Route
              render={() => (
                <RouteWithFooter>
                  <NoMatch siteUrl={siteUrl} />
                </RouteWithFooter>
              )}
            />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
