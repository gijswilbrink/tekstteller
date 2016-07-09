# tekstteller
App die alle klinkers en medeklinkers in een textarea telt.

Je vindt een werkende versie op http://www.gijswilbrink.nl/tesktteller

## Lokaal installeren (ook voor het testscript)
<pre>
# Repos klonen
git clone https://github.com/gijswilbrink/tekstteller.git
#Voor de unit test zijn CasperJS PhantomJS nodig. Installeren met:
sudo npm install -g phantomjs-prebuilt
sudo npm install -g casperjs
# Build versie bouwen
gulp build
</pre>

## Testen met CasperJS
Ga met je command line naar de installatiemap en run:
<pre>
gulp test
</pre>
