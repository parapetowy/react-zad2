var App = React.createClass({
    render: function() {
        return (
            React.createElement('div', {
                    className: 'app'
                },
                React.createElement(Movies, {
                    movieList: movieslist
                }, {})
            )
        );
    }
});

var Movies = React.createClass({
    propTypes: {
        movieList: React.PropTypes.array.isRequired,
    },

    render: function() {
        var movies = this.props.movieList.map(function(movie) {
            return (
                React.createElement('li', {
                        key: movie.id
                    },
                    React.createElement(MovieTitle, {
                        title: movie.title
                    }),
                    React.createElement(MovieDesc, {
                        desc: movie.desc
                    }),
                    React.createElement(MoviePoster, {
                        img: movie.img
                    }))
            );
        });
        return React.createElement('ul', {
            className: 'movieList'
        }, movies);
    }
});

var MoviePoster = React.createClass({
    propTypes: {
        img: React.PropTypes.string.isRequired,
    },

    render: function() {
        return (
            React.createElement('div', {
                    className: 'movieItem'
                },
                React.createElement('img', {
                    className: 'movieImage',
                    src: this.props.img,
                    height: 150
                })
            )
        );
    },
});

var MovieDesc = React.createClass({
    propTypes: {
        desc: React.PropTypes.string.isRequired,
    },

    render: function() {
        return (
            React.createElement('p', {
                className: 'movieDesc'
            }, 'Opis: ' + this.props.desc)
        )
    },
});

var MovieTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
    },

    render: function() {
        return (
            React.createElement('p', {
                className: 'movieTitle'
            }, 'Tytuł: ' + this.props.title)
        )
    },
});

var movieslist = [{
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

var app = React.createElement(App);
ReactDOM.render(app, document.getElementById('app'));