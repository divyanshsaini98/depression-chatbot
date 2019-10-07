Sentiment Analysis of Chatbot

Identify and extract sentiment in given string. Sentiment analysis (also known as opinion mining) refers to the use of natural language processing, text analysis and computational linguistics to identify and extract subjective information in source materials. This algorithm takes an input string and assigns a sentiment rating in the range [-1 to 1] (very negative to very positive).

Clone Slack’s Python bot kit, which has everything  needed to run a bot using the RTM API.
cd python-rtmbot
and then…
pip install -r requirements.txt
This will install all our dependencies for Slack’s RTM. We then need to install the Algorithmia Python client.
pip install Algorithmia
Next, copy the example config file to our root directory like this:
cp docs/example-config/rtmbot.conf .
Add our Slack token to the file. Since we’re here, let’s also add the Algorithmia key, too.
Once  bot is up and running, go to  Slack team, and invite it to a channel. Every message – except for channel joins – will now flow through your plugin, and then the Social Sentiment Analysis algorithm.
Try it out by typing a few nice things. Then check  terminal:
Comment "i think you’re great" was positive, compound result 0.6249
Now type some really terrible things, like:
Comment "idiot dumb" was negative, compound result -0.7
It uses the algorithm  https://algorithmia.com/algorithms/nlp/SocialSentimentAnalysis to analyse a message in the Slack channel. The results from the analysis are in the form of:
•	Negative
•	Neutral
•	Postitive
For more detail check out the algorithm's page https://algorithmia.com/algorithms/nlp/SocialSentimentAnalysis.

