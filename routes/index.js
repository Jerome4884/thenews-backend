require('dotenv').config();

var express = require('express');
var router = express.Router();

const NEWS_API_KEY = process.env.NEWS_API_KEY;

// GET home page. //
router.get('/articles', (req, res) => {
  fetch(`https://newsapi.org/v2/everything?sortBy=popularity&apiKey=${NEWS_API_KEY}`)
  .then(response => response.json())
  .then(data => {
    if (data.status === 'ok') {
      res.json({ articles: data.articles });
    } else {
      res.json({ articles: [] });
    }
  });
})

// GET BUSINNESSARTICLE
router.get('/businessArticles', (req, res) => {
  fetch(`https://newsapi.org/v2/top-headlines?category=business&apiKey=${NEWS_API_KEY}`)
  .then(response => response.json())
  .then(data => {
    if(data.status === 'ok') {
      res.json({ businessArticles: data.businessArticles });
    } else {
      res.json({ businessArticles: []});
    }
  })
});

// GET ENTERTAINMENTARTICLE
router.get('/entertainmentArticles', (req, res) => {
  fetch(`https://newsapi.org/v2/top-headlines?&category=entertainment&apiKey=${NEWS_API_KEY}`)
  .then(response => response.json())
  .then(data => {
    if(data.status === 'ok') {
      res.json({ entertainmentArticles: data.entertainmentArticles });
    } else {
      res.json({ entertainmentArticles: []});
    }
  })
});

// GET GENERALARTICLE
router.get('/generalArticles', (req, res) => {
  fetch(`https://newsapi.org/v2/top-headlines?&category=general&apiKey=${NEWS_API_KEY}`)
  .then(response => response.json())
  .then(data => {
    if(data.status === 'ok') {
      res.json({ generalArticles: data.generalArticles });
    } else {
      res.json({ generalArticles: []});
    }
  })
});

// GET HEALTHARTICLE
router.get('/healthArticles', (req, res) => {
  fetch(`https://newsapi.org/v2/top-headlines?&category=health&apiKey=${NEWS_API_KEY}`)
  .then(response => response.json())
  .then(data => {
    if(data.status === 'ok') {
      res.json({ healthArticles: data.healthArticles });
    } else {
      res.json({ healthArticles: []});
    }
  })
});

// GET SCIENCEARTICLE
router.get('/scienceArticles', (req, res) => {
  fetch(`https://newsapi.org/v2/top-headlines?&category=science&apiKey=${NEWS_API_KEY}`)
  .then(response => response.json())
  .then(data => {
    if(data.status === 'ok') {
      res.json({ scienceArticles: data.scienceArticles });
    } else {
      res.json({ scienceArticles: []});
    }
  })
});

// GET SPORTARTICLE
router.get('/sportsArticles', (req, res) => {
  fetch(`https://newsapi.org/v2/top-headlines?&category=sports&apiKey=${NEWS_API_KEY}`)
  .then(response => response.json())
  .then(data => {
    if(data.status === 'ok') {
      res.json({ sportsArticles: data.sportsArticles });
    } else {
      res.json({ sportsArticles: []});
    }
  })
});

// GET TECHARTICLE
router.get('/techArticles', (req, res) => {
  fetch(`https://newsapi.org/v2/top-headlines?&category=technology&apiKey=${NEWS_API_KEY}`)
  .then(response => response.json())
  .then(data => {
    if(data.status === 'ok') {
      res.json({ techArticles: data.techArticles });
    } else {
      res.json({ techArticles: []});
    }
  })
});


module.exports = router;
