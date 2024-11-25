import multer from 'multer';
import { NextApiRequest, NextApiResponse } from 'next';

// Configuración de multer
const upload = multer({
  storage: multer.diskStorage({
    destination: './public/uploads',
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});

interface MulterRequest extends NextApiRequest {
  file?: Express.Multer.File;
  body: {
    name: string;
  };
}

// Middleware para integrar multer con Next.js
const uploadMiddleware = upload.single('file');

// Convertir middleware de multer en una promesa para usar en Next.js
/* eslint-disable @typescript-eslint/no-unsafe-function-type */
const runMiddleware = (req: NextApiRequest, res: NextApiResponse, fn: Function) => {
  return new Promise<void>((resolve, reject) => {
    fn(req, res, (result: unknown) => {
      if (result instanceof Error) {
        return reject(result);
      }
      resolve();
    });
  });
};

const handler = async (req: MulterRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  try {
    await runMiddleware(req, res, uploadMiddleware);
    
    if (!req.file) {
      return res.status(400).json({ error: 'No se encontró ningún archivo' });
    }

    const filePath = `/uploads/${req.file.filename}`;
    res.status(200).json({ filePath });
  } catch (error) {
    res.status(500).json({ error: 'Error al procesar la solicitud '+ error });
  }
};

export const config = {
  api: {
    bodyParser: false
  },
};

export default handler;
