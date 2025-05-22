
export type Character = {
  id: number;
  name: string;
  show: string;
  quotes: string[];
  bgColor: string;
  textColor: string;
  borderColor: string;
  emoji: string;
};

export const characters: Character[] = [
  {
    id: 1,
    name: "Michael Scott",
    show: "The Office",
    quotes: [
      "You're like paper in a paper company—absolutely essential.",
      "You are the world's best boss of your own life, and that's what she said!",
      "If I had a dollar for every time you brightened someone's day, I'd be as rich as Ryan thought I was.",
      "Your smile is wider than the HD TV I bought at a garage sale."
    ],
    bgColor: "bg-yellow-50",
    textColor: "text-slate-800",
    borderColor: "border-yellow-300",
    emoji: "📄"
  },
  {
    id: 2,
    name: "Dwight Schrute",
    show: "The Office",
    quotes: [
      "Fact: You're exceptional. Bears, beets, Battlestar Galactica... none compare to you.",
      "I have investigated your performance, and it is superior to all others. This is not an exaggeration.",
      "Your strength reminds me of my prized beets—hardy, reliable, and of the highest quality.",
      "You would survive winter on Schrute Farms better than most city folk. This is high praise."
    ],
    bgColor: "bg-amber-50",
    textColor: "text-yellow-900",
    borderColor: "border-amber-300",
    emoji: "🐻"
  },
  {
    id: 3,
    name: "Phil Dunphy",
    show: "Modern Family",
    quotes: [
      "You're like Wi-Fi—invisible but always making everything in life better!",
      "Success is 1% inspiration, 98% perspiration, and 2% attention to detail. Wait... You're the 101% that makes math irrelevant!",
      "If I were to write a real estate listing about you, it would say 'Perfect condition, amazing features, no inspection needed!'",
      "You put the 'fun' in functional adult! And the 'cool' in... well, just cool!"
    ],
    bgColor: "bg-blue-50",
    textColor: "text-blue-800",
    borderColor: "border-blue-200",
    emoji: "🏡"
  },
  {
    id: 4,
    name: "Tommy Shelby",
    show: "Peaky Blinders",
    quotes: [
      "In a world of small caps, you're the one wearing the razor-lined peak.",
      "People like us, we're different. You have something they'll never have—intelligence that cuts like a blade.",
      "I've made calculations and determined you're not to be crossed, but rather admired. By order of the Peaky Blinders.",
      "You've got ambition that could fill Small Heath. That's rare."
    ],
    bgColor: "bg-gray-900",
    textColor: "text-gray-100",
    borderColor: "border-gray-600",
    emoji: "🎩"
  },
  {
    id: 5,
    name: "Walter White",
    show: "Breaking Bad",
    quotes: [
      "You're not in danger of being ordinary. You ARE the danger of being extraordinary!",
      "I'm not in the compliment business. I'm in the empire business. And you? You'd make a fine emperor.",
      "Apply yourself to any challenge, and the results will always be... chemically pure perfection, just like you.",
      "99.1% of people aren't as impressive as you. That's just science."
    ],
    bgColor: "bg-green-100",
    textColor: "text-green-900",
    borderColor: "border-green-400",
    emoji: "⚗️"
  },
  {
    id: 6,
    name: "Jesse Pinkman",
    show: "Breaking Bad",
    quotes: [
      "Yo, you're like the blue stuff—100% pure awesomeness, bitch!",
      "Some people are just born to be badass, and you? You're the Heisenberg of being awesome, yo!",
      "Science, bitch! Can't explain how someone can be this cool!",
      "You know what's better than magnets? You, bitch!"
    ],
    bgColor: "bg-blue-100",
    textColor: "text-blue-900",
    borderColor: "border-blue-400",
    emoji: "🧪"
  },
  {
    id: 7,
    name: "Geralt of Rivia",
    show: "The Witcher",
    quotes: [
      "Hmm... you're the only monster I'd never slay.",
      "If I had to choose between the lesser of two evils, I'd choose to spend time with you instead.",
      "Medallion's humming. Must be your extraordinary presence.",
      "Destiny has brought me to many places. All of them pale compared to wherever you are."
    ],
    bgColor: "bg-gray-100",
    textColor: "text-gray-800",
    borderColor: "border-gray-400",
    emoji: "⚔️"
  },
  {
    id: 8,
    name: "Phoebe Buffay",
    show: "Friends",
    quotes: [
      "You're the song to my Smelly Cat—completely weird and absolutely perfect.",
      "If you were a massage client, I'd never pretend to be Swedish with you because you deserve authenticity.",
      "Oh. My. God! You're like a combination of all my past lives, but without the tragic plague endings!",
      "You have an aura that's so bright, it's like my mom's spirit came back as a flickering lightbulb over your head!"
    ],
    bgColor: "bg-purple-50",
    textColor: "text-purple-800",
    borderColor: "border-purple-200",
    emoji: "🎸"
  },
  {
    id: 9,
    name: "Joe Goldberg",
    show: "You",
    quotes: [
      "You're different. Special. I noticed it the moment I saw you.",
      "In a world full of phonies, you're refreshingly authentic. I've been watching... with admiration.",
      "The thing about you is, you don't even realize how extraordinary you are. That's what makes you perfect.",
      "Every little detail about you tells a story I could read forever. And I mean that in the least creepy way possible."
    ],
    bgColor: "bg-red-50",
    textColor: "text-red-900",
    borderColor: "border-red-200",
    emoji: "📚"
  }
];
