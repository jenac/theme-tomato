# Theme Tomato
Making Coding Colorful. 
Automatically switching color theme within configurable time interval.

## Features

* Given an time interval (in minutes) and a list of color themes, rotate the color themes.


![demo](https://github.com/jenac/theme-tomato/blob/develop/demo.gif?raw=true)


## Extension Settings

This extension contributes the following settings:

* `theme.tomato.minutes`: time interval in minutes
* `theme.tomato.themes`: An array of themes 

Example:
F1 -> Preference: Open Worksapce Setting(JSON), then put your setting in the json:
```
"theme.tomato": {
    "minutes": 1,
    "themes": [
        "Cobalt2",
        "Better Solarized Light"
    ]
}
```

## Requirements
* Color themes in the setting needs to be installed first.

## Release Notes

### 0.0.1

Initial release 