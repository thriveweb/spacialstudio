import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Helmet from 'react-helmet'
import { AnimatedSwitch } from 'react-router-transition'
import _kebabCase from 'lodash/kebabCase'

import ScrollToTop from './components/ScrollToTop'
import AOS from './components/AOS'
import Meta from './components/Meta'
import Home from './views/Home'
import About from './views/About'
import Services from './views/Services'
import Project from './views/Project'
import SingleProject from './views/SingleProject'
import Blog from './views/Blog'
import Contact from './views/Contact'
import NoMatch from './views/NoMatch'
import Nav from './components/Nav'
import Footer from './components/Footer'

import ServiceWorkerNotifications from './components/ServiceWorkerNotifications'
import data from './data.json'

class App extends Component {
  state = {
    data
  }

  getDocument = (collection, name) =>
    this.state.data[collection] &&
    this.state.data[collection].filter(page => page.name === name)[0]

  getDocuments = collection => this.state.data[collection]

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

    const RouteWithFooter = props => (
      <div className='RouteWithFooter'>
        {props.children}
        <Footer globalSettings={globalSettings} />
      </div>
    )

    return (
      <Router>
        <div className='React-Wrap'>
          <AOS />
          <ScrollToTop />
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
          <Nav />
          <AnimatedSwitch
            atEnter={{
              opacity: 1
            }}
            atLeave={{
              opacity: 1
            }}
            atActive={{
              opacity: 1
            }}
            className='AnimatedSwitch'
          >
            <Route
              path='/'
              exact
              render={props => (
                <RouteWithFooter>
                  <Home page={this.getDocument('pages', 'home')} {...props} />
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
                    {...props}
                  />
                </RouteWithFooter>
              )}
            />
            <Route
              path='/services/'
              exact
              render={props => (
                <RouteWithFooter>
                  <Services
                    page={this.getDocument('pages', 'services')}
                    projects={projects}
                    {...props}
                  />
                </RouteWithFooter>
              )}
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
                  <Blog page={this.getDocument('pages', 'blog')} {...props} />
                </RouteWithFooter>
              )}
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
              render={() => (
                <RouteWithFooter>
                  <NoMatch siteUrl={siteUrl} />
                </RouteWithFooter>
              )}
            />
          </AnimatedSwitch>
        </div>
      </Router>
    )
  }
}

export default App
