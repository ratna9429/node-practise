// Install express if not already installed
// npm install express

import express from "express";
import * as jose from "jose";
import { promisify } from "util";
import {
  generateKeyPair,
  createPrivateKey,
  createPublicKey,
} from "node:crypto";

const app = express();
const port = 3000;

// Generate RSA Key Pair once and store in memory
const generateKeyPairAsync = promisify(generateKeyPair);
let rsaPrivateKeyPem, rsaPublicKeyPem;

async function initializeKeys() {
  const { publicKey, privateKey } = await generateKeyPairAsync("rsa", {
    modulusLength: 2048,
    publicKeyEncoding: {
      type: "spki",
      format: "pem",
    },
    privateKeyEncoding: {
      type: "pkcs8",
      format: "pem",
    },
  });
  rsaPublicKeyPem = publicKey;
  rsaPrivateKeyPem = privateKey;
}

await initializeKeys();

app.get("/generate-jwe", async (req, res) => {
  const customObject = {
    name: "Ratnadeep",
    secretName: "Deepu",
    token: "Bearer myToken",
    exp: Math.floor(Date.now() / 1000) + 60 * 60, // 1 hour expiration
  };

  const payload = JSON.stringify(customObject);

  const rsaPublicKey = createPublicKey(rsaPublicKeyPem);

  const jwe = await new jose.GeneralEncrypt(new TextEncoder().encode(payload))
    .setProtectedHeader({ enc: "A256GCM" })
    .addRecipient(rsaPublicKey)
    .setUnprotectedHeader({ alg: "RSA-OAEP-384" })
    .encrypt();

  res.json({ jwe });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
