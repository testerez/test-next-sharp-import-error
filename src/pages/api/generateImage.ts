import { NextApiRequest, NextApiResponse } from "next";
import sharp from "sharp";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  try {
    // Create a new Sharp image
    const image = sharp({
      create: {
        width: 300,
        height: 200,
        channels: 4, // 4 channels for RGBA
        background: { r: 255, g: 0, b: 0, alpha: 1 }, // Red background
      },
    });

    // Generate the image
    const buffer = await image.png().toBuffer();

    // Send the image as a response
    res.setHeader("Content-Type", "image/png");
    res.send(buffer);
  } catch (error) {
    res.status(500).json({ error });
  }
}
