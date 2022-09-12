import m from 'mithril';

const root = document.getElementById('myApp');

let count = 1; // eslint-disable-line no-unused-vars

const Hello = {
  handleClick(){
    count++;
  },
  view(){
    return <div>
      <h1 class="title">My First App</h1>
      <br/>
      <button onclick={this.handleClick}>
        {count} clicks
      </button>
    </div>;
  }
};

const Splash = {
  view(){
    return <a href='#!/hello'> Enter!</a>;
  }
};

m.route(root, '/splash', {
  '/splash': Splash,
  '/hello': Hello
});
