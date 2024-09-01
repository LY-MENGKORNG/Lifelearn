<template>
  <div class="card flex justify-end p-2 mb-4">
    <ul class="flex list-none m-0 p-0 gap-2 items-center">
      <li>
        <button type="button"
          class="inline-flex w-8 h-8 p-0 items-center justify-center surface-0 dark:surface-800 border border-surface-200 dark:border-surface-600 rounded"
          @click="onThemeToggler">
          <i :class="`dark:text-white pi ${iconClass}`" />
        </button>
      </li>
      <li class="relative">
        <button v-styleclass="{
          selector: '@next',
          enterFromClass: 'hidden',
          enterActiveClass: 'animate-scalein',
          leaveToClass: 'hidden',
          leaveActiveClass: 'animate-fadeout',
          hideOnOutsideClick: true,
        }" type="button"
          class="inline-flex w-8 h-8 p-0 items-center justify-center surface-0 dark:surface-800 border border-surface-200 dark:border-surface-600 rounded">
          <i class="pi pi-palette dark:text-white"></i>
        </button>
        <div
          class="absolute top-[2.5rem] right-0 hidden w-[16rem] p-3 bg-white dark:bg-surface-800 rounded-md shadow border border-surface-200 dark:border-surface-700 flex-col justify-start items-start gap-3.5 inline-flex origin-top z-10">
          <div class="flex-col justify-start items-start gap-2 inline-flex pr-4">
            <span class="text-sm font-medium">Primary Colors</span>
            <div class="self-stretch justify-start items-start gap-2 inline-flex flex-wrap">
              <button v-for="primaryColor of primaryColors" :key="primaryColor.name" type="button"
                :title="primaryColor.name" @click="updateColors('primary', primaryColor)"
                class="outline outline-2 outline-offset-1 outline-transparent cursor-pointer p-0 rounded-[50%] w-5 h-5"
                :style="{
                  backgroundColor: `${primaryColor.name === 'noir' ? 'var(--text-color)' : primaryColor.palette['500']}`,
                  outlineColor: `${selectedPrimaryColor === primaryColor.name ? 'var(--p-primary-color)' : ''}`,
                }"></button>
            </div>
          </div>
          <div class="flex-col justify-start items-start gap-2 inline-flex pr-2">
            <span class="text-sm font-medium">Surface Colors</span>
            <div class="self-stretch justify-start items-start gap-2 inline-flex">
              <button v-for="surface of surfaces" :key="surface.name" type="button" :title="surface.name"
                @click="updateColors('surface', surface)"
                class="outline outline-2 outline-offset-1 outline-transparent cursor-pointer p-0 rounded-[50%] w-5 h-5"
                :style="{
                  backgroundColor: `${surface.palette['500']}`,
                  outlineColor: `${selectedSurfaceColor === surface.name ? 'var(--p-primary-color)' : ''}`,
                }"></button>
            </div>
          </div>
          <div class="flex-col justify-start items-start gap-2 inline-flex w-full">
            <span class="text-sm font-medium">Preset</span>
            <div
              class="inline-flex p-[0.28rem] items-start gap-[0.28rem] rounded-[0.71rem] border border-[#00000003] w-full">
              <SelectButton v-model="$appState.theme" @update:modelValue="onPresetChange" :options="presets"
                :unselectable="false" />
            </div>
          </div>
          <div class="inline-flex flex-col justify-start items-start gap-2 w-full pt-4 pb-2">
            <span class="text-sm font-medium m-0">Ripple Effect</span>
            <ToggleSwitch :modelValue="rippleActive" @update:modelValue="onRippleChange" />
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { $t, updatePreset, updateSurfacePalette } from '@primevue/themes';
import Aura from '@primevue/themes/aura';
import Lara from '@primevue/themes/lara';
import Nora from '@primevue/themes/nora';
import { PRIMARY_COLOR } from '@/data/color'

