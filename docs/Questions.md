# Questions

## How will users install applications?
Current options include:
- One-off bash scripts
  - Pros: Simple, agent-less
  - Cons: Not resilient, apps may not interact securely
- Server State Configuration Tool (Puppet/Salt)
  - Pros: Resilient against breaking changes
  - Cons: Relies upon `Puppet` or `Salt`, still not secure
- Dockerized containers
  - Pros: Secure, resilient, isolation through `docker-compose`
  - Cons: Relies upon `docker` as a dependency, halfway measure to k8s
- Kubernetes cluster management
  - Pros: Secure, resilient, isolated, minimal dependencies
  - Cons: More $$$ for end users, increased dev complexity

## What apps will be available?
Users can maintain a list of repositories. By default, the only available
repository will be one maintained at `repo.perser.io` but they can add others.

## What will be the format for repositories? apt? snap? deb? something else?
