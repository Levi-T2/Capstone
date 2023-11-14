import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},
  
  /** @type {import('./models/Car.js').Car[]} */
  cars: [],
  
  /** @type {import('./models/Car.js').Car[]} */
  activeCar:[],
  
  /** @type {import('./models/Comment.js').Comment[]} */
  comments:[],

  carsForPage: 0,

  activeModList: [],

  profile: [],

// NOTE All this is for the comparison page to func. DON'T REMOVE!!

  favorite: [],

  compare: {},

  compare2: {},

  compare3: {},

  compare4: {},
})
