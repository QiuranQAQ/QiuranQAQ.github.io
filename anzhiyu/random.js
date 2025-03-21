var posts=["2025/03/21/hello-world/","2025/03/21/这是第一篇文章，标志着Hexo博客正式启用/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };