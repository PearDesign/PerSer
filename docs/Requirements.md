# Overview

# Supported Platforms
The PerSer client runs on a user's personal device, currently limited to a personal computer running Linux, Mac, or Windows.
There's a likely opportunity for mobile device usage later (Android/iOS)
It might also be worth exploring a hosted option on PerSer.io, but this comes with serious business, legal, and security considerations.

# Installation
- The client can be installed on a user's personal computer, or maybe a mobile device

## Context
- Storage of SSH keys on mobile is an unknown. We can generate these files and store them in localStorage, but this might not be the best approach


## TODO
- Determine best way to distribute an auto-updating Electron app
- The mobile client will require a way to run commands over SSH. Find a Node library that does this, and confirm it runs client-side
- Determine a secure way to store SSH keys on mobile

# Feature & Security Updates
## Requirements
- The client should have auto-updating functionality

## Context
The app will change considerably and often, so for feature and security reasons, it needs auto-updating.
Electron has a built-in security update platform known as "Squirrel" which handles auto-updating. It's possible
to use [update.electionjs.org](update.electronjs.org) as an update server, or to run your own.

## TODO
- Determine whether or not to run our own update server

# Privacy
## Requirements
- The client avoids third-party contact where possible
- Users can opt out of auto-updating

## Context
One of the primary benefits of server management is the ability to avoid centralized services.
To whatever extent possible, the PerSer client should avoid making requests to third-party services.

This potentially includes the auto-updating of the app. This should be enabled client-side even though
the PerSer update server should not store user logs of any kind. However, since the API is a different
repository, the client can't rely on the discretion and trustworthiness of the API unless a user opts in
to doing so.

## TODO
- Add a note to the PerSer API documentation about privacy considerations with auto-updating.
- Determine the anonymity of a PerSer client installed and updated through a VPN.

# VPS Provider Management
## Requirements
- Users should be able to...
- ... manage servers from multiple providers
- ... Confirm that their account authorization credentials are still valid for each provider

## Context
The point of PerSer is to allow non-technical users to manage servers. To do this (if they don't have a pre-existing
server available to them), they'll log into a VPS provider (eg Digital Ocean, AWS, GCP, Azure...)
and create an account with their billing info. These accounts will offer up an API
key. For each cloud provider that they seek to utilize, users will plug that API key into the PerSer client.

One part of PerSer allows users to add, remove, and edit these connections to remote cloud providers.

NOTE: This workflow is different from the workflow for adding a server. Adding a cloud provider is the mechanism through
which users without a server of their own can acquire a server to use.

## TODO
- Determine if SSH keys are a requirement, or if users should be able to plug in a username/password each time.
- Decide if apps should be able to span across multiple servers

# Server Management
## Requirements
- The client can add/remove/edit servers with all supported cloud providers
- STRETCH GOAL: The client can add/remove/edit Kubernetes clusters with all supported cloud providers

## Context
This stage of the process has the same effect as if a user had a technical person log into their cloud provider,
spin up a VPS, and provision a server with a root user and the username of the current client.

The end result is that the currently-logged in user could (with proper setup and technical skills) SSH into their
new server, and begin executing commands within their appropriate level of privilege (user privileges on a given server
are managed elsewhere).

## TODO
- Kubernetes clusters?

# SSH Key Management
## Requirements
- Users can generate multiple SSH keys
- Users can associate SSH keys with servers
- Users can select SSH keys when creating accounts on servers

## TODO
Some clients may not have SSH keyrings by default (eg mobile clients). Determine if those JS clients support SSH auth.
If this isn't available, determine non-SSH-based auth strategies for mobile clients, or evaluate if this is possible.

# Application Management
## Requirements
- Users can install/uninstall applications from an "Applications" interface
- Users can see what applications are running on their server.

## Context
If a user can't run applications on their server, it's practically useless. However, SSH-ing into a server to install
software with apt/yum/snap is beyond the targeted skill level of PerSer users. The desktop application should enable users
to install software onto their servers.

