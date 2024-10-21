import { Request, Response, Router } from 'express';
import { storerouter } from './store';
import { userrouter } from './user';
import { offerrouter } from './offer';
// import { addContent } from '../helper/gallery'
import { ratingsrouter } from './ratings';
import { galleryrouter } from './gallery';
import { login } from '../controllers/login';
import { userAdd } from '../controllers/user';
import passport from 'passport';
import { auth } from '../middlewares/auth';
import { userValidation } from '../middlewares/user';
auth(passport);
export const router = Router();

router.use(
  '/v1/store',
  passport.authenticate('jwt', {
    session: false,
    failureRedirect: '/home',
  }),
  storerouter,
);
router.use(
  '/v1/user',
  passport.authenticate('jwt', {
    session: false,
    failureRedirect: '/home',
  }),
  userrouter,
);
router.use(
  '/v1/offer',
  passport.authenticate('jwt', {
    session: false,
    failureRedirect: '/home',
  }),
  offerrouter,
);
// router.use('/v1/abc', addContent)
router.use(
  '/v1/ratings',
  passport.authenticate('jwt', {
    session: false,
    failureRedirect: '/home',
  }),
  ratingsrouter,
);
router.use(
  '/v1/gallery',
  passport.authenticate('jwt', {
    session: false,
    failureRedirect: '/home',
  }),
  galleryrouter,
);
router.use('/v1/login', login);
router.use('/v1/register', userValidation, userAdd);
router.use('/home', (req: Request, res: Response) => {
  res.json({ msg: 'welcome Please Login First' });
});
router.use('/v1/logout', (req: Request, res: Response) => {
  res.clearCookie('token').json('logout sucessfully');
});