# Engagio Report Parser
This Script parses the huge DemandBase reports and saves what you actually want in a lighter .csv

## Get Started / Usage

1. Clone this repo: `https://github.com/shaunyap/engagio-report.git`
1. Run `npm install`
1. Download the activity report from DemandBase with the desired columns. Rename it `data.csv` and put it in the root folder.
1.  Run `node index.js` and once complete, your finished file will be saved as output.csv


## Tweaks
If you need to filter for other data, change the if statement in line 18.