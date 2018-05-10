import m from 'mithril';

const root = document.getElementById('myApp');

let count = 0;

const Hello = {
  handleClick(){
    count++;
  },
  view(){
    return pug`
      h1.title My First App
      br
      button(onclick='{this.handleClick}') {count} clicks
    `;
  }
};

const Splash = {
  view(){
    return pug`
      a(href='#!/hello') Enter!
    `;
  }
};

m.route(root, '/splash', {
  '/splash': Splash,
  '/hello': Hello
});
