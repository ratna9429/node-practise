import { Buffer } from "node:buffer";
const {
  createCipheriv,
  createDecipheriv,
  createSecretKey,
  randomFill,
  generateKey,
} = await import("node:crypto");
var aesKey;
var claims = { name: "Joe", roles: ["member", "admin"] };

(async function () {
  console.log("\x1b[31mInvalid Token");
  aesKey = await generateSecretKey();
  let jwe = await returnJWE(claims);
  console.log("\x1b[37mYour JWE token is: " + consoleString(jwe));
  console.log("Paste JSON Web Token In Terminal Then Press Enter.");
})();

async function decryptJWE(jwe) {
  try {
    let parts = jwe.split(".");
    let encodedJWEProtectedHeader = parts[0];
    let protectedHeaderBuffer = Buffer.from(
      encodedJWEProtectedHeader,
      "base64url"
    );
    let cipherText = parts[3];
    let tag = parts[4];
    let tagBuffer = Buffer.from(tag, "base64url");
    let iv = Buffer.from(parts[2], "base64url");
    const decipher = createDecipheriv("aes-256-gcm", aesKey, iv);
    decipher.setAAD(protectedHeaderBuffer);
    decipher.setAuthTag(tagBuffer);
    let decrypted = decipher.update(cipherText, "base64url", "utf8");
    decrypted += decipher.final("utf8");
    return JSON.parse(decrypted);
  } catch (e) {
    return "\x1b[31mInvalid Token!\x1b[37m";
  }
}

function generateInitializationVector() {
  return new Promise(function (resolve, reject) {
    let buf = Buffer.alloc(32); //makes 256 bit
    randomFill(buf, (err, buf) => {
      if (err) reject(err);
      resolve(buf);
    });
  });
}

function generateSecretKey() {
  return new Promise(function (resolve, reject) {
    generateKey("aes", { length: 256 }, (err, key) => {
      if (err) {
        reject(err);
      }
      resolve(key);
    });
  });
}

async function returnJWE(claimsObject) {
  let headerObject = { alg: "dir", enc: "A256GCM" };
  let headerString = JSON.stringify(headerObject);
  let iv = await generateInitializationVector();
  let claimsString = JSON.stringify(claimsObject);
  let claimsBase64URLEncoded = Buffer.from(claimsString).toString("base64url");
  let cipher = createCipheriv("aes-256-gcm", aesKey, iv);
  cipher.setAAD(Buffer.from(headerString));
  cipher.setAutoPadding();
  let encrypted = cipher.update(claimsString, "utf8", "base64url");
  encrypted += cipher.final("base64url");
  let tag = cipher.getAuthTag().toString("base64url");
  let encryptedKey = "";
  let ivString = Buffer.from(iv).toString("base64url");
  let encodedJWEProtectedHeader =
    Buffer.from(headerString).toString("base64url");
  let result =
    encodedJWEProtectedHeader +
    "." +
    encryptedKey +
    "." +
    ivString +
    "." +
    encrypted +
    "." +
    tag;
  return result;
}

export default { decryptJWE, returnJWE };

process.stdin.setEncoding("utf8");
process.stdin.on("readable", async () => {
  let chunk;
  while ((chunk = process.stdin.read()) !== null) {
    console.log(await decryptJWE(chunk));
  }
});

function consoleString(token) {
  let tokenParts = token.split(/(\.)/);
  let colors = ["32m", "31m", "33m", "34m", "36m"];
  let color = "\x1b[X";
  let str = "";
  //str += color
  tokenParts.forEach(function (part, index) {
    if (part != ".") {
      str += color.replace("X", colors.shift());
    }
    str += part;
    str += "\x1b[37m";
  });
  return str;
}
