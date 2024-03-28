const QuestionsData = [
  {
    questionText: "When you enter a perty or social gathering",
    answerOptions: [
      {
        answerText: "Make loud entrance so that everyone notice you",
        score: 2,
        keyword: "overconfidence and forward person",
      },
      {
        answerText:
          "Make quiet entrance and looking around for someone you know",
        score: 6,
        keyword: "focus on safty and polite, calm and civilized ",
      },
      {
        answerText: "Make quiet entrance trying to stay unnoticed",
        score: 10,
        keyword: "less confident and less socialized person",
      },
      {
        answerText: "Make normal entrance and chill with people around",
        score: 8,
        keyword: "wrong",
      },
    ],
  },
  {
    questionText: "Who knows you the best?",
    answerOptions: [
      {
        answerText: "A friend or the partner",
        score: 10,
        keyword: "open person",
      },
      {
        answerText: "A Sibiling",
        score: 8,
        keyword: "open for specific people",
      },
      { answerText: "Mother or father", score: 6, keyword: "less open person" },
      { answerText: "No one", score: 2, keyword: "not a open person" },
    ],
  },
  {
    questionText: "When I walk, I tend to do it",
    answerOptions: [
      {
        answerText: "Fast with long steps",
        score: 10,
        keyword: "Active and goal oriented",
      },
      {
        answerText: "Fast with small steps ",
        score: 2,
        keyword: "nervous and impatience",
      },
      {
        answerText: "Less fast and eyes on road",
        score: 6,
        keyword: "overthinker",
      },
      {
        answerText: "Less fast and looking the world",
        score: 8,
        keyword: "curious and Anxious",
      },
    ],
  },
  {
    questionText: "How do you feel about being the center of attention?",
    answerOptions: [
      {
        answerText: "Tolerate it but feel uncomfortable or self-conscious",
        score: 2,
        keyword: "Shy and introverted",
      },
      {
        answerText: "Enjoy it and find it energizing",
        score: 10,
        keyword: "Sociable and extroverted",
      },
      {
        answerText:
          "Dislike it and actively avoid being the center of attention",
        score: 6,
        keyword: "Reserved and introverted",
      },
      {
        answerText: "Neutral towards being the center of attention",
        score: 8,
        keyword: "Balanced and adaptable",
      },
    ],
  },
  {
    questionText: "When faced with a challenge, what is your typical reaction?",
    answerOptions: [
      {
        answerText: "I seek advice from others before making a decision.",
        score: 6,
        keyword: "Collaborative nature, openness to advice, and sociability.",
      },
      {
        answerText:
          "I take a step back, analyze the situation, and then proceed cautiously.",
        score: 8,
        keyword: "Analytical thinking, cautiousness, and strategic planning.",
      },
      {
        answerText: "I tend to avoid challenges altogether if possible.",
        score: 2,
        keyword:
          "Avoidance tendency, risk aversion, and preference for comfort.",
      },
      {
        answerText: "I dive in headfirst, eager to tackle it head-on.",
        score: 10,
        keyword: "Proactiveness, assertiveness, and risk-taking tendency.",
      },
    ],
  },
  {
    questionText: "How do you prefer to spend your free time?",
    answerOptions: [
      {
        answerText:
          "Engaging in adventurous activities or trying new experiences.",
        score: 10,
        keyword:
          "Adventurousness, openness to new experiences, and thrill-seeking.",
      },
      {
        answerText: "Relaxing at home with a good book, movie, or hobby.",
        score: 8,
        keyword: "Introversion, introspection, and appreciation for solitude.",
      },
      {
        answerText: "Socializing with friends and attending events or parties.",
        score: 8,
        keyword:
          "Extroversion, sociability, and enjoyment of social interactions.",
      },
      {
        answerText: "Planning and organizing tasks for the upcoming week.",
        score: 8,
        keyword:
          "Conscientiousness, organization, and preference for structured activities.",
      },
    ],
  },
  {
    questionText:
      "In a group project, what role do you naturally gravitate towards?",
    answerOptions: [
      {
        answerText: "The leader, taking charge and delegating tasks.",
        score: 10,
        keyword:
          "Leadership qualities, assertiveness, and decision-making skills.",
      },
      {
        answerText:
          "The thinker, analyzing options and offering strategic insights.",
        score: 8,
        keyword:
          "Critical thinking, problem-solving ability, and strategic planning.",
      },
      {
        answerText:
          "The mediator, resolving conflicts and maintaining harmony.",
        score: 8,
        keyword: "Diplomacy, empathy, and conflict resolution skills.",
      },
      {
        answerText:
          "The observer, contributing when necessary but preferring to work independently.",
        score: 8,
        keyword: "Independence, self-reliance, and preference for autonomy.",
      },
    ],
  },
  {
    questionText: "How do you handle criticism or feedback?",
    answerOptions: [
      {
        answerText:
          "I appreciate constructive criticism and use it to improve.",
        score: 8,
        keyword: "Resilience, openness to growth, and receptivity to feedback.",
      },
      {
        answerText:
          "I can become defensive initially but try to reflect on the feedback later.",
        score: 8,
        keyword: "Defensiveness, emotional sensitivity, and introspection.",
      },
      {
        answerText: "I tend to take criticism personally and feel discouraged.",
        score: 8,
        keyword:
          "Sensitivity to criticism, self-esteem issues, and emotional reactivity.",
      },
      {
        answerText: "I usually brush off criticism and don't let it affect me.",
        score: 8,
        keyword:
          "Confidence, self-assuredness, and resilience to external judgments.",
      },
    ],
  },
  {
    questionText: "What motivates you the most in life?",
    answerOptions: [
      {
        answerText: "Achieving personal success and reaching my goals.",
        score: 10,
        keyword:
          "Achievement orientation, ambition, and goal-directed behavior.",
      },
      {
        answerText:
          "Making a positive impact on others and the world around me.",
        score: 8,
        keyword: "Altruism, empathy, and prosocial motivation.",
      },
      {
        answerText:
          "Seeking recognition and validation from peers or authority figures.",
        score: 8,
        keyword:
          "External validation seeking, social comparison, and status orientation.",
      },
      {
        answerText: "Finding inner peace and contentment in everyday life.",
        score: 6,
        keyword:
          "Inner harmony seeking, mindfulness, and existential fulfillment.",
      },
    ],
  },
  {
    questionText: "When you find something really funny, how do you typically react?",
    answerOptions: [
      {
        answerText: "A big, appreciative laugh",
        score: 10,
        keyword: "Outgoing and expressive",
      },
      {
        answerText: "A laugh, but not a loud one",
        score: 8,
        keyword: "Expressive yet reserved",
      },
      {
        answerText: "A quiet chuckle",
        score: 6,
        keyword: "Reserved and subtle",
      },
      {
        answerText: "A sheepish smile",
        score: 2,
        keyword: "Shy or embarrassed",
      },
    ],
  },
  // Add more questions here
];

export default QuestionsData;
