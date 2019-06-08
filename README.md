# vuetify-jsonschema-form

Generate forms for the [vuetify](https://vuetifyjs.com/en/) UI library (vuejs) based on annotated JSON schemas.

See the [Demo and Templatebuilder](https://digma-form-builder.netlify.com/).

## Installation

```bash
npm i --save @dev7ch/vuetify-jsonschema-form
```

## Usage

```html
<template>
  <v-form v-model="formValid">
    <v-jsonschema-form v-if="schema" :schema="schema" :model="dataObject" :options="options" @error="showError" @change="showChange" @input="showInput" />
  </v-form>
</template>

<script>
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import Draggable from 'vuedraggable'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Swatches from 'vue-swatches'
import 'vue-swatches/dist/vue-swatches.min.css'
import VJsonschemaForm from '@dev7ch/vuetify-jsonschema-form'
import '@dev7ch/vuetify-jsonschema-form/dist/main.css'
import { Sketch } from 'vue-color'

Vue.use(Vuetify)
Vue.use(VueAxios, axios)

Vue.component('swatches', Swatches)
Vue.component('draggable', Draggable)
Vue.component('color-picker', Sketch)

export default {
  components: {VJsonschemaForm},
  data() {
    return {
      schema: {...},
      dataObject: {},
      formValid: false,
      options: {
        debug: false,
        disableAll: false,
        autoFoldObjects: true
      }
    }
  },
  methods: {
    showError(err) {
      window.alert(err)
    },
    change(e) {
      console.log('"change" event', e)
    },
    input(e) {
      console.log('"input" event', e)
    }
  }
}
</script>
```

The library can also be loaded from source if you use [Vuetify "à la carte"](https://vuetifyjs.com/en/framework/a-la-carte). In this case you will have to instruct your build tool to transpile the source with babel.

```js
import VJsonschemaForm from '@dev7ch/vuetify-jsonschema-form/lib/index.vue'
```

I you don't use a build tool, and want to load the library through script tags, you can do something like this.

```html
...
<script src="https://cdn.jsdelivr.net/npm/@dev7ch/vuetify-jsonschema-form@0.26/dist/main.js"></script>
<link href="https://cdn.jsdelivr.net/npm/@dev7ch/vuetify-jsonschema-form@0.26/dist/main.js" rel="stylesheet">
...
<script>
  ...
  components: {
    "v-jsonschema-form": VJsonschemaForm.default
  }
  ...
</script>
```
