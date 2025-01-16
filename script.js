const reasonsAndAnswers = [
    { question: "Your favourite colour is white!!", answer: "Less than 2% of the population has white as their favourite colour this makes you extremely unique.People who like the color white are calm, peaceful, and optimistic. They are also independent, detail-oriented, and value honesty and integrity." },
    { question: "Little Things", answer: "You always remember the little things ,it can be something that I mentioned whether it is the Dharamshala stadium , the shark slippers,writing aayush with a few Aayush once in a while,remembring to send a snap of Kit-Kat." },
    { question: "Nature", answer: "Like I've said before You feel a special connection with mother nature whether it's the forests'the rivers, the hills,the lakes,Ohh and the Rain!! you love the rain,whenever it rains the first thing that comes in my mind is that video(u knw which one I'm talking abt)." },
    { question: "Love for the ordinary", answer: "You love the ordinary things that people do or say that shows that they care. It can be the ordinary Coffee mug, the stuffed toy,Kit-Kat this makes you both amazing and unique. It's a quote that goes like- It's ordinary to love the beautiful but it's beautiful to love the ordinary" },
    { question: "Wit and Humour", answer: " Your Wit I don't even think there's a need for me to explain this one, my forfiets speak for themselves and the humour can't be questioned as it is sculpted by Chandler bing himself.This makes you fun to talk to" },
    { question: "Real", answer: "You keep it real and not just with other people but you keep it real with yourself too.You know your worth and aren't afraid to walk out if you feel like you're not respected. You never compromise with your self-respect, you know where to put boundaries and that's admirable." },
    { question: "Ambition and Creativity", answer: " You're competitive and God knows hat I learned this the hard way, and it's not like you don't want admit defeat but you'll find the most creative to turn the table around.Yeah you're sometimes a little lazy here and there but this laziness disappears in a blink when I ate something good and now you want revenge.This makes you fun" },
    { question: "Unique Wrinkle", answer: "Has anyone ever told you that you get really cute wrinkly lines on your nose whenever you smile too hard, if you don't believe me see for yourself in the mirror" },
    { question: "Fake Scenarios", answer: "The endless made up scenarios that you've participated in with me Grocery shopping turned into high speed car chase, The Laptop date, the Lapras abduction any other person would've termed me mentally ill but you decided to be silly with me I think it's because you want to escape the reality just as much as I do and all this makes you amazing." },
    { question: "The Eyes", answer: "I think you already know what's this one is goona be about but no I'm not gonna swoon over brown eyes I'll tell you some unique things about them, people with brown eyes has less risk of Diabetes(who knew), their eyes are less prone to sun damage,people consider brown eyed people more trustworthy,brown eyes were the only eye colour that existed for time in history ." },
    { question: "Actions!!!", answer: "Actions speak louder than words is kinda like you're go to tagline to judge people's intentions,and I side with you on this one people say a lot of things but what they is what really matters ." },
    { question: "Independance", answer: "you like being independent, your freedom is of the utmost importance to you and the thought of being dependent on someone for your basic needs is strange for you this is something about you that's inspiring" },
    { question: "Food", answer: "I think you were waiting for this reason to come up, Ahhhhhhh good food is like therapy to you and my assumption is that sometimes you've went to family functions solely for the food there, and I get it Pahaaru, the sensation of the tastebuds whenever something tangy,spicy,savoury goes inside the mouth is the best feeling in the world." },
    { question: "Kind and Nurturing", answer: "I haven't experienced this firsthand but I believe your friends can vouch for me on this one, I know they've got a lot moments when you were nurturing and kind to them." },
    { question: "Easy to talk to", answer: "I think you know this now that I don't easily talk to or open to people but wwith you I've found it really easy like the turtle is no longer afraid of poking, I don't know why maybe the brown eye fact is true you guys are trustworthy but it's not just that there's still something that I've not figured out( I'll leave this explanation for next year)." },
    { question: "You own it", answer: "As I usually say to you if the shoe fits then wear it Cinderella and you wear it, you wear it GOOD!! and it fits you well,You're comfortable in your own skin you don't care about the society which brings us to our next reason." },
    { question: "Free Spirited", answer: "You're out here to break the shackels of society, you can't be confined at one place when there's so much to see and explore in this world,exploring new places having new experiences is something you're always first in line for." },
    { question: "Little Kid", answer: "You maybe 21 now and feels mature but we both know you'll let your inner child out whenever you feel comfortable around the right people because you love being childish(who doesn't?),So promise me no matter how old you get the inner child must remain as childish as ever." },
    { question: "Crazy", answer: "Your crazy matches my crazy and I don't mean this lightly ,...you're CRAZY!! but I mean it in a good way like you're crazy for talking to me for more than 2 years,... a guy you've only met once.It still amazes me to this day how if that traffic light hadn't turn red I wouldn't have missed my first bus and wouldn't have boarded the second one with you" },
    { question: "My Spotify", answer: "I like to save the best for the last as I've mentioned before like a hundred times, you're good at singing and taking into consideration the recent performance video in the car(yeh raatien yeh mausam) you're the best singer I know.Snapchat has divided that video into multiple parts so whenever i listen to it there are a little breaks/cuts if somehow i could have the video without cuts as a return gift that would be great :)" },
    { question: "You're YOU!!", answer: "I believe even if the above 20 reasons didn't exist you'd still be amazing,unique and fun no matter what, You know why Pahaaru? because you're YOU!! just because you're you is what makes you special,there's just one Pahaaru in this world ." },
    {question:"Just in case", answer:"just in case if all this came out as too personal or wierd or even creepy you have my sincere apologies, cuz I know how many times I convinced myself not to do this(ever since I got the idea) but your actions convinced me otherwise :)"}
  ];

  let currentCardIndex = 0;
  const flashcard = document.getElementById('flashcard');
  const questionEl = document.getElementById('question');
  const answerEl = document.getElementById('answer');

  document.getElementById('flip-btn').addEventListener('click', () => {
    flashcard.classList.toggle('flipped');
  });

  document.getElementById('next-btn').addEventListener('click', () => {
    currentCardIndex = (currentCardIndex + 1) % reasonsAndAnswers.length;
    const currentCard = reasonsAndAnswers[currentCardIndex];
    questionEl.textContent = `Reason ${currentCardIndex + 1}: ${currentCard.question}`;
    answerEl.textContent = `Explanation: ${currentCard.answer}`;
    flashcard.classList.remove('flipped');
  });