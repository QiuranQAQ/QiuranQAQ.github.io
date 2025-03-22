var posts=["2025/03/22/GSG2025+资产/","2025/03/21/hello-world/","2025/03/22/IDM绿色版/","2025/03/21/这是第一篇文章，标志着Hexo博客正式启用/","2025/03/22/音乐解锁/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };