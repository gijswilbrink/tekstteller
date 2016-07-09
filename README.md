# tekstteller
Daar is hij dan, de magische tekstteller die alle klinkers en medeklinkers in een textarea telt.
Je kunt vindt een werkende versie vinden op http://www.gijswilbrink.nl/tekstteller/

De tekstteller is gebouwd met React en Redux. Zwaar geschut voor een kleine app, maar ik vond het interessant om te zien hoe de flow van redux zou werken in een case als deze. Dat werkt behoorlijk goed! De app freezet nooit en de gehele pagina is ondanks de grote libraries netjes onder de 100kb.

## Lokaal installeren (ook voor het testscript)
<pre>
# Repos klonen
git clone https://github.com/gijswilbrink/tekstteller.git
# Dependencies installeren
npm install
# Build versie compileren
git build
</pre>

## Testen met CasperJS
Ik heb gekozen voor CasperJS als testtool, omdat het mooi in de ontwikkelstraat met node en gulp past. De volgende functies worden getest:
- Als er geen tekst is ingevoerd horen er geen statistiekenblokjes te zijn
- Als er wel tekst is ingevoerd moeten de statistiekenblokjes er juist wel zijn
- Bij invoeren van een buitenlandse tekst met speciale accenten moet het aantal klinkers en medeklinkers kloppen
- Bij invoeren van een buitenlandse tekst met speciale accenten moeten de Top 3-resultaten kloppen

Om de test te runnen ga je met je command line naar de installatiemap
<pre>
# Voor de unit test zijn CasperJS PhantomJS nodig. Installeren met:
sudo npm install -g phantomjs-prebuilt
sudo npm install -g casperjs

# En dan kunnen we de test runnen!
gulp test
</pre>
