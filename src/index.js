const Alexa = require("ask-sdk");
const actions = require("./functions");

const Quotes = {
  Lincoln: [
    "Government of the people, by the people, for the people, shall not perish from the Earth.",
    "Nearly all men can stand adversity, but if you want to test a man's character, give him power.",
    "Whatever you are, be a good one.",
    "Folks are usually about as happy as they make their minds up to be.",
    "Whatever you are, be a good one.",
    "Do I not destroy my enemies when I make them my friends?",
    "America will never be destroyed from the outside. If we falter and lose our freedoms, it will be because we destroyed ourselves.",
    "My Best Friend is a person who will give me a book I have not read.",
    "Nearly all men can stand adversity, but if you want to test a man's character, give him power.",
    "My concern is not whether God is on our side; my greatest concern is to be on God's side, for God is always right.",
    "I'm a success today because I had a friend who believed in me and I didn't have the heart to let him down.",
    "Books serve to show a man that those original thoughts of his aren't very new after all.",
    "When I do good, I feel good. When I do bad, I feel bad. That's my religion.",
    "Those who deny freedom to others, deserve it not for themselves",
    "Whenever I hear anyone arguing for slavery, I feel a strong impulse to see it tried on him personally.",
    "I am a slow walker, but I never walk back.",
    "There are no bad pictures; that's just how your face looks sometimes.",
    "Those who look for the bad in people will surely find it.",
    "I can see how it might be possible for a man to look down upon the earth and be an atheist, but I cannot conceive how a man could look up into the heavens and say there is no God.",
    "I don't like that man. I must get to know him better.",
    "When you reach the end of your rope, tie a knot and hang on.",
    "Be sure you put your feet in the right place, then stand firm.",
    "I am not bound to win, but I am bound to be true. I am not bound to", 
    "succeed, but I am bound to live up to what light I have.",
    "I would rather be a little nobody, then to be a evil somebody.",
    "You can fool some of the people all of the time, and all of the people some of the time, but you can not fool all of the people all of the time.",
    "All that I am or ever hope to be, I owe to my angel mother.",
    "Character is like a tree and reputation its shadow. The shadow is what we think it is and the tree is the real thing.",
    
  ],
  Einstein: [
    "Imagination is more important than knowledge.",
    "If the facts don't fit the theory, change the facts.",
    "Life is like riding a bicycle. To keep your balance you must keep moving.",
    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
    "I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
    "If you can't explain it to a six year old, you don't understand it yourself.",
    "If you want your children to be intelligent, read them fairy tales. If you want them to be more intelligent, read them more fairy tales.",
    "Logic will get you from A to Z; imagination will get you everywhere.",
    "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    "Anyone who has never made a mistake has never tried anything new.",
    "I speak to everyone in the same way, whether he is the garbage man or the president of the university.",
    "Never memorize something that you can look up.",
    "When you are courting a nice girl an hour seems like a second. When you sit on a red-hot cinder a second seems like an hour. That's relativity.",
    "A clever person solves a problem. A wise person avoids it.",
    "Science without religion is lame, religion without science is blind.",
    "Reality is merely an illusion, albeit a very persistent one.",
    "I have no special talents. I am only passionately curious.",
    "Any fool can know. The point is to understand.",
    "Try not to become a man of success. Rather become a man of value.",
    "Once you can accept the universe as matter expanding into nothing that is something, wearing stripes with plaid comes easy.",
    "The world as we have created it is a process of our thinking. It cannot be changed without changing our thinking.",
    "If I were not a physicist, I would probably be a musician. I often think in music. I live my daydreams in music. I see my life in terms of music.",
    "I know not with what weapons World War III will be fought, but World War IV will be fought with sticks and stones.",
    "The most beautiful experience we can have is the mysterious. It is the fundamental emotion that stands at the cradle of true art and true science.",
    "Great spirits have always encountered violent opposition from mediocre minds.",
    "It is not that I'm so smart. But I stay with the questions much longer.",
    "The measure of intelligence is the ability to change."
  ],
    Jeff: [
    "A brand for a company is like a reputation for a person. You earn reputation by trying to do hard things well.",
    "What we need to do is always lean into the future; when the world changes around you and when it changes against you - what used to be a tail wind is now a head wind - you have to lean into that and figure out what to do because complaining isn't a strategy.",
    "If you’re not stubborn, you’ll give up on experiments too soon. And if you’re not flexible, you’ll pound your head against the wall and you won’t see a different solution to a problem you’re trying to solve.",
    "If we can keep our competitors focused on us while we stay focused on the customer, ultimately we'll turn out all right.",
    "E-mail has some magical ability to turn off the politeness gene in a human being.",
    "I wanted a woman who could get me out of a Third World prison. Life's too short to hang out with people who aren't resourceful.",
    "Invention is by its very nature disruptive. If you want to be understood at all times, then don't do anything new.",
    "We are stubborn on vision. We are flexible on details",
    "We see our customers as invited guests to a party, and we are the hosts. It’s our job every day to make every important aspect of the customer experience a little bit better.",
    "The great thing about fact-based decisions is that they overrule the hierarchy.",
    "People who are right most of the time are people who change their minds often.",
    "Work Hard, have fun, make history",
    "We can't be in survival mode. We have to be in growth mode.",
    "Your margin is my opportunity",
    "If you never want to be criticized, for goodness' sake don't do anything new.",
    "In the old world, you devoted 30% of your time to building a great service and 70% of your time to shouting about it. In the new world, that inverts.",
    "The death knell for any enterprise is to glorify the past -- no matter how good it was.",
    "Maintain a firm grasp of the obvious at all times.",
    "It's not an experiment if you know it's going to work",
    "If you decide that you’re going to do only the things you know are going to work, you’re going to leave a lot of opportunity on the table.",
    "Cultures aren’t so much planned as they evolve from that early set of people.",
    "No business can continue to shrink. That can only go on for so long before irrelevancy sets in.",
    "Position yourself with something that captures your curiosity, something that you're missionary about.",
    "One of the things that I hope will distinguish Amazon.com is that we continue to be a company that defies easy analogy. This requires a lot of innovation, and innovation requires a lot of random walk.",
    "As a company, one of our greatest cultural strengths is accepting the fact that if you’re going to invent, you’re going to disrupt."
  ],
    GandhiJi:[
     "Be the change that you wish to see in the world.",
     "Live as if you were to die tomorrow. Learn as if you were to live forever.",
     "An eye for an eye will only make the whole world blind.",
     "Happiness is when what you think, what you say, and what you do are in harmony.",
     "When I despair, I remember that all through history the way of truth and love have always won. There have been tyrants and murderers, and for a time, they can seem invincible, but in the end, they always fall. Think of it--always.",
     "The weak can never forgive. Forgiveness is the attribute of the strong.",
     "Where there is love there is life.",
     "I like your Christ, I do not like your Christians. Your Christians are so unlike your Christ.",
     "Prayer is not asking. It is a longing of the soul. It is daily admission of one's weakness. It is better in prayer to have a heart without words than words without a heart.",
     "Freedom is not worth having if it does not include the freedom to make mistakes.",
     "Nobody can hurt me without my permission.",
     "God has no religion.",
     "Hate the sin, love the sinner.",
     "I will not let anyone walk through my mind with their dirty feet.",
     "You must not lose faith in humanity. Humanity is like an ocean; if a few drops of the ocean are dirty, the ocean does not become dirty.",
     "The best way to find yourself is to lose yourself in the service of others.",
     "The future depends on what you do today,",
     "A man is but the product of his thoughts. What he thinks, he becomes.",
     "To give pleasure to a single heart by a single act is better than a thousand heads bowing in prayer.",
     "The greatness of a nation and its moral progress can be judged by the way its animals are treated.",
     "Each night, when I go to sleep, I die. And the next morning, when I wake up, I am reborn.",
     "It is unwise to be too sure of one's own wisdom. It is healthy to be reminded that the strongest might weaken and the wisest might err.",
     "Whatever you do will be insignificant, but it is very important that you do it.",
     "To believe in something, and not to live it, is dishonest.",
     "Whatever you do will be insignificant, but it is very important that you do it.",
     "There are people in the world so hungry, that God cannot appear to them except in the form of bread."
    ]
};

// Launch Request Handler -- When a skill is launched
const LaunchRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === "LaunchRequest";
  },
  handle(handlerInput) {
    console.log("Launch Request Handler Called");

    let speechText =
      "Hello, I am Iris. I can help you with good quotes that will motivate you. You can ask me to read out quotes from Einstein, Jeff Bezos, and Mahatma Gandhi or simply say tell me a random quote.";
    let repromptText =
      "I did not receive any input. You can say, tell me a random quote.";

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(repromptText)
      .getResponse();
  }
};

// Handler for Random Quote
const RandomQuote = {
  canHandle(handlerInput) {
    return (
      handlerInput.requestEnvelope.request.type === "IntentRequest" &&
      handlerInput.requestEnvelope.request.intent.name === "RandomQuote"
    );
  },
  handle(handlerInput) {
    console.log("RandomQuote intent handler called");

    let getQuote = actions.getQuote(Quotes);
    let author = getQuote[0];
    let quote = getQuote[1];

    let cardTitle = "Quotation from " + author;
    let cardContent = quote;
    let speechText = author + " said " + quote;

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard(cardTitle, cardContent)
      .getResponse();
  }
};

const AuthorQuote = {
  canHandle(handlerInput) {
    return (
      handlerInput.requestEnvelope.request.type === "IntentRequest" &&
      handlerInput.requestEnvelope.request.intent.name === "AuthorQuote"
    );
  },
  handle(handlerInput) {
    console.log("AuthorQuote Intent handler called");

    // Get the Author Name
    let author = handlerInput.requestEnvelope.request.intent.slots.author.value;

    let getQuote = actions.getQuote(Quotes, author);

    if (!getQuote) {
      return UnhandledHandler.handle(handlerInput);
    }

    author = getQuote[0];
    let quote = getQuote[1];

    let cardTitle = "Quotation from " + author;
    let cardContent = quote;
    let speechText = author + " said " + quote;

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard(cardTitle, cardContent)
      .getResponse();
  }};


// Unhandled Requests
const UnhandledHandler = {
  canHandle() {
    return true;
 },
'AMAZON.HelpIntent': function () {
        this.handler.state = "_DECISION";
        this.response.speak("Lets test your knowledge about animals that can swimAlexa will ask you list of words. it can me animal, bird or non living thing or any random thing, and you have to tell whether it can swim or not. you will be responding with either yes or no. Would you like to play?").listen('Would you like to play?');
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak('okay goodbye and have a nice day');
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak('okay goodbye it was nice to meet you');
        this.emit(':responseReady');
    },
    'SessionEndedRequest': function () {
        this.response.speak("Goodbye!");
        this.emit(':responseReady');
    },
    'Unhandled': function() {
        const message = 'I don\'t get it! ask Alexa to swim seed!';
        this.response.speak(message);
        this.emit(':responseReady');
    },
    'UnhandledIntent': function() {
        const message = 'I don\'t get it! Try saying Alexa, swim seed';
        this.response.speak(message);
        this.emit(':responseReady');
    }

};
exports.handler = Alexa.SkillBuilders.custom()
  .addRequestHandlers(LaunchRequestHandler, RandomQuote, AuthorQuote,)
  //.addErrorHandlers(UnhandledHandler, Help_message)
  .lambda();