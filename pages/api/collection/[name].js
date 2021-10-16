// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import collections from '../../../collections.json';
export default function handler(req, res) {
  if(req.query.name==='all'){
    res.status(200).json(collections);
  } else if(req.query.name==='featured'){
    let featured = collections.featured_collections.map(collName => {
      return collections[collName];
    })
    console.log(featured)
    res.status(200).json(featured);
  } else {
    res.status(200).json(collections[req.query.name]);
  }
}
