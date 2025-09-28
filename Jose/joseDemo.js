// import * as jose from "jose";
// import { promisify } from "util";
// import { generateKeyPair, createPublicKey } from "node:crypto";

// // Promisify the generateKeyPair function for convenience
// const generateKeyPairAsync = promisify(generateKeyPair);

// // Generate RSA Key Pair
// async function generateRSAKeyPair() {
//   const { publicKey, privateKey } = await generateKeyPairAsync("rsa", {
//     modulusLength: 2048, // Key size in bits
//     publicKeyEncoding: {
//       type: "spki",
//       format: "pem",
//     },
//     privateKeyEncoding: {
//       type: "pkcs8",
//       format: "pem",
//     },
//   });
//   return { publicKey, privateKey };
// }

// // RSA public key generation and conversion to KeyObject
// const { publicKey: rsaPublicKeyPem } = await generateRSAKeyPair();
// console.log("RSA Public Key:", rsaPublicKeyPem);

// // Convert PEM public key to KeyObject for compatibility with `jose`
// const rsaPublicKey = createPublicKey(rsaPublicKeyPem);

// // Your custom object to encrypt
// const customObject = {
//   name: "Ratnadeep",
//   secretName: "Deepu",
//   token: "Bearer myToken",
// };

// // Convert the object to a JSON string
// const payload = JSON.stringify(customObject);

// // Encrypt the JSON payload using JWE with the RSA public key
// const jwe = await new jose.GeneralEncrypt(new TextEncoder().encode(payload))
//   .setProtectedHeader({ enc: "A256GCM" })
//   .addRecipient(rsaPublicKey) // RSA public key as KeyObject
//   .setUnprotectedHeader({ alg: "RSA-OAEP-384" }) // Set appropriate asymmetric algorithm
//   .encrypt();

// console.log("JWE Encrypted Data:", jwe);

// const { plaintext, protectedHeader, additionalAuthenticatedData } =
//   await jose.generalDecrypt(jwe, privateKey);

// console.log(protectedHeader);
// const decoder = new TextDecoder();
// console.log(decoder.decode(plaintext));
// console.log(decoder.decode(additionalAuthenticatedData));

import * as jose from "jose";
import { promisify } from "util";
import {
  generateKeyPair,
  createPublicKey,
  createPrivateKey,
} from "node:crypto";

// Promisify the generateKeyPair function for convenience
const generateKeyPairAsync = promisify(generateKeyPair);

// Generate RSA Key Pair
async function generateRSAKeyPair() {
  const { publicKey, privateKey } = await generateKeyPairAsync("rsa", {
    modulusLength: 2048, // Key size in bits
    publicKeyEncoding: {
      type: "spki",
      format: "pem",
    },
    privateKeyEncoding: {
      type: "pkcs8",
      format: "pem",
    },
  });
  return { publicKey, privateKey };
}

// RSA public key and private key generation
const { publicKey: rsaPublicKeyPem, privateKey: rsaPrivateKeyPem } =
  await generateRSAKeyPair();
console.log("RSA Public Key:", rsaPublicKeyPem);
console.log("RSA Private Key:", rsaPrivateKeyPem); // Optional, for your reference

// Convert PEM public key to KeyObject for compatibility with `jose`
const rsaPublicKey = createPublicKey(rsaPublicKeyPem);

// Your custom object to encrypt
const customObject = {
  name: "Ratnadeep",
  secretName: "Deepu",
  token: "Bearer myToken",
};

// Convert the object to a JSON string
const payload = JSON.stringify(customObject);

// Encrypt the JSON payload using JWE with the RSA public key
const jwe = await new jose.GeneralEncrypt(new TextEncoder().encode(payload))
  .setProtectedHeader({ enc: "A256GCM" })
  .addRecipient(rsaPublicKey) // RSA public key as KeyObject
  .setUnprotectedHeader({ alg: "RSA-OAEP-384" }) // Set appropriate asymmetric algorithm
  .encrypt();

console.log("JWE Encrypted Data:", jwe);

// Convert PEM private key to KeyObject for decryption
const rsaPrivateKey = createPrivateKey(rsaPrivateKeyPem);

// Decrypt the JWE
const { plaintext, protectedHeader } = await jose.generalDecrypt(
  jwe,
  rsaPrivateKey
);

console.log("Decrypted Protected Header:", protectedHeader);
console.log("Decrypted Data:", new TextDecoder().decode(plaintext));
