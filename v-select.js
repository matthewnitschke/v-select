(function(){
  Vue.component('v-select', {
    props: {
      options: Array,
      value: String
    },
    data: function(){
      return {
        locValue: ""
      }
    },
    template: `<div>
                <select v-model="locValue" @input="$emit('input', $event.target.value)">
                  <option v-if="$slots.default" value=""><slot></slot></option>
                  <option v-for='(option, index) in options' :value='option'>
                    {{ option }}
                  </option>
                </select>
              </div>`,
    mounted() {
      if(!this.value){
        this.locValue = this.options[0];
        this.$emit('input', this.locValue);
      } else {
        this.locValue = this.value;
      }
    }
  });
})
