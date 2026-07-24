import crypto from "crypto";



/**
 * Génère un token de session sécurisé
 * 64 caractères hexadécimaux
 */
export function generateToken() {

  return crypto
    .randomBytes(32)
    .toString("hex");

}