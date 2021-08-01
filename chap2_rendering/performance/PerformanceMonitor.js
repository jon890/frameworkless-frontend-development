const PerformanceMonitor = {
  panel: null,
  start: null,
  frames: null,

  create: function () {
    const div = document.createElement('div');

    div.style.position = 'fixed';
    div.style.left = '0px';
    div.style.top = '0px';
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.backgroundColor = 'black';
    div.style.color = 'white';

    return div;
  },

  tick: function () {
    console.log(this);

    this.frames++;

    const now = window.performance.now();
    if (now >= this.start + 1000) {
      this.panel.innerText = this.frames;
      this.frames = 0;
      this.start = now;
    }

    window.requestAnimationFrame(this.tick.bind(this));
  },

  init: function (parent = document.body) {
    this.panel = this.create();

    window.requestAnimationFrame(() => {
      this.start = window.performance.now();
      parent.appendChild(this.panel);
      this.tick.call(this);
    });
  },
};

PerformanceMonitor.init();
