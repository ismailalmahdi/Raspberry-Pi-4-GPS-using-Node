# Adding GPS To Raspberry Pi 4
This code will help you setup your rasberry pi 4 to A GPS Module, before using this code you need to setup the following: 

  - Setup the hardware (GPS Module) 
  - Configure the serial communcation port
  - make sure that npm and node.js is installed and they have a compatable versions

## Setup the hadrware
In order to setup your gps module, you have to make sure that module you are using and what is the input voltage that it is using. 
for example I am using GY-GPS6MV2 for this configurations.
| PI PINs | GPS PINs |
| ------ | ------ |
| PIN no.1 | VCC PIN |
| PIN no.6 | GROUND PIN |
| PIN no.8 | RX PIN |
| PIN no.10 |TX PIN |

## Configure the serial Communcation port on the PI
In order to configure the serial communcation in the Pi 4 you cane run the following comand to enter the raspberry pi configurations.
```sh
$ sudo raspi-config
```
after you run that you will be promoted with a blue screen. navigate to `5. Interface Options` 
then to  `P6 Serail` and then it will ask you if you want to enable the port you can select `YES`

Once that is done you can prossed to the setting up node.js and npm to your pi.

### Installling the GPS node.js dependencies
In order to install the dependencies of the node.js GPS you should navigate to the project file then run the following comand:
```sh
$ npm i -d 
```
then you can run the application by running
```sh
$ node app.js
```


