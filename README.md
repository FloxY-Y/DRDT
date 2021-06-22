<!-- omit in toc -->
# DRDT
dark reader detection tool is a script to detect people who use an add-ons like dark reader.

<!-- omit in toc -->
## table of content
- [Note](#note)
  - [why use those script](#why-use-those-script)
  - [information that would be appreciated](#information-that-would-be-appreciated)
- [License](#license)
- [How to use](#how-to-use)
- [documentation](#documentation)
  - [example](#example)
- [warning](#warning)

## Note
I am a newbie in JS and on GitHub so there is a big chance that there are problems in my script or elements that are not optimized

### why use those script
add-ons like darkreader can for some sites create problems (information hidden because of too violent filter) or even do the opposite of what the user wants (example you have a site that is already with a dark theme and dark reader or other puts it in white).  
the script can also be used if you already have a nice dark theme and you want the user to enjoy it.

### information that would be appreciated
- please do not use the script to block users or to track them.
- please use this script only if this kind of add-ons creates problems on your site and only to display a popin to warn the user that the add-ons may create problems
- please mention the author in the list of libraries used and give the github link

I would like to remind you that all those listed in this section is not legally required but would be appreciated <3

## License
those working are in the public domain [CC0](https://creativecommons.org/publicdomain/zero/1.0/) (C) ^^

**Q:** Do I have to give attribution ?  
**A:** You're not required to, but it's highly appreciated ! <3

**Q :** can I use the script for commercial purposes ?  
**A :** of course. but it would be cool if you didn't sell the script even if you could do it.

**Q :** can I say that it was me who made the script ?  
**A :** yes. but it's not very nice.

## How to use

to use the script you must place the script tag before the code that will use it  
note : it is strongly recommended to put the code in a setTimeout function (approximately 1000ms) ! ! !

## documentation

| Function          | Description                     | example                                         |
| ----------------- | ------------------------------- | ----------------------------------------------- |
| `DRDT.detected()` | detect if dark reader is active | `DRDT.detected() ? "detected" : "not detected"` |

### example
```js
function detected() {
    if (DRDT.detected()) {
        // detected
        console.log("detected");
    } else {
        // no detected
        console.log("no detected");
    }
}
setInterval(detected, 1000);
```

## warning
the script can make false positives if you put filters on the html tag or if in your css you have `color` and `background-color` rules that target all `div`.