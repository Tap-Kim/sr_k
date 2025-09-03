import {
  isSettingDark,
  isSystemDarkTheme,
  toggleDarkTheme
} from "@/utils/theme";

const DANGEROUS_HTML = {
  __html: `
    ${isSystemDarkTheme}
    (${toggleDarkTheme})((${isSettingDark})());
  `
};

function SyncThemeScript() {
  return (
    <script id="syn_theme_script" dangerouslySetInnerHTML={DANGEROUS_HTML} />
  );
}

export default SyncThemeScript;
