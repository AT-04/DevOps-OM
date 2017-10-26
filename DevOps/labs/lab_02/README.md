# Vagrant Configuration using OpenStack Provider

### Requirements
* Vagrant
* OpenStack Server

### Follow the steps

1) Clone the repository
2) Install Vagrant-openstack-provider plugin
```
vagrant plugin install vagrant-openstack-provider
```
3) Install Vagrant-Docker-Compose plugin
```
vagrant plugin install vagrant-docker-compose
```
4) Install Vagrant-Env plugin
```
vagrant plugin install vagrant-env
```
5) Rename the file .env.example to .env and setup your credentials
6) Run the both servers.
```
vagrant up
```

## Server CI

- CI/CD server with docker, java gocd and jenkins blue Ocean installed.
Server CI Name:
```
server_01
```

Run the server CI
```
vagrant up server_01
```

Enter the server CI
```
vagrant ssh server_01
```

Shuts down the server CI
```
vagrant halt server_01
```

Destroy the server CI
```
vagrant destroy server_01
```


## Server Deploy

- Deployment server with NodeJS and mongodb installed.
Server Desploy Name:
```
server_02
```


