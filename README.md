# SmartMotors Web Experience

## Release Pipeline
### Staging Server https://smartmotors.freshinup.com
Automatically deployed as `master` branch of this repository is updated.

<br/>

## Terms
| TERM | DESCRIPTION | 
| :------------- |:-------------|
| **Deal** | When a Vehicle is sold; a contract is signed |
| **Opportunity** | Basically a lead for a potential sale / "deal" |

| MODULES | DESCRIPTION | 
| :------------- |:-------------|
| Financial | Displays *Deals* |
| Sales Opportunity | Displays Opportunity ("Deal"). Industry calls "Lead." However, we misnamed it "Deal" so the Sales Opportunity is using Deals UI and Deals API |


## Contributing
For process instructions on introducing changes please read the [Platform Readme](https://github.com/FreshinUp/fresh-platform/blob/master/README.md) and [Wiki](https://github.com/FreshinUp/fresh-platform/wiki)

### Server Setup
#### Queue setup
On https://forge.laravel.com go on `Site Details` and under `Queue` tab create a queue worker with `Run Worker As Daemon (Laravel 4.2+)` option selected.
On envoyer go on `Deploy Hooks  »  Activate New Release` and under `After This Action` section create a new Hook with the following script:
```
cd {{project}}
php artisan queue:restart
```
with `forge` user and `On Servers` option selected

#### Command schedule setup
On https://forge.laravel.com go on `Server` and under `Scheduler` tab create a new scheduler job with following options:
Command: `php /home/forge/default/artisan schedule:run`
User: `forge`
Frequency: `Every minute`

#### Pbs import setup
- set your env variables related to square
```
PBS_USERNAME=<pbs-username>
PBS_PASSWORD=<pbs-password>
PBS_SERIAL_NUMBER=<pbs-serial-number>
```

### Development Setup

#### Requirements
> The following assumes your local SSH keys are registered with your GitHub account. However, feel free to use HTTPS cloning.

```bash
$ git clone git@github.com:freshinup/smartmotors.git
$ cd smartmotors
$ composer install
$ php artisan smartmotors:install --dev
```

#### Optional
**If you want to seed the database with demo data**
```bash
$ php artisan smartmotors:seed --quickstart
```
Please note if you need to reset the seeded data you can do
```bash
$ php artisan smartmotors:seed --quickstart --refresh
```
If the api responds with 401 Unauthorized; run commands in this order:
```bash
php artisan smartmotors:seed --quickstart --refresh --force
php artisan passport:install --force
php artisan fresh-bus:install-auth
```

**Automatically transpile Javascript on changes**

```bash 
$ yarn watch
```

#### Staying Up-to-date
As changes are made to dependencies, it is a good practices to run the following after a successful merge or update from `master`

```bash
$ composer update
$ php artisan smartmotors:update --dev
```

## Local Development (Homestead)
**Developing with other modules**
If you need to make changes to the BUS or working on an edge version, you can do the following

> Assuming at the SmartMotors directory (e.g. ~/Development/HomesteadSites/SmartMotors)

```bash 
# 
$ cd ../
$ git clone git@github.com:FreshinUp/fresh-bus-forms.git
$ php artisan fresh-bus:link
$ php artisan fresh-bus:update --dev
```

### ElasticSearch
Add to `Homestead.yaml`
```
features:
  - elasticsearch:
    version: 7
        
ports:
  - send: 9200
    to: 9200
```

`.env`
```
ELASTICSEARCH_HOST=http://localhost:9200
```

### Static Content Management (Upload Content)
Enabling User Avatars and more

- add `minio: true` to homestead.yaml
- add 
```
buckets:
    - name: csm
      policy: public
    - name: csm-bus
      policy: public
```
- `$ vagrant up --provision`
- add homestead site to your hosts file:
`192.168.10.10   homestead`
- the local configuration for projects on homestead has to be (it's different from the docker configuration):
```
# BUS content
FS_BUS_KEY=homestead
FS_BUS_SECRET=secretkey
FS_BUS_ENDPOINT=http://homestead:9600
FS_BUS_BUCKET=csm-bus
FS_BUS_REGION=us-east-1
FS_BUS_ROOT=
```
- for pbs import add this configuration:
```
PBS_USERNAME=FreshinUp
PBS_PASSWORD=kE18cV22y1r3
PBS_SERIAL_NUMBER=9991.QA
```
