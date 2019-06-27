var elixir = require('laravel-elixir')
require('laravel-elixir-livereload')

var themeName = 'movie-theme'

elixir.config.assetsPath = 'themes/' + themeName + '/assets'
elixir.config.publicPath = elixir.config.assetsPath + '/compiled'

elixir(function(mix) {
  mix.sass('style.scss')

  // mix.scripts([
  //   '@jquery',
  //   '@framework',
  //   '@framework.extras',
  //   'app.js'
  // ])

  mix.livereload([
    'themes/' + themeName + '/assets/compiled/css/style.css',
    'themes/' + themeName + '/**/*.htm',
    'themes/' + themeName + '/assets/compiled/js/*.js'
  ])
}) 
