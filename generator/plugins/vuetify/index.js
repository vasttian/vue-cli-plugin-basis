import Vue from 'vue';
<%_ if (opts.import === 'full') { _%>
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
<%_ } else { _%>
import {
  Vuetify,
  VApp,
  VAlert,
  VAutocomplete,
  VAvatar,
  VBadge,
  VBreadcrumbs,
  VBtn,
  VBtnToggle,
  VCard,
  VCheckbox,
  VCombobox,
  VDataTable,
  VDatePicker,
  VDialog,
  VExpansionPanel,
  VFooter,
  VForm,
  VGrid,
  VIcon,
  VInput,
  VLabel,
  VList,
  VMenu,
  VMessages,
  VNavigationDrawer,
  VOverflowBtn,
  VPagination,
  VProgressCircular,
  VProgressLinear,
  VRadioGroup,
  VRangeSlider,
  VSelect,
  VSlider,
  VSnackbar,
  VSpeedDial,
  VStepper,
  VSubheader,
  VSwitch,
  VSystemBar,
  VTabs,
  VTextField,
  VTextarea,
  VTimePicker,
  VToolbar,
  VTooltip,
  transitions,
} from 'vuetify';
import 'vuetify/src/stylus/app.styl';
<%_ } _%>
import enLang from 'vuetify/es5/locale/en';
import zhLang from 'vuetify/es5/locale/zh-Hans';
<%_ if (opts.customTheme) { _%>
import '../stylus/main.styl';
<%_ } _%>
import i18n from '../i18n';

Vue.use(Vuetify, {
  <%_ if (opts.import === 'partial') { _%>
  components: {
    VApp,
    VAlert,
    VAutocomplete,
    VAvatar,
    VBadge,
    VBreadcrumbs,
    VBtn,
    VBtnToggle,
    VCard,
    VCheckbox,
    VCombobox,
    VDataTable,
    VDatePicker,
    VDialog,
    VExpansionPanel,
    VFooter,
    VForm,
    VGrid,
    VIcon,
    VInput,
    VLabel,
    VList,
    VMenu,
    VMessages,
    VNavigationDrawer,
    VOverflowBtn,
    VPagination,
    VProgressCircular,
    VProgressLinear,
    VRadioGroup,
    VRangeSlider,
    VSelect,
    VSlider,
    VSnackbar,
    VSpeedDial,
    VStepper,
    VSubheader,
    VSwitch,
    VSystemBar,
    VTabs,
    VTextField,
    VTextarea,
    VTimePicker,
    VToolbar,
    VTooltip,
    transitions,
  },
  <%_ } _%>
  <%_ if (opts.i18n !== 'none') { _%>
  lang: {
    locales: { enLang, zhLang },
    current: 'enLang',
  },
  <%_ } _%>
});

<%_ if (opts.i18n !== 'none') { _%>
const that = Vue.prototype;
that.$locale = {
  use(lang) {
    i18n.locale = lang;
    that.$vuetify.lang.current = lang === 'zh-CN' ? 'zhLang' : 'enLang';
  },
  current() {
    return i18n.locale;
  },
};
<%_ } _%>