source "https://rubygems.org"

gem "jekyll", ENV["JEKYLL_VERSION"] == "patch" ? { github: "ashmaroli/jekyll", branch: "optimize-site-each-site-file" } : ENV["JEKYLL_VERSION"]

group :jekyll_plugins do
  gem "jekyll-brotli"
  gem "jekyll-feed"
  gem "jekyll-gist"
  gem "jekyll-gzip"
  gem "jekyll-include-cache"
  gem "jekyll-paginate"
  gem "jekyll-redirect-from"
  gem "jekyll-sitemap"
  gem "jemoji"
end

gem "classifier-reborn"
gem "gsl", github: "SciRuby/rb-gsl", ref: "103a3e1"
gem "html-proofer"
gem "minimal-mistakes-jekyll", "~> 4.24"
