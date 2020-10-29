//store all the intros into array
var intros = [
    "Arrr, what do you want land-lover? Tell me fast before I chop your head off!",
    "Hello traveler! I'm Robin from the Hood. My friends call me Robin Hood because I hate capitalism.",
    "Huh, I'm busy you puny human! How dare you interrupt my hunt?",
    "I'm Jester, ehee! I love my job, but nobody respects my work around here. Would you like to hear a joke, ehee?",
    "Oh dear, you seem hungry! I'm cooking turkey stew for dinner. Why don't you join?",
    "I'm Sir Henry, the Peacekeeper. Do not confuse me with that blasphemous who calls himself Sir Arthur.",
    "I'm Sir Arthur, the one and only Kings Guard. I have never lost a battle. Speak fast or get lost!",
    "Oh hello, I didn't see you there! I was chasing this butterfly but I don't know where it flew. Have you seen it?",
    "Why are you staring at me? Is it because of the cuts on my face?.. I told everyone already, I had a little shaving accident!",
    "Hey, I'm Resse! But you can start calling me Sir Resse already. I'll become a knight one day!",
    "Oh, you want to speak to me? That's an honor, Sir! I have never spoken to anyone outside the village before.",
    "Hello Sir, may I help you? I'm the shepherd of the village. Are you here to buy a cattle?",
    "They call me Two Toes, but I guARRentee you that I have three toes!",
    "What? Can't a pirate like me wear a fancy hat? It hides my bald spots.",
    "I'm Zorro, the Pirate Hunter. I hunt those that break the law. But don't confuse me with those damn knights.",
    "Sssh, quiet! I'm hiding from that evil knight! He keeps kidnapping me but I keep escaping. He even stole my clothes.",
    "It's not easy to be a king. In the end of the day I have an entire kingdom to rule! Have you found the thief by the way?",
];
//store all questions and answers into array
var questionsAndAnswers = [
    //with clues
    ["What's your favorite color?", "My favorite color? I love wearing green."],//wearsGreen
    ["Who is the closest to the king?", "Uhm, I don't know? Maybe the queen?"],//worksForKing
    ["Do you have any hobbies?", "I like riding horses."],//hasHorse
    ["Where were you when the crown was stolen?﻿", "I was washing my socks in the river near the castle."],//hasCuts
    ["Who is the biggest liar in the village?", "I'm a very honest man as you might have heard it already."],//isPirate
    ["What’s the most expensive thing you own?﻿", "It is the sword that my father left to me after he died."],//hasSword
    ["Have you been in the castle yesterday?", "Not as far as I remember."],//isVillager
    ["Do you know that the king's crown is missing?", "Of course I know, everyone is talking about it! That shiny crown would look so nice on my head."],//hasHat
    ["What do you usually do in your free time?", "I like watching the guards polishing their armors."],//hasArmor
    ["Is there anything  you want to share with me?", "You want me to share a secret?... I like the color black."],//wearsBlack
    ["Where were you till now?", "I just came back from my morning walk. You won't believe it but I found an abandoned shield."],//hasShield
    //without clues
    ["Have you spoken with anyone today?", "Yes, I saw my buddy in the tavern. We had a little chat. We argued all day about what to call a medieval soldier. But it was getting late so we decided to call it a knight."],
    ["What were you doing yesterday night?", "What do you think I was doing, dummy? Nights are for sleeping, aren't they?"],
    ["Do you know what happened yesterday?", "You mean other than the missing crown? No, haven't heard of anyting."],
    ["Have you seen anything suspicious yesterday?", "I don't even remember anything from yesterday night. I was dead drunk from the whiskey soup I had at lunch."],
    ["Do you lie often?", "Sir, are you accusing me of something? Because if you are, I'll report you to my buddy who works in the courthouse."],
    ["Did something extraordinary happen yesterday?", "Yes! You won't believe it, but I found the missing princess by following her foot prince."],
    ["How do you know that the crown is missing?", "The crown is missing? Never heard that before. I hope they'll catch the god damn thief!"],
    ["Do you like hats?", "Who doesn't like hats? From thieves to knights, everyone like hats."],
    ["Do you wear hats often?", "Not that often, but I do once in a while. They make me look so fancy."],
    ["Do you know some pirates?", "Of course I do! The pirates in this kingdom have a big reputation. You don't want to mess with them."],
    ["Tell me a joke!", "Why did Arthur have a round table?\n-So no one could corner him!"],
    ["Where was your wife yesterday night?", "At home of course. We were discussing what to name our newborn baby. I wanted to name him Lance, but my wife said it was too uncommon. I told her that in medieval days, people were named Lance a lot."],
    ["Have you heard about something gone missing?", "Of course, its the servant that went missing weeks ago! We were searching for him in the forest, but all we could find was a strange paper saying \"404: Page Not Found\". No clue what it means though."]
];
//store all clues into 2d array
var clues = [
    ["Just like the guy who left the castle yesterday night.", "Although, I haven't seen anyone else who likes green."],
    ["I don't trust anyone who works for the king though.", "I trust everyone who works for the king."],
    ["I saw a beautiful horse yesterday night waiting in front of the castle.", "I think that the horse owners are very honorable people."],
    ["I think saw a man with cuts on his face, running away from the castle.", "I saw a man running away from the castle. He had such a handsome face, no cuts at all."],
    ["However, I don't trust these damn pirates. They always steal stuff.", "Just like my pirate friends are. I trust them with my everything since they saved my life."],
    ["Not even the person that I saw yesterday night around the castle, has a sword as shiny as mine!", "Anyone who carries a sword, has something to fight for... Very righteous people!"],
    ["But strangely enough, I've heard that a peasant was around it yesterday night. I though they weren't allowed to be near the castle.", "I can ensure you that none of the peasants were there either. They aren't allowed to be near the castle."],
    ["I'm sure the guy with the hat stole it in order to wear it himself.", "I'm sure someone who couldn't wear a hat stole it."],
    ["You had to see the armor that I saw yesterday night! It was so shiny, at first I thought the king was leaving the castle.", "I have always the knights with armors. They are so trustworthy!"],
    ["But I'm not the only one in the kingdom. There are rumors that the thieves like it too.", "But everyone else that I know hates it. I've heard that even the thieves hate it."],
    ["It was near the castle door. Maybe someone dropped it yesterday night.", "It was in the forest. Those poor shield-men, they defend the kingdom all the time... I must find the owner."],
];


