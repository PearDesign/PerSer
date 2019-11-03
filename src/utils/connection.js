const electron = window.require("electron");
const { exec } = electron.remote.app.child_process;

export function runCommand(command, server) {
  let remoteCmd = `ssh ${server.username}@${server.ip_address} ${command}`;
  return new Promise(resolve => {
    exec(remoteCmd, (err, stdout, stderr) => {
      if (stderr || err) {
        resolve("Connection Failed");
      }
      resolve("Connected");
    });
  });
}

export async function getConnectionStatus(server) {
  return runCommand("uptime", server);
}

export async function getServerHealth(server) {
  return runCommand("df -h", server);
}
