const express = require('express');
const router = express.Router();

const blogs = require('./../data/blog.js');

router.get('/', (req, res) => {
    res.render('home')
})

router.get('/about', (req, res) => {
    res.render('about')
})

router.get('/contact', (req, res) => {
    res.render('contact')
})

router.get('/blogs', (req, res) => {
    res.render('blogPage', {blogs:blogs})
})

router.get('/blog/:slug', (req, res) => {
    blog = blogs.filter((blog)=>{
        return blog.slug === req.params.slug
    })

    //console.log(blog);
    res.render('blogPost', {title:blog[0].title, content:blog[0].content})
})


module.exports = router;