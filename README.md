![Latest Release Download Count](https://img.shields.io/badge/dynamic/json?color=blue&label=Downloads%40latest&query=assets%5B1%5D.download_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fvtt-lair%2Fsimbuls-wild-surges%2Freleases%2Flatest) [![Forge Installs](https://img.shields.io/badge/dynamic/json?label=Forge%20Installs&query=package.installs&suffix=%25&url=https%3A%2F%2Fforge-vtt.com%2Fapi%2Fbazaar%2Fpackage%2Fsimbuls-wild-surges&colorB=4aa94a)](https://forge-vtt.com/bazaar#package=simbuls-wild-surges) 
![Foundry Core Compatible Version](https://img.shields.io/badge/dynamic/json.svg?url=https%3A%2F%2Fraw.githubusercontent.com%2Fvtt-lair%2Fsimbuls-wild-surges%2Fmaster%2Fmodule.json&label=Foundry%20Version&query=$.compatibleCoreVersion&colorB=orange)

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/N4N36ZSPQ)

# Simbul's Wild Surges
A Foundry VTT module that automates Wild Surges for DnD 5e Sorcerors. Originally part of [DnD 5e Helpers](https://github.com/trioderegion/dnd5e-helpers), but due to that module no longer being maintained this section has been split into it's own module for v10.

### Settings
![image](https://user-images.githubusercontent.com/33215552/195983860-dc75d9f6-19bb-4bcd-975a-38e39aa2a25a.png)

### Details
- To enable, select the 'Enabled' option for 'Wild Magic Auto-Detect' on the module's config page.
- Make sure to setup a Wild Magic Surge Table and supply the name of the table so that it draws from said table.
- Change the Tides of Chaos feature name, if you changed on the character.

- To enable it for a character, choose which type of Wild Surge the character should use under 'Special Traits' on the character sheet.

  ![image](https://user-images.githubusercontent.com/33215552/195983919-5bf3b4b1-5f8e-40c9-b60c-d095125a4a85.png)
  
  ![image](https://user-images.githubusercontent.com/33215552/195983897-b23ee102-c53c-46eb-86ff-b06e38bdd6e3.png)
- Triggers on _any_ reduction in current spell slots from a character with the 'Wild Magic Surge' special trait
- Optional homebrews
  - More Surges - a surge triggers on a roll <= spell level. Also recharges Tides of Chaos.
  - Volatile Surges - Similar to More, but adds 1d4 to the spell level if Tides of Chaos has been expended.
  - Accumulating Surges - Each time a spell is cast a count is accumulated. Once a surge happens, this count is reset to 0 and it starts over again.
  - The homebrew variants look for the designated Tides of Chaos feature and expects it to have "X uses per long rest". Will also recharge an actor resource of the same name, if present.
- Blind draw surge table results, which hides the results of the surge from the players.

![image](https://user-images.githubusercontent.com/33215552/195983945-4141caf4-9d39-4921-9663-24afd65e217a.png)

![image](https://user-images.githubusercontent.com/33215552/195983952-665ff37b-20e8-466e-90c6-296d43942830.png)

