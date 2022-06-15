import { client } from "../../lib/sanityClient";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        await client.fetch(`*[_type == "post"]{ title, slug, author->,'authorImg':author->image.asset->, 'mainImage':mainImage.asset->, categories[]->, body, metaData, _createdAt}[${req.body.currentCount}...${req.body.currentCount + 10}]`).then((blogs) => {
            res.status(200).json({ success: true, blogs: JSON.parse(JSON.stringify(blogs)) })
              }).catch((error)=>{
            res.status(400).json({ success: false, msg: error })
              })
    } else {
        res.status(400).json({ success: false, msg:'kindly, make a valid request.' })
    }
  }