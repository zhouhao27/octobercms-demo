var elixir = require('laravel-elixir')
require('laravel-elixir-livereload')

elixir.config.assetsPath = 'assets'
elixir.config.publicPath = 'assets/compiled'

elixir(function(mix) {
  mix.sass('style.scss')

  // mix.scripts([
  //   '@jquery',
  //   '@framework',
  //   '@framework.extras',
  //   'app.js'
  // ])

  mix.livereload([
    'assets/compiled/css/style.css',
    '**/*.htm',
    'assets/compiled/js/*.js'
  ])
}) 
