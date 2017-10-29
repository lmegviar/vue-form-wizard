<!-- TO DO: 
  Config = form object > Sections > Items
  Progress Bar = multi-sectioned
  Update form with bootstrap / flexbox  -->

<template>
  <div class="stateless">
    <h3> Stateless App Demo </h3>
    <div class="progress-indicator">
      <b-progress class="mt-1" :max="max" show-value>
        <b-progress-bar :value="counter*(6/10)" variant="success"></b-progress-bar>
        <b-progress-bar :value="counter*(2.5/10)" variant="warning"></b-progress-bar>
        <b-progress-bar :value="counter*(1.5/10)" variant="danger"></b-progress-bar>
      </b-progress>
    </div>
    <div>
      <b-form class="form" @submit="submit">
        <span v-for="item in items">
          <b-form-group 
          v-bind:label="item.title"
          v-bind:description="item.desc">
            <b-form-input
            v-if="item.type=='input'"
            v-bind:type="item.input"
            v-bind:placeholder="item.placeholder || ''"
            v-bind:v-model="submission[item.field]">
            </b-form-input>
            <b-form-select
            v-if="item.type=='select'"
            :options="item.options"
            v-bind:v-model="submission[item.field]">
            </b-form-select>
            <span 
            v-if="item.type=='checkbox'" 
            v-for="option in item.options">
              <b-form-checkbox
              v-bind:v-model="submission[item.field]">
                  <small>{{option}}</small>
              </b-form-checkbox>
            </span>
          </b-form-group>
        </span>
        <div class="button-bar">
          <b-button type="reset" variant="secondary">Reset</b-button>
          <b-button type="submit" variant="primary">Submit</b-button>
        </div>
      </b-form>
    </div>
    <p v-for="value in submission"> {{value}} </p>
  </div>
</template>

<script>
export default {
  name: 'Stateless',
  data () {
    return {
      items: [
        {
          title: 'Select Item',
          field: 'select',
          desc: 'Single select dropdown',
          type: 'select',
          options: ['First', 'Second', 'Third'],
          placeholder: 'Choose one.'
        },
        {
          title: 'Text Input',
          field: 'textInput',
          desc: 'Text input field',
          type: 'input',
          input: 'text',
          placeholder: 'Enter text input.'
        },
        {
          title: 'Checkboxes',
          field: 'checkboxes',
          desc: 'Multi-select checkboxes',
          type: 'checkbox',
          options: ['First', 'Second', 'Third']
        }
      ],
      submission: {},
      counter: 70,
      max: 100
    }
  },
  methods: {
    submit (evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
  .form {
    padding: 20px 20px 20px 20px;
    text-align: left;
  }
  .progress-indicator {
    padding: 0px 20px 20px 20px;
  }
  .button-bar {
    text-align: right;
  }
  h3 {
    padding: 20px 0px 20px 0px;
  }
</style>