const presets = {
  Aura,
  Lara,
  Nora,
};
export default {
  data() {
    return {
      iconClass: 'pi-moon',
      presets: Object.keys(presets),
      selectedPrimaryColor: 'noir',
      selectedSurfaceColor: null,
      primaryColors: [...PRIMARY_COLOR],
      surfaces: [
        {
          name: 'slate',
          palette: {
            0: '#ffffff',
            50: '#f8fafc',
            100: '#f1f5f9',
            200: '#e2e8f0',
            300: '#cbd5e1',
            400: '#94a3b8',
            500: '#64748b',
            600: '#475569',
            700: '#334155',
            800: '#1e293b',
            900: '#0f172a',
            950: '#020617',
          },
        },
        {
          name: 'gray',
          palette: {
            0: '#ffffff',
            50: '#f9fafb',
            100: '#f3f4f6',
            200: '#e5e7eb',
            300: '#d1d5db',
            400: '#9ca3af',
            500: '#6b7280',
            600: '#4b5563',
            700: '#374151',
            800: '#1f2937',
            900: '#111827',
            950: '#030712',
          },
        },
        {
          name: 'zinc',
          palette: {
            0: '#ffffff',
            50: '#fafafa',
            100: '#f4f4f5',
            200: '#e4e4e7',
            300: '#d4d4d8',
            400: '#a1a1aa',
            500: '#71717a',
            600: '#52525b',
            700: '#3f3f46',
            800: '#27272a',
            900: '#18181b',
            950: '#09090b',
          },
        },
        {
          name: 'neutral',
          palette: {
            0: '#ffffff',
            50: '#fafafa',
            100: '#f5f5f5',
            200: '#e5e5e5',
            300: '#d4d4d4',
            400: '#a3a3a3',
            500: '#737373',
            600: '#525252',
            700: '#404040',
            800: '#262626',
            900: '#171717',
            950: '#0a0a0a',
          },
        },
        {
          name: 'stone',
          palette: {
            0: '#ffffff',
            50: '#fafaf9',
            100: '#f5f5f4',
            200: '#e7e5e4',
            300: '#d6d3d1',
            400: '#a8a29e',
            500: '#78716c',
            600: '#57534e',
            700: '#44403c',
            800: '#292524',
            900: '#1c1917',
            950: '#0c0a09',
          },
        },
        {
          name: 'soho',
          palette: {
            0: '#ffffff',
            50: '#f4f4f4',
            100: '#e8e9e9',
            200: '#d2d2d4',
            300: '#bbbcbe',
            400: '#a5a5a9',
            500: '#8e8f93',
            600: '#77787d',
            700: '#616268',
            800: '#4a4b52',
            900: '#34343d',
            950: '#1d1e27',
          },
        },
        {
          name: 'viva',
          palette: {
            0: '#ffffff',
            50: '#f3f3f3',
            100: '#e7e7e8',
            200: '#cfd0d0',
            300: '#b7b8b9',
            400: '#9fa1a1',
            500: '#87898a',
            600: '#6e7173',
            700: '#565a5b',
            800: '#3e4244',
            900: '#262b2c',
            950: '#0e1315',
          },
        },
        {
          name: 'ocean',
          palette: {
            0: '#ffffff',
            50: '#fbfcfc',
            100: '#F7F9F8',
            200: '#EFF3F2',
            300: '#DADEDD',
            400: '#B1B7B6',
            500: '#828787',
            600: '#5F7274',
            700: '#415B61',
            800: '#29444E',
            900: '#183240',
            950: '#0c1920',
          },
        },
      ],
    };
  },
  methods: {
    onThemeToggler() {
      const root = document.getElementsByTagName('html')[0];

      root.classList.toggle('p-dark');
      this.iconClass = this.iconClass === 'pi-moon' ? 'pi-sun' : 'pi-moon';
    },
    getPresetExt() {
      const color = this.primaryColors.find(
        (c) => c.name === this.selectedPrimaryColor
      );

      if (color.name === 'noir') {
        return {
          semantic: {
            primary: {
              50: '{surface.50}',
              100: '{surface.100}',
              200: '{surface.200}',
              300: '{surface.300}',
              400: '{surface.400}',
              500: '{surface.500}',
              600: '{surface.600}',
              700: '{surface.700}',
              800: '{surface.800}',
              900: '{surface.900}',
              950: '{surface.950}',
            },
            colorScheme: {
              light: {
                primary: {
                  color: '{primary.950}',
                  contrastColor: '#ffffff',
                  hoverColor: '{primary.900}',
                  activeColor: '{primary.800}',
                },
                highlight: {
                  background: '{primary.950}',
                  focusBackground: '{primary.700}',
                  color: '#ffffff',
                  focusColor: '#ffffff',
                },
              },
              dark: {
                primary: {
                  color: '{primary.50}',
                  contrastColor: '{primary.950}',
                  hoverColor: '{primary.100}',
                  activeColor: '{primary.200}',
                },
                highlight: {
                  background: '{primary.50}',
                  focusBackground: '{primary.300}',
                  color: '{primary.950}',
                  focusColor: '{primary.950}',
                },
              },
            },
          },
        }
      }
      if (this.$appState.theme === 'Nora') {
        return {
          semantic: {
            primary: color.palette,
            colorScheme: {
              light: {
                primary: {
                  color: '{primary.600}',
                  contrastColor: '#ffffff',
                  hoverColor: '{primary.700}',
                  activeColor: '{primary.800}',
                },
                highlight: {
                  background: '{primary.600}',
                  focusBackground: '{primary.700}',
                  color: '#ffffff',
                  focusColor: '#ffffff',
                },
              },
              dark: {
                primary: {
                  color: '{primary.500}',
                  contrastColor: '{surface.900}',
                  hoverColor: '{primary.400}',
                  activeColor: '{primary.300}',
                },
                highlight: {
                  background: '{primary.500}',
                  focusBackground: '{primary.400}',
                  color: '{surface.900}',
                  focusColor: '{surface.900}',
                },
              },
            },
          },
        }
      }
      return {
        semantic: {
          primary: color.palette,
          colorScheme: {
            light: {
              primary: {
                color: '{primary.500}',
                contrastColor: '#ffffff',
                hoverColor: '{primary.600}',
                activeColor: '{primary.700}',
              },
              highlight: {
                background: '{primary.50}',
                focusBackground: '{primary.100}',
                color: '{primary.700}',
                focusColor: '{primary.800}',
              },
            },
            dark: {
              primary: {
                color: '{primary.400}',
                contrastColor: '{surface.900}',
                hoverColor: '{primary.300}',
                activeColor: '{primary.200}',
              },
              highlight: {
                background:
                  'color-mix(in srgb, {primary.400}, transparent 84%)',
                focusBackground:
                  'color-mix(in srgb, {primary.400}, transparent 76%)',
                color: 'rgba(255,255,255,.87)',
                focusColor: 'rgba(255,255,255,.87)',
              },
            },
          },
        },
      }
    },
    updateColors(type, color) {
      if (type === 'primary') this.selectedPrimaryColor = color.name;
      else if (type === 'surface') this.selectedSurfaceColor = color.name;

      this.applyTheme(type, color);
    },
    applyTheme(type, color) {
      if (type === 'primary') {
        updatePreset(this.getPresetExt());
      } else if (type === 'surface') {
        updateSurfacePalette(color.palette);
      }
    },
    onRippleChange(value) {
      this.$primevue.config.ripple = value;
    },
    onPresetChange(value) {
      this.$appState.theme = value;
      const preset = presets[value];
      const surfacePalette = this.surfaces.find(
        (s) => s.name === this.selectedSurfaceColor
      )?.palette;

      $t()
        .preset(preset)
        .preset(this.getPresetExt())
        .surfacePalette(surfacePalette)
        .use({ useDefaultOptions: true });
    }
  },
  computed: {
    rippleActive() {
      return this.$primevue.config.ripple;
    }
  }
};
</script>
