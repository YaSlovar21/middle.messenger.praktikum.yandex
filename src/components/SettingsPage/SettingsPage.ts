
import Block from "../Block/Block";
import settingsTpl from "./settings.hbs?raw";

class SettingsPage extends Block {
  
  protected template = `
    ${settingsTpl}
  `;

}

export default SettingsPage;
