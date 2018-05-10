![VHS Archive Logo](https://raw.githubusercontent.com/partnerandpartners/vhs-archives/master/public/assets/images/logo.svg?sanitize=true)

[vhsarchive.online](https://www.vhsarchive.online/)

---
## About

Open-source video archive website

---
## Configuration

### Setup
1. Clone this repository:

  `git clone git@github.com:partnerandpartners/vhs-archives.git`
2. Run `yarn install`
3. Rename `.env.sample` to `.env`

### Adding Videos
Videos are displayed in the archive by adding [YAML](https://en.wikipedia.org/wiki/YAML) files to `/archive/videos`. A sample entry has been provided at `/archive/videos/video.yml.sample`. The file name will also determine the route of the video page. For instance `my-video.yml` will resolve as `http://example.com/videos/my-video`.

### Adding Tags
Similar to adding a video, tags can be entered as YAML files. The file names can be used to tag videos. A file named `activism.yml` will provide a tag of `activism` and be listed in the video index at `http://example.com/videos`

### Local Development
The archive can be run locally by running `yarn start`.

---

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
