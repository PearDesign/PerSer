import path from "path";

const fs = window.require("fs");
const electron = window.require("electron");
const sshDir = path.join(electron.remote.app.getPath("home"), ".ssh");

/*
const electron = window.require("electron");
const { exec } = electron.remote.app.child_process;
*/

/* Checks filesystem to see if a user has existing SSH keys aside from those
 * known to PerSer.
 *
 * Used to ask users if they'd like those keys imported into PerSer
 */
export function unregisteredSSHKeys(knownKeys) {
  const knownKeyFilepaths = knownKeys.map(key => key.filepath);
  return fs
    .readdirSync(sshDir)
    .filter(filename => {
      const filepath = sshDir + "/" + filename;

      if (filepath.indexOf("id_rsa") == -1 || filepath.indexOf(".pub") != -1) {
        return false;
      } else if (knownKeyFilepaths.indexOf(filepath) != -1) {
        return false;
      } else {
        return true;
      }
    })
    .map(filename => sshDir + "/" + filename);
}

/*
 * TODO: Determine SSH key generation strategy
 * https://nodejs.org/api/crypto.html#crypto_crypto_generatekeypair_type_options_callback
 * */
