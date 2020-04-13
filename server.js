const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const videos = require('./data');

server.use(express.static('public'));

server.set('view engine', 'njk');

nunjucks.configure('views', {
  express: server,
  autoescape: false,
  noCache: true
});

server.get('/', (req, res) => {
  const about = {
    avatar_url: "https://avatars0.githubusercontent.com/u/52089507?s=460&u=4f99e88814de50bc7eca1122b6d24c56186f89c1&v=4",
    name: "Bruno Mariano",
    role: "Developer web",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque esse perspiciatis autem, pariatur expedita consequuntur?",
    links: [
      { name: "Github", url:"/" },
      { name: "Facebook", url:"/" },
      { name: "Linkedin", url:"/" },
    ]
  }

  res.render('about', { about });
});

server.get('/portfolio', (req, res) => {
  res.render('portfolio', { items: videos });
});

server.get('/video', (req, res) => {
  const { id } = req.query;

  const video = videos.find((video) => {
    return video.id == id
  });

  if (!video) {
    return res.send('Video not found!')
  }

  res.render('video', { item: video })
});

server.listen('3334', () => {
  console.log('server is running')
});