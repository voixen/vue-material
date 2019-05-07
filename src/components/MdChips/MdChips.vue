<template>
  <div>
    <!--TODO we must reflect all $attrs from div to md-field-->
    <md-field class="md-chips" :class="[$mdActiveTheme, chipsClasses]">
      <slot />

      <md-chip
        v-if="!mdVertical"
        v-for="(chip, key) in value"
        :key="chip"
        :md-deletable="!mdStatic"
        :md-clickable="!mdStatic"
        :md-duplicated="isDuplicatedChip(chip)"
        @keydown.enter="$emit('md-click', chip, key)"
        @click.native="$emit('md-click', chip, key)"
        @md-delete.stop="removeChip(chip)">
        <slot name="md-chip" :chip="chip" v-if="$scopedSlots['md-chip']">{{ chip }}</slot>
        <template v-else>{{ chip }}</template>
      </md-chip>

      <md-input
        ref="input"
        v-model.trim="inputValue"
        v-if="!mdStatic && modelRespectLimit"
        :type="mdInputType"
        :id="id"
        :placeholder="mdPlaceholder"
        :autofocus="mdAutofocus"
        @input="handleInput"
        @keydown.enter="insertChip"
        @keydown.8="handleBackRemove">
      </md-input>
    </md-field>

    <div v-if="mdVertical" class="md-chips md-chips-vertical" :class="[$mdActiveTheme]">
      <md-chip
        v-for="(chip, key) in value"
        :key="chip"
        :md-deletable="!mdStatic"
        :md-clickable="!mdStatic"
        :md-duplicated="isDuplicatedChip(chip)"
        @keydown.enter="$emit('md-click', chip, key)"
        @click.native="$emit('md-click', chip, key)"
        @md-delete.stop="removeChip(chip)">
        <slot name="md-chip" :chip="chip" v-if="$scopedSlots['md-chip']">{{ chip }}</slot>
        <template v-else>{{ chip }}</template>
      </md-chip>
    </div>
  </div>
</template>

<script>
  import MdComponent from 'core/MdComponent'
  import MdField from 'components/MdField/MdField'
  import MdInput from 'components/MdField/MdInput/MdInput'
  import MdUuid from 'core/utils/MdUuid'
  import MdPropValidator from 'core/utils/MdPropValidator'

  export default new MdComponent({
    name: 'MdChips',
    components: {
      MdField,
      MdInput
    },
    props: {
      value: Array,
      id: {
        type: [String, Number],
        default: () => 'md-chips-' + MdUuid()
      },
      mdInputType: {
        type: [String, Number],
        ...MdPropValidator('md-input-type', ['email', 'number', 'password', 'search', 'tel', 'text', 'url'])
      },
      mdPlaceholder: [String, Number],
      mdStatic: Boolean,
      mdLimit: Number,
      mdCheckDuplicated: {
        type: Boolean,
        default: false
      },
      mdFormat: {
        type: Function
      },
      mdVertical: {
        type: Boolean,
        default: false
      },
      mdAutofocus: {
        type: Boolean,
        default: false
      },
      mdSplitter: {
        type: String|Array,
        default: ','
      }
    },
    data: () => ({
      inputValue: '',
      duplicatedChip: []
    }),
    computed: {
      chipsClasses() {
        return {
          'md-has-value': this.value && this.value.length,
          'md-vertical': this.mdVertical
        }
      },

      modelRespectLimit() {
        return !this.mdLimit || this.value.length < this.mdLimit
      },

      formattedInputValue() {
        if (!this.mdFormat) {
          return this.inputValue
        }
        return this.mdFormat(this.inputValue)
      }
    },
    methods: {
      insertChip({ target }) {
        const inputValue = this.formattedInputValue
        if (!inputValue || !this.modelRespectLimit) {
          return
        }

        let newValues
        if (!this.mdSplitter) newValues = [inputValue]
        else if (typeof this.mdSplitter === 'string') newValues = inputValue.split(this.mdSplitter)
        else if (Array.isArray(this.mdSplitter)) {
          this.mdSplitter.forEach(splitter => {
            newValues = newValues.concat(inputValue.split(splitter))
          })
        }

        newValues.forEach(v => {
          this.addChip(v.trim())
        })

        this.$emit('input', this.value)
        this.inputValue = ''
      },
      addChip(inputValue) {
        if (this.value.includes(inputValue)) {
          return
        }

        this.value.push(inputValue)
        this.$emit('md-insert', inputValue)
      },
      removeChip(chip) {
        const index = this.value.indexOf(chip)

        this.value.splice(index, 1)
        this.$emit('md-delete', chip, index)
        this.$emit('input', this.value)
        this.$nextTick(() => this.$refs.input.$el.focus())
      },
      handleBackRemove() {
        if (!this.inputValue) {
          this.removeChip(this.value[this.value.length - 1])
        }
      },
      handleInput() {
        if (this.mdCheckDuplicated) {
          this.checkDuplicated()
        }
        else {
          this.duplicatedChip = []
        }
      },
      checkDuplicated() {
        this.duplicatedChip = []
        if (!this.mdCheckDuplicated) {
          return false
        }

        const inputValue = this.formattedInputValue
        const splitIdx = this.mdSplitter ? inputValue.indexOf(this.mdSplitter) : -1
        const values = splitIdx !== -1 ? inputValue.split(this.mdSplitter) : [inputValue]

        values.forEach(v => {
          this.checkDuplicate(v.trim())
        })
      },
      checkDuplicate(value) {
        const idx = this.value.indexOf(value)
        const dupIdx = this.duplicatedChip.includes(value)

        if (idx !== -1 && !dupIdx) {
          this.duplicatedChip.push(value)
        }
      },
      isDuplicatedChip(value) {
        return this.duplicatedChip.includes(value)
      }
    },
    watch: {
      value() {
        this.checkDuplicated()
      }
    }
  })
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";

  .md-chips.md-field {
    padding-top: 12px;
    flex-wrap: wrap;

    &.md-has-value {
      label {
        top: -6px;
      }
    }

    .md-chip {
      margin-bottom: 4px;

      &:last-of-type {
        margin-right: 8px;
      }
    }

    .md-input {
      min-width: 128px;
    }
  }

  .md-chips.md-chips-vertical {
    .md-chip {
      margin-bottom: 6px;
      margin-left: 0;
      margin-right: 4px;
    }
  }
</style>
