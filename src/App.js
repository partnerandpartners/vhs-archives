import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router'
import HomeView from 'views/HomeView'
import AboutView from 'views/AboutView'
import ResourcesView from 'views/ResourcesView'
import VideoIndexView from 'views/VideoIndexView'
import VideoShowView from 'views/VideoShowView'
import Header from 'components/Header'
import Footer from 'components/Footer'
import { about, homepageVideos, resources, tags, videos, videosByTag } from 'config'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Switch>
          <Route exact path='/' render={() => <HomeView videos={homepageVideos} />} />
          <Route path='/about' render={() => <AboutView {...about} />} />
          <Route path='/resources' render={() => <ResourcesView {...resources} />} />
          <Route exact path='/videos' render={() => <VideoIndexView tags={tags} videos={videos} videosByTag={videosByTag} />} />
          <Route exact path='/videos/:videoId' render={renderProps => <VideoShowView {...renderProps} videos={videos} />} />
        </Switch>
        <Route path='/about' component={Footer} />
        <Route path='/resources' component={Footer} />
        <Route exact path='/videos/:videoId' component={Footer} />
      </Fragment>
    );
  }
}

export default App;