The simplest, and most-technical, way to do this would be to have the client expose a CLI to the user that forwards
commands off to the server via SSH and returns output. From there, the interface could offer GUI shorthand buttons that perform
common actions. For example, there could be an "Update" button that sends off a `sudo apt update` command to the server.

This is a nice feature, and should be implemented for users to be able to drop down into a shell and fix issues as they arise.
However, non-technical users will have no use for this tool. They don't want to install Nginx or PostgreSQL; they want to install
secure, pre-configured, self-updating applications that they can rely upon to be resilient and properly-configured.

There are several ways to allow the user to manage the services running on their server:
- 1) The PerSer client can update the server's stateful configuration in a tool like Puppet or Salt.
- 2) The PerSer client can execute commands (or Ansible playbooks) as one-off commands
- 3) The PerSer client can install Docker on a server as a dependency, and manipulate containers
- 4) The PerSer client can use the Kubernetes API to alter the state of a Kubernetes cluster

Each of these options has drawbacks, and deciding which option to pursue will be a technical decision for the project.
The end result, however, is that users have an interface for installing applications onto their server.
They can choose a list of available/installed applications, and click to install/uninstall.

# User Management
## Requirements
- If the user has sufficient access permission on the selected server, they can add/remove other users from their server.
- Under some form of"Advanced User Management" users can add/remove other users to groups.

## Context
User management is important on any server, to control whether a user has the ability to add/remove apps, add/remove users,
and generally dictate server resources. But even more so, many PerSer apps may choose to use the server's user authentication
mechanisms to manage users of their own services. As a result, it's likely that parents may make apps for their children,
which then allows those children to have accounts on different services they use.

# Repository Management
## Requirements
- Users can add/remove/reorder repositories to their list of repositories
- Users by default see `repo.perser.io` as the only available repository
- The interface for adding/removing repositories should be hidden away somewhere in an "Advanced Settings" category
- When users change this setting, they're given a scary security message about how they should know what they're doing

## Context
For Android/iOS, there's more or less only one app store where apps can be downloaded from.
On Mac, there's the option to download software off the internet and install it as a package, or to install apps using brew
Linux changes distro-to-distro, but most have the concept of repositories of software. This is the model that PerSer will use.

A repository of software is a list of applications available to install. It contains their details, screenshots, dependencies,
requirements, and version numbers (among much more data). When a user adds a repository to their list of available software
sources, it becomes an available source of new applications.

There's a considerable security risk in adding an untrustworthy software repository, as they'll be able to provide your system
with apps to install. To protect users from this risk, it shouldn't be directly necessary for users to add/remove repositories
unless they're comfortable doing so. As such, this setting shouldn't be made easily available.

By default, the only repository listed will be the one provided by PerSer. Advanced users can add their own repositories at
their own risk.


# Introduction
## Requirements
- Users should have access to documentation explaining what PerSer does
- This documentation should always be available to confused users
- The docs should be available if a user deletes all their servers/providers
- The docs should always be available under a clear "Help" section
- The docs should also explain common tasks like setting up servers or providers

## Context
This documentation shouldn't be a full welcome-series on first login, but
when the app sees that a new user doesn't have any servers configured or
cloud providers set up, it should offer up a link to help them do so

# File Browser (stretch goal)
- Users can browse files on the server within the desktop client

## Context
This could be its own app, but it could be useful enough that it could be part of the main server management client.
Users may need to clear up space on their servers, and file management could be a part of that.
On the other hand, within a containerized architecture, file management isn't easily exposed. So this could be better done with a
file management application.

## TODO
- Determine if this is common/useful enough, or if this should be done through a file-browser app
- If it's decided that this is better left as its own app, determine if this app should be installed by default

# Server Health
## Requirements
- Users can see the levels of CPU, memory, and RAM usage.
- Users can set up alerts to let them know when resources are exceeded, with sensible defaults

## TODO
- Determine if this is common/useful enough, or if this should be done through a system monitor app
- If it's decided that this is better left as its own app, determine if this app should be installed by default
