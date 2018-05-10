export const index = {
  head: [
    {
      tag: 'link',
      rel: 'shortcut icon',
      href: 'images/favicon.png',
      type: 'image/x-icon'
    },
    {
      tag: 'base',
      href: '/'
    },
    {
      tag: 'meta',
      name: 'description',
      content: 'My first mithril application'
    },
    {
      tag: 'link',
      rel: 'stylesheet',
      href: '//cdn.materialdesignicons.com/2.0.46/css/materialdesignicons.min.css'
    },
    {
      tag: 'meta',
      name: 'version',
      content: '1.0.0'
    }
  ],
  body: [
    {tag: 'app', id: 'myApp'},
    {
      tag: 'script',
      innerHTML: ''+
        "(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]"+
        "||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new "+
        "Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.as"+
        "ync=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,"+
        "'script','//www.google-analytics.com/analytics.js','ga');ga('cr"+
        "eate', 'UA-XXXXXXXX-X', 'auto');"
    },
    {
      tag: 'noscript',
      innerHTML: "JavaScript is disabled in your browser."+
        "<a href='http://www.enable-javascript.com/' target='_blank'>"+
        "Here</a> is how to enable it."
    }
  ]
}

