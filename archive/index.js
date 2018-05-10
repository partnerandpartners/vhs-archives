// NOTE: DO NOT REMOVE
import filter from 'lodash.filter'
import sortBy from 'lodash.sortby'
import videosConfig from './videos'
import aboutConfig from './about.yml'
import resourcesConfig from './resources.yml'
import siteConfig from './site.yml'
import tagsConfig from './tags'

export const tags = tagsConfig
export const videos = videosConfig

export const videosByTag = {}
Object.keys(tags).forEach(key => {
  videosByTag[key] = filter(videos, video => video.tags ? video.tags.includes(key) : false)
})

export const homepageVideos = sortBy(filter(videos, video => !!video.homepage), ['position', 'title'])
export const about = aboutConfig
export const resources = resourcesConfig
export const site = siteConfig

export default {
  about,
  homepageVideos,
  resources,
  site,
  tags,
  videos,
  videosByTag,
}
