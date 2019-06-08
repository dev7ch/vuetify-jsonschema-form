<template lang="html">
  <v-app>
    <v-toolbar fixed color="teal lighten-3" app>
      <v-toolbar-title>JSON Form builder</v-toolbar-title>
      <v-spacer />
      <v-btn color="yellow lighten" @click="applySchema">
        Apply
      </v-btn>
      <v-btn @click="formatSchema">
        Format
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container fluid grid-list-md>
        <h1>DIGMA Form Builder</h1>
        <h3>Create portable schemata for complex input and file upload forms.</h3>
        <p>Live editing, building, testing and validation.</p>
        <v-layout row>
          <v-flex xs6>
            <v-layout row wrap>
              <v-flex xs6>
                <v-select v-model="example" :items="examples" :return-object="true" item-text="title" label="Load a template ..." @change="applyExample" />
              </v-flex>
            </v-layout>
            <v-textarea v-model="schemaStr" :error-messages="schemaError ? [schemaError.message] : []" :rows="40" auto-grow />
          </v-flex>
          <v-flex xs6>
            <h2 class="title my-4">
              <v-chip v-if="formValid" color="success">
                valid
              </v-chip>
              <v-chip v-else color="danger">
                invalid
              </v-chip>
              <v-btn color="teal lighten-3" @click="$refs.myForm.validate()">
                validate
              </v-btn>
            </h2>

            <v-form ref="myForm" v-model="formValid">
              <v-container>
                <v-layout align-center justify-space-between row>
                  <v-jsonschema-form
                    v-if="schema"
                    :schema="schema"
                    :model="dataObject"
                    :options="{debug: true, disableAll: false, autoFoldObjects: false, context: {owner: {type: 'organization', id: '5a5dc47163ebd4a6f438589b'}}, accordionMode: 'open'}"
                    @error="e => window.alert(e)"
                    @change="change"
                    @input="input"
                  />
                </v-layout>
              </v-container>
            </v-form>

            <h2 class="title my-4">
              Data:
            </h2>
            <pre>{{ JSON.stringify(dataObject, null, 2) }}</pre>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import VJsonschemaForm from '../lib/index.vue'
import examples from './examples'
import hjson from 'hjson' // more tolerant parsing of the schema for easier UX

export default {
  components: { VJsonschemaForm },
  data: function() {
    return {
      window,
      schema: null,
      schemaStr: '{}',
      schemaError: null,
      dataObject: {},
      examples,
      example: examples[0],
      formValid: false
    }
  },
  mounted() {
    this.applyExample()
  },
  methods: {
    applySchema() {
      try {
        this.schema = hjson.parse(this.schemaStr)
        this.schemaError = null
      } catch (err) {
        this.schemaError = err
      }
    },
    formatSchema() {
      try {
        const schema = hjson.parse(this.schemaStr)
        this.schemaStr = JSON.stringify(schema, null, 2)
        this.schemaError = null
      } catch (err) {
        this.schemaError = err
      }
    },
    applyExample() {
      this.schema = null
      setTimeout(() => {
        this.dataObject = JSON.parse(JSON.stringify(this.example.data || {}))
        this.schemaStr = JSON.stringify(this.example.schema, null, 2)
        this.applySchema()
      }, 1)
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

<style lang="css">
</style>
