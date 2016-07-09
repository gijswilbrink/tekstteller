# tekstteller
App die alle klinkers en medeklinkers in een textarea telt.

Je vindt een werkende versie op http://gijswilbrink.nl.v33152.occhio.nl/tekstteller/

## Lokaal installeren (ook voor het testscript)
<pre>
# Repos klonen
git clone https://github.com/gijswilbrink/tekstteller.git
</pre>

## Testen met CasperJS
Ga met je command line naar de installatiemap
<pre>
# Voor de unit test zijn CasperJS PhantomJS nodig. Installeren met:
sudo npm install -g phantomjs-prebuilt
sudo npm install -g casperjs

# En dan kunnen we de test runnen!
gulp test
</pre>
