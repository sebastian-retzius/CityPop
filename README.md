# CityPop ReadMe
This is the ReadMe for the app CityPop which is a part of a work test at WeKnowIt

<br>

## Setup development environment

This app is created with Expo which aids in development of React Native apps. Therefore you need to have the expo-cli installed to run this app. Make sure to have Node 12 LTS or later installed.

To install the expo cli globally run the following command in a terminal

```
 npm install -g expo-cli
```

If you run into any problems check the following [Expo documentation link](https://docs.expo.dev/get-started/installation/)

Afterwards clone this repo with the following command

```
  git clone https://github.com/sebastian-retzius/CityPop.git
```

Then go into the created CityPop folder and run npm install to install all required node packages

```
  cd CityPop
  npm install
```
<br>

## Debugging

For debugging purposes i recommend using the [Expo Go](https://expo.dev/client) app that can be downloaded in app store or google play. To start debugging with Expo Go just run

```
  npm start
```
and scan the QR-code that is shown in the terminal or go to the Expo Development Tools that usually runs on on [localhost with port 19002](http://localhost:19002).

The app will then be run in your mobile phone.

<br>

## Build

When building this app I take help from expo. To do this you need a Expo account which you can get [here](https://expo.dev/signup). 

To start the build process simply run.
```
  expo build
```
You can also specify if you are building for android or ios with the following commands.
```
  expo build:android
```
```
  expo build:ios
```
When building for android you can also choose wether to build an .apk file or an Android App Bundle. And for ios you can choose between building for a simulator or for publishing an archive.
```
  expo build:android -t apk
  expo build:android -t app-bundle
```
```
  expo build:ios -t archive
  expo build:ios -t simulator
``` 
When you have started the build Expo will prompt you to log in and then to choose if you would like expor to generate a Keystore for you or if you want to upload it yourself.

Then Expo will build your app for you and you can download it from your [Expo page](https://expo.dev/). If you have any problems check this link that explains the [Expo build process](https://docs.expo.dev/classic/building-standalone-apps/)