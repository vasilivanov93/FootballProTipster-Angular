export interface Bet {
  _id: string;
  homeTeam: string;
  awayTeam: string;
  result: string;
  prediction: string;
  odd: string;
  isFinished: boolean;
  date: Date;
  resultBet: string;
}
