const express = require('express');
require('dotenv').config()

const app = express();

const githubData = {
    "login": "sajadThapa04",
    "id": 81130860,
    "node_id": "MDQ6VXNlcjgxMTMwODYw",
    "avatar_url": "https://avatars.githubusercontent.com/u/81130860?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/sajadThapa04",
    "html_url": "https://github.com/sajadThapa04",
    "followers_url": "https://api.github.com/users/sajadThapa04/followers",
    "following_url": "https://api.github.com/users/sajadThapa04/following{/other_user}",
    "gists_url": "https://api.github.com/users/sajadThapa04/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/sajadThapa04/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/sajadThapa04/subscriptions",
    "organizations_url": "https://api.github.com/users/sajadThapa04/orgs",
    "repos_url": "https://api.github.com/users/sajadThapa04/repos",
    "events_url": "https://api.github.com/users/sajadThapa04/events{/privacy}",
    "received_events_url": "https://api.github.com/users/sajadThapa04/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "SAJAD KUMAR THAPA",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": "KAME HAME HA",
    "twitter_username": null,
    "public_repos": 13,
    "public_gists": 0,
    "followers": 10,
    "following": 30,
    "created_at": "2021-03-22T02:36:34Z",
    "updated_at": "2025-01-11T13:57:22Z"
}
app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>')
})

app.get('/about', (req, res) => {
    res.send('<h1>Sajad kumar Thapa</h1>')
})

app.get('/github',(req,res) => { 
    res.json(githubData);
})

const port = process.env.PORT
app.listen(port, () => {
    console.log(`Listening on port ${port} .....`)
})