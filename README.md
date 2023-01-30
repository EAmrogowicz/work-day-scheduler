# Third-Party APIs: Work Day Scheduler

## Overview

Simple calendar application that allows a user to save events for each hour
(business hour) of the day. This app runs in the browser and feature dynamically
updated HTML and CSS powered by jQuery.

Application uses the [Moment.js](https://momentjs.com/) library to work with
date and time. Be sure to read the documentation carefully and concentrate on
using Moment.js in the browser.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Requirements](#requirements)
- [Credits](#credits)
- [License](#license)

## Installation

Add Bootstrap library links right before your css and closing `</head>` tag in
html files:

```html
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
  rel="stylesheet"
  integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
  crossorigin="anonymous"
/>
<script
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
  crossorigin="anonymous"
></script>

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css"
/>
```

Ensure all fonts library is linked as well. Paste it in `<head>` section after
Bootstrap and before your own css file link:

```html
<link
  rel="stylesheet"
  href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
  integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
  crossorigin="anonymous"
/>
<link
  href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
  rel="stylesheet"
/>
```

Add CSS right before closing `</head>` tag in html files (before title):

```html
<link rel="stylesheet" href="./styles.css" />
```

Add JavaScript right before closing `</body>` tag in the html file.

JQuery and MomentJS libraries:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
```

Your own script code:

```html
<script src="./script.js"></script>
```

## Usage

Output: https://eamrogowicz.github.io/work-day-scheduler/

GitHub source files: https://github.com/EAmrogowicz/work-day-scheduler

The following animation demonstrates the application functionality:

![A user clicks on slots on the color-coded calendar and edits the events.](./images/05-third-party-apis-homework-demo.gif)

## Requirements

- Display the current day at the top of the calender when a user opens the
  planner.

- Present time-blocks for standard business hours when the user scrolls down.

- Color-code each time-block based on past, present, and future when the
  time-block is viewed.

- Allow a user to enter an event when they click a time-block.

- Save the event in local storage when the save button is clicked in that time
  slot.

- Persist events between refreshes of a page.

- Print clean time-block the next day.

## Credits

N/A

## License

Please refer to the LICENSE in the repo.
