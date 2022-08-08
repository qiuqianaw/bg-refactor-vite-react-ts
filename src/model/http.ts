interface ITopic {
  competition_id: number
  topic: string
  document_id: number
  time: string
  cate_id: number
  cate_name: string
  game_id: number
  game_name: string
  game_type: number
  debater1: number
  debater2: number
  debater3: number
  debater4: number
  replay_id: number
  outcome: 0 | 1
  note: string
  opponent: string
  operator_username: string
}

export default ITopic
