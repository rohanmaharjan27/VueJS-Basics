// creates a vue app
const app = Vue.createApp({
  // data
  data() {
    return {
      title: 'Rohan Maharjan',
      counter: 0,
      showBooks: true,
      books: [
        {
          title: 'name of the wind',
          author: 'patrick rothfuss',
          img: 'assets/1.jpg',
          isFav: false,
        },
        {
          title: 'the way of kings',
          author: 'brandon sanderson',
          img: 'assets/2.jpg',
          isFav: false,
        },
        {
          title: 'the final empire',
          author: 'brandon sanderson',
          img: 'assets/3.jpg',
          isFav: false,
        },
      ],
      x: null,
      y: null,
      url: 'https://google.com',
    };
  },
  // functions and methods
  methods: {
    changeTitle(title) {
      // this keyword needed to access properties of component instance
      this.title = title;
    },
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    handleEvent(e) {
      console.log('event', e);
    },
    handleMouseMove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
    toggleFav(book) {
      book.isFav = !book.isFav;
    },
  },
  // create data using already defined data
  computed: {
    filteredBooks() {
      const newBooks = this.books.filter(
        (book) => book.author === 'brandon sanderson'
      );
      return newBooks;
    },
  },
});

// where in the DOM to mount the application (div with id 'app' in this case)
app.mount('#app');
