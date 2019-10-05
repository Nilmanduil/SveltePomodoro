# Pomodoro Svelte

This is a [Pomodoro application](https://en.wikipedia.org/wiki/Pomodoro_Technique) written in [Svelte](https://svelte.dev) with [Storybook](https://storybook.js.org/) integration to test components.

This project was inspired by [app-ideas](https://github.com/florinpop17/app-ideas), and more precisely [Pomodoro Clock](https://github.com/florinpop17/app-ideas/blob/master/Projects/Pomodoro-Clock.md).

## Requirements
* [Node.js](https://nodejs.org)

## Get started

```bash
cd SveltePomodoro
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see the app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.


## Deploying to the web

### With [now](https://zeit.co/now)

Install `now` if you haven't already:

```bash
npm install -g now
```

Then, from within your project folder:

```bash
cd public
now
```

As an alternative, use the [Now desktop client](https://zeit.co/download) and simply drag the unzipped project folder to the taskbar icon.

### With [surge](https://surge.sh/)

Install `surge` if you haven't already:

```bash
npm install -g surge
```

Then, from within your project folder:

```bash
npm run build
surge public
```

## TODO

### User Stories
* [x] User can see a timer for 25 minutes - the working session
* [x] After the working session is over, the User can see a timer for 5 minutes - the break session
* [x] User can start / pause, stop and reset the timers

### Bonus features
* [x] User can hear a sound playing when the timer hits `00:00` - denoting that the session has ended
* [x] User can change / customize the minutes in both sessions before starting
* [x] User can set a **long break** session of 10 minutes. This will be activated every 4th **break** session