export const MOCK_MESSAGES = [
  {
    id: "mock-1",
    role: "user" as const,
    parts: [
      {
        type: "text" as const,
        text: "I want to watch an action movie with great fight scenes",
      },
    ],
  },
  {
    id: "mock-2",
    role: "assistant" as const,
    parts: [
      {
        type: "text" as const,
        text: "Great choice! I've selected three action-packed films with incredible fight choreography that will keep you on the edge of your seat. Each one offers a unique style of action and storytelling.",
      },
      {
        type: "data" as const,
        data: {
          movies: [
            {
              title: "John Wick",
              year: 2014,
              director: "Chad Stahelski",
              genre: ["Action", "Thriller", "Crime"],
              rating: 7.4,
              duration: 101,
              synopsis:
                "An ex-hitman comes out of retirement to track down the gangsters that killed his dog and took everything from him.",
              reason:
                "Features some of the most innovative and brutal fight choreography in modern cinema, with Keanu Reeves performing most of his own stunts.",
            },
            {
              title: "The Raid",
              year: 2011,
              director: "Gareth Evans",
              genre: ["Action", "Thriller", "Martial Arts"],
              rating: 7.6,
              duration: 101,
              synopsis:
                "A S.W.A.T. team becomes trapped in a tenement run by a ruthless mobster and his army of killers and thugs.",
              reason:
                "Widely considered one of the best action films ever made, with relentless Indonesian martial arts sequences that are absolutely jaw-dropping.",
            },
            {
              title: "Mad Max: Fury Road",
              year: 2015,
              director: "George Miller",
              genre: ["Action", "Adventure", "Sci-Fi"],
              rating: 8.1,
              duration: 120,
              synopsis:
                "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners.",
              reason:
                "A masterclass in practical action filmmaking with stunning vehicular combat and chase sequences that are both beautiful and brutal.",
            },
          ],
        },
      },
    ],
  },
];
