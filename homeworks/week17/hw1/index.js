const express = require('express');
const bodyParser = require('body-parser');
const formidableMiddleware = require('express-formidable');
const session = require('express-session');
const flash = require('connect-flash');
const app = express();
const port = process.env.PORT || 3000;

const blog_controller = require('./controllers/blog_controller');

app.set('view engine', 'ejs');
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/add_post',formidableMiddleware());
app.use('/update_post',formidableMiddleware());
app.use(flash());
app.use((req, res, next) => {
  res.locals.username = req.session.username;
  res.locals.userid = req.session.userid;
  res.locals.nickname = req.session.nickname;
  res.locals.url = req.originalUrl;
  res.locals.errorMessage = req.flash('errorMessage');
  next();
});
app.use('/css', express.static(__dirname + '/statics/css'));
app.use('/images', express.static(__dirname + '/statics/images'));

function redirectBack(req, res) {
  res.redirect('back');
}

app.get('/', blog_controller.index);

app.get('/login', blog_controller.login);
app.post('/login', blog_controller.handleLogin, redirectBack);
app.get('/logout', blog_controller.logout);

app.get('/about', blog_controller.about);
app.get('/admin', blog_controller.admin);
app.get('/posts', blog_controller.posts);
app.get('/topics', blog_controller.topics);

app.post('/create_topic', blog_controller.createTopic, redirectBack);
app.get('/delete_topic/:id', blog_controller.deleteTopic);
app.get('/edit_topic/:id', blog_controller.edit_topic);
app.post('/update_topic/:id', blog_controller.handleUpdateTopic, redirectBack);


app.get('/post_list/', blog_controller.post_list, redirectBack);
app.get('/post_list/:pageNum', blog_controller.post_list, redirectBack);
app.get('/single_post/:id', blog_controller.single_post,redirectBack);
app.get('/filtered_posts/:id',blog_controller.filtered_posts);
app.get('/topic_area',blog_controller.topic_area);

app.get('/delete_post/:id', blog_controller.deletePost);
app.get('/create_post', blog_controller.create_post, redirectBack);
app.post('/add_post', blog_controller.handleCreatePost,redirectBack);
app.get('/edit_post/:postId',blog_controller.edit_post,redirectBack);
app.post('/update_post', blog_controller.handleUpdatePost,redirectBack);

app.listen(port, () => {
  console.log(`Server is running...at${port}`);
});