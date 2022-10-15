// global variables;
const doc = document.documentElement;
const toggleId = 'toggle';
const showId = 'show';
const menu = 'menu';
const active = 'active';
const rootURL = window.location.protocol + "//" + window.location.host;
const goBackClass = 'button_back';
const lineClass = '.line';

// config defined values
const codeBlockConfig = JSON.parse('{{ partial "functions/getCodeConfig" . }}');
const iconsPath = `{{ partialCached "functions/getIconPath" . }}`;

// defined in i18n / translation files
const quickLinks = '{{ T "quick_links" }}';
const noMatchesFound = '{{ T "no_matches" }}';
