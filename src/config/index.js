import { DEFAULT_SELECTOR, RULES } from "./rules";
export { I18N, UI_LANGS } from "./i18n";

const APP_NAME = process.env.REACT_APP_NAME.trim().split(/\s+/).join("-");

export const APP_LCNAME = APP_NAME.toLowerCase();
export const APP_VERSION = "1.1.2";

export const STOKEY_MSAUTH = `${APP_NAME}_msauth`;
export const STOKEY_SETTING = `${APP_NAME}_setting`;
export const STOKEY_RULES = `${APP_NAME}_rules`;

export const CACHE_NAME = `${APP_NAME}_cache`;

export const MSG_FETCH = "fetch";
export const MSG_FETCH_LIMIT = "fetch_limit";
export const MSG_TRANS_TOGGLE = "trans_toggle";
export const MSG_TRANS_GETRULE = "trans_getrule";
export const MSG_TRANS_PUTRULE = "trans_putrule";

export const THEME_LIGHT = "light";
export const THEME_DARK = "dark";

export const URL_APP_HOMEPAGE = "https://github.com/fishjar/kiss-translator";
export const URL_RAW_PREFIX =
  "https://raw.githubusercontent.com/fishjar/kiss-translator/master";
export const URL_MICROSOFT_AUTH = "https://edge.microsoft.com/translate/auth";
export const URL_MICROSOFT_TRANS =
  "https://api-edge.cognitive.microsofttranslator.com/translate";

export const OPT_TRANS_GOOGLE = "Google";
export const OPT_TRANS_MICROSOFT = "Microsoft";
export const OPT_TRANS_OPENAI = "OpenAI";
export const OPT_TRANS_ALL = [
  OPT_TRANS_GOOGLE,
  OPT_TRANS_MICROSOFT,
  OPT_TRANS_OPENAI,
];

export const OPT_LANGS_TO = [
  ["en", "English - English"],
  ["zh-CN", "Simplified Chinese - 简体中文"],
  ["zh-TW", "Traditional Chinese - 繁體中文"],
  ["ar", "Arabic - العربية"],
  ["bg", "Bulgarian - Български"],
  ["ca", "Catalan - Català"],
  ["hr", "Croatian - Hrvatski"],
  ["cs", "Czech - Čeština"],
  ["da", "Danish - Dansk"],
  ["nl", "Dutch - Nederlands"],
  ["fi", "Finnish - Suomi"],
  ["fr", "French - Français"],
  ["de", "German - Deutsch"],
  ["el", "Greek - Ελληνικά"],
  ["hi", "Hindi - हिन्दी"],
  ["hu", "Hungarian - Magyar"],
  ["id", "Indonesian - Indonesia"],
  ["it", "Italian - Italiano"],
  ["ja", "Japanese - 日本語"],
  ["ko", "Korean - 한국어"],
  ["ms", "Malay - Melayu"],
  ["mt", "Maltese - Malti"],
  ["nb", "Norwegian - Norsk Bokmål"],
  ["pl", "Polish - Polski"],
  ["pt", "Portuguese - Português"],
  ["ro", "Romanian - Română"],
  ["ru", "Russian - Русский"],
  ["sk", "Slovak - Slovenčina"],
  ["sl", "Slovenian - Slovenščina"],
  ["es", "Spanish - Español"],
  ["sv", "Swedish - Svenska"],
  ["ta", "Tamil - தமிழ்"],
  ["te", "Telugu - తెలుగు"],
  ["th", "Thai - ไทย"],
  ["tr", "Turkish - Türkçe"],
  ["uk", "Ukrainian - Українська"],
  ["vi", "Vietnamese - Tiếng Việt"],
];
export const OPT_LANGS_FROM = [["auto", "Auto-detect"], ...OPT_LANGS_TO];
export const OPT_LANGS_SPECIAL = {
  [OPT_TRANS_MICROSOFT]: new Map([
    ["auto", ""],
    ["zh-CN", "zh-Hans"],
    ["zh-TW", "zh-Hant"],
  ]),
  [OPT_TRANS_OPENAI]: new Map(
    OPT_LANGS_FROM.map(([key, val]) => [key, val.split("-")[0].trim()])
  ),
};

export const OPT_STYLE_LINE = "under_line"; // 下划线
export const OPT_STYLE_FUZZY = "fuzzy"; // 模糊
export const OPT_STYLE_ALL = [OPT_STYLE_LINE, OPT_STYLE_FUZZY];

export const DEFAULT_FETCH_LIMIT = 1; // 默认并发请求数
export const DEFAULT_FETCH_INTERVAL = 500; // 默认请求间隔时间

export const PROMPT_PLACE_FROM = "{{from}}"; // 占位符
export const PROMPT_PLACE_TO = "{{to}}"; // 占位符

export const DEFAULT_RULE = {
  pattern: "*",
  selector: DEFAULT_SELECTOR,
  translator: OPT_TRANS_MICROSOFT,
  fromLang: "auto",
  toLang: "zh-CN",
  textStyle: OPT_STYLE_LINE,
  transOpen: false,
};

export const DEFAULT_SETTING = {
  darkMode: false, // 深色模式
  uiLang: "zh", // 界面语言
  fetchLimit: DEFAULT_FETCH_LIMIT, // 请求并发数量
  clearCache: false, // 是否在浏览器下次启动时清除缓存
  googleUrl: "https://translate.googleapis.com/translate_a/single", // 谷歌翻译接口
  openaiUrl: "https://api.openai.com/v1/chat/completions",
  openaiKey: "",
  openaiModel: "gpt-4",
  openaiPrompt: `You will be provided with a sentence in ${PROMPT_PLACE_FROM}, and your task is to translate it into ${PROMPT_PLACE_TO}.`,
};

export const DEFAULT_RULES = [
  ...RULES.map((item) => ({
    ...DEFAULT_RULE,
    ...item,
    transOpen: true,
  })),
  DEFAULT_RULE,
];

export const TRANS_MIN_LENGTH = 5; // 最短翻译长度
export const TRANS_MAX_LENGTH = 5000; // 最长翻译长度
