const Koa = require("koa");
const Router = require("@koa/router");
const app = new Koa();
const router = Router();

router
  .get("/", (ctx) => {
    ctx.body = "<h1>welcome to index page</h1>";
  })

  .get("/about", (ctx) => {
    ctx.body = "<h1>welcome to about page</h1>";
  })

  .get("/contact", (ctx) => {
    ctx.body = "<h1>welcome to contact page</h1>";
  });

app.use(router.routes());
const port = 3000;

app.listen(port, () => {
  console.log(`app started on port ${port}`);
});
