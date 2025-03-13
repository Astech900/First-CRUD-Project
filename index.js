const express = require('express');
const app = express();
const port = 8080;
const path = require('path')
const methodOverride = require('method-override');
const { v4: uuidv4 } = require('uuid');


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, 'views'));


app.use(methodOverride('_method'))
app.use(express.static(path.join(__dirname, './public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let userInfo = [
    {
        id: uuidv4(),

        username: "rahim123",
        content: "Exploring new technologies!",
    },
    {
        id: uuidv4(),

        username: "karim_h",
        content: "JavaScript is amazing!",
    },
    {
        id: uuidv4(),

        username: "ayesha99",
        content: "Love to learn coding!",
    },
    {
        id: uuidv4(),

        username: "tanvir_dev",
        content: "Frontend development is fun!",
    },
    {
        id: uuidv4(),

        username: "maliha_r",
        content: "Designing cool websites!",
    },
];


app.get('/', (req, res) => {
    res.send('root route')
});

app.get('/display', (req, res) => {
    res.render('display.ejs', { userInfo })
});



app.get("/posts", (req, res) => {
    res.render('posts.ejs');
});



app.post("/posts", (req, res) => {
    let { username, content } = req.body;
    userInfo.push({ id: uuidv4(), username: username, content: content })
    console.log(userInfo);
    res.redirect('/display')
});


app.get('/posts/single/:id', (req, res) => {
    let { id } = req.params;
    let post = userInfo.find((p) => p.id === id);
    console.log(post)
    res.render('single.ejs', { user: post })

});


app.get("/posts/edit/:id", (req, res) => {
    let { id } = req.params;
    let post = userInfo.find((p) => p.id === id);
    res.render('editpost.ejs', { user: post })


});
app.patch("/posts/edit/:id", (req, res) => {
    let { id } = req.params;
    let { content } = req.body;
    let post = userInfo.find((p) => p.id === id);
    post.content = content;
    console.log(post);



    res.redirect("/display");


});


app.get("/posts/delete/:id", (req, res) => {
    let { id } = req.params;
    let post = userInfo.find((p) => p.id === id);
    res.render('delete.ejs', { user: post })
})

app.delete("/posts/delete/:id", (req, res) => {
    let { id } = req.params;
    let post = userInfo.filter((p) => id !== p.id);
    userInfo = post

    res.redirect("/display");


});




app.get("*",(req,res)=>{

let err = `<h1> Your entered Route was Wrong! Retry again.`;

res.send(err)

})

app.listen(port, () => {
    console.log(`Server Running on Port ${port}`);

});




