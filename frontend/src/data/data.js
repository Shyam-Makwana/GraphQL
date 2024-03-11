export const exampleQueries = `
# Fetches all reviews, games, and authors with their specific fields

query GetAllData {
  reviews {
    id,
    rating,
    content,
    author_id,
    game_id
  }
  games {
    id,
    title,
    platform
  }
  authors {
    id,
    name,
    verified
  }
}

# Retrieves a specific review by its ID

query GetReviewByID {
  review(id: "2") {
      id
      rating
      content
      author_id
      game_id
  }
}

# Performs a complex nested query to get authors, their reviews, and the corresponding game details for each review

query ComplexNestedQuery {
  authors {
    id
    name,
    reviews {
      id,
      rating,
      content,
      game_id,
      game {
        title,
        platform
      }
    },
  }
}
`;

export const dummyData = `
let games = [
  {id: '1', title: 'Zelda, Tears of the Kingdom', platform: ['Switch']},
  {id: '2', title: 'Final Fantasy 7 Remake', platform: ['PS5', 'Xbox']},
  {id: '3', title: 'Elden Ring', platform: ['PS5', 'Xbox', 'PC']},
  {id: '4', title: 'Mario Kart', platform: ['Switch']},
  {id: '5', title: 'Pokemon Scarlet', platform: ['PS5', 'Xbox', 'PC']}
]

let authors = [
  {id: '1', name: 'Bob', verified: true},
  {id: '2', name: 'Jack', verified: false},
  {id: '3', name: 'Mario', verified: true},
]

let reviews = [
  {id: '1', rating: 9, content: 'lorem ipsum', author_id: '1', game_id: '2'},
  {id: '2', rating: 10, content: 'lorem ipsum', author_id: '2', game_id: '1'},
  {id: '3', rating: 7, content: 'lorem ipsum', author_id: '3', game_id: '3'},
  {id: '4', rating: 5, content: 'lorem ipsum', author_id: '2', game_id: '4'},
  {id: '5', rating: 8, content: 'lorem ipsum', author_id: '2', game_id: '5'},
  {id: '6', rating: 7, content: 'lorem ipsum', author_id: '1', game_id: '2'},
  {id: '7', rating: 10, content: 'lorem ipsum', author_id: '3', game_id: '1'}
]
`;