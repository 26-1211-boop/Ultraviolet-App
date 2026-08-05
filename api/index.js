import createBareServer from '@mercuryworkshop/bare-server-node';

const bare = createBareServer('/bare/');

export default function handler(req, res) {
  if (bare.shouldRoute(req)) {
    bare.routeRequest(req, res);
  } else {
    res.status(404).send('Not Found');
  }
}
