# Digital Identity Manipulator
Generate and modify digital identities with the help of a Browser Add-on. 
 
## Requirements
### Technical requirements
- <a href="https://www.mozilla.org/de/firefox/">Firefox Browser</a>
- Ad-Blocker Addon, e.g. <a href="https://addons.mozilla.org/de/firefox/addon/ublock-origin/">uBlock</a>, 
<a href="https://addons.mozilla.org/de/firefox/addon/adblocker-ultimate/">Adblocker Ultimate</a> or another alternative

### Optional requirements for better results
- New Virtual Machine with a new installed browser
- Stable VPN connection to different location

## How to install
Install the _Digital Identity Generator_ Browser Extension either as a 
<a href="https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/">temporary</a>
or as a permanent Extension. 

### Temporary
Download the source code of this repository and extract it into a new folder. After this, follow the instructions here: 
<a href="https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/">Temporary Installation 
in Firefox</a>

### Permanent
Download the `digital_identity_generator-x.x-an+fx.xpi` from the `build` Folder and
1. Move to `about:addons`
2. Click the settings button
3. Choose `Install Add-on from file...`
4. Choose file `digital_identity_generator-x.x-an+fx.xpi` to install as an Add-on

## How to run
After you successful installed the Addon you should see a new icon appear in your browser in the top left corner. Click
this and then a popup should open which should tell you that the _Digital Identity Generator_ is currently disabled. 

If this is the case, go to `about:addons` and move to the Addon `Digital Identity Generator`. Then press the card with 
the addon. After that you should see a `Settings` tab in the small tab menu. Press on it and add in all the keywords you
want to search, separated by a linebreak.

After you've done that, press save to save the keywords.

After you've done all this you can click the `Enable` button in the addon popup, and a new Tab should open, 
and the magic begins.

## Development
### Build XPI
1. Increment Version in manifest.json
2. Move to the project root directory
3. Get your API Key and Secret from https://addons.mozilla.org/de/developers/addon/api/key/
4. Run `web-ext sign --api-key user:***:*** --api-secret *** -a artifacts/`


## License
This work is licensed under a <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.</a>