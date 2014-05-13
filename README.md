### Interactive C.V. / Resumme Generator ###

### Usage: ###

#### Starting the Api Service: ###

- Clustered mode:
```bash
cd [path-to-directory]/api

slr --cluster 8 --log ./rinfApp.log --pid ./rinfApp.pid --path /tmp/rinfApp.sock --no-profile [--detach]
```
- Single worker mode

Use only in development mode
```bash
cd [path-to-directory]/api

slc run
```

#### Stopping the Api Service: ####

-- clustered mode
```bash
slc clusterctl stop --path /tmp/rinfApp.sock
```
-- single mode:
```bash
ctrl+c / command+c
```
### Notes: ###
  To be used on secure networks only, or in a sandboxed(secure) environment

### Credits: ###
```
Authors:
  - Alex Pica
  - Teodor Eugen Dutulescu
```
