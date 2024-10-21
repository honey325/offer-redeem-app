import { Strategy, StrategyOptions } from 'passport-jwt';
// import { logError } from "../logs";
import { Request } from 'express';
import { userResult } from '../types/user';
import { userSelectQuery } from '../service/user';

const cookieExtractor = function (req: Request) {
  return req.cookies?.token;
};
type DoneCallback = (err: any, user?: Express.User | false | null) => void;
const auth: DoneCallback = (passport) => {
  let options: StrategyOptions = {
    jwtFromRequest: cookieExtractor,
    secretOrKey: process.env.SECRET_KEY || '',
  };
  passport.use(
    new Strategy(options, async (payload, done) => {
      try {
        const result: userResult[] = await userSelectQuery({ id: Number([payload.id]) });
        if (result.length > 0) {
          return done(null, payload);
        }
        return done(null, false), payload;
      } catch (error: string | Error | unknown) {
        console.log(error);
      }
    }),
  );
};

export { auth, cookieExtractor };
