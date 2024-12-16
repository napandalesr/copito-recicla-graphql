import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="es">
      <Head />
      <title>Copito recicla</title>
      <link rel="icon" href="/images/copito-log.ico" media="(prefers-color-scheme: dark)"/>
      <link rel="icon" href="/images/copito-log.ico" media="(prefers-color-scheme: light)"/>
      <meta name="description" content="COPITO RECICLA, se destaca como una iniciativa ejemplar de gobernanza ambiental que busca no solo sensibilizar, sino también generar un impacto real en la sostenibilidad del Valle del Cauca."/>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
