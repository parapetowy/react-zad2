var Movie = React.createClass({
  propTypes: {
    movies: React.PropTypes.array.isRequired,
  },

  render: function() {
    var moviesElements = movies.map(function(movie) {
        return React.createElement('li', {key: movie.id},
            React.createElement('h2', {}, movie.title),
            React.createElement('img', {src: movie.img, height: 150}),
            React.createElement('p', {}, movie.desc)
        );
    });   
  },
});

var movies = [{
    id: 1,
    title: 'Harry Potter',
    desc: 'Film o czarodzieju',
    img: 'http://www.harrypottermovieposters.com/wp-content/uploads/2014/05/harry-potter-and-the-deathly-hallows-part-i-movie-poster-2010-1020540375.jpg'
}, {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    img: 'http://www.movieposter.com/posters/archive/main/108/MPW-54063'
}, {
    id: 3,
    title: 'Meczaniczna pomarańcza',
    desc: 'Film o pomarańczach',
    img: 'https://4.bp.blogspot.com/-TEyXmEE2-PI/VCjzMdgrbWI/AAAAAAAABks/F3EANVUG47w/s1600/a_clockwork_orange_poster.jpg'
}, {
    id: 4,
    title: 'Ojciec chrzestny',
    desc: 'Film o ojcu chrzestnym',
    img: 'https://www.barakashop.co.za/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/p/o/poster_the_godfather_.jpg'
}];
var element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        /*React.createElement('ul', {}, moviesElements),*/
        React.createElement(Movie, {movies: movies})
    );


ReactDOM.render(element, document.getElementById('app'));