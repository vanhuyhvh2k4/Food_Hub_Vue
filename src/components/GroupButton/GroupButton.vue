<template>
    <div :class="$style.wrapper">
        <ul>
            <li @click="handleClickButton(index)" :class="[index + 1 === currentData && currentData !== 'none' ? $style.active : ``]" v-for="(item, index) in titles" :key="index">
                <h4>{{ item }}</h4>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "GroupButton",
    data() {
        return {
            currentData: this.current
        }
    },
    props: {
        current: {
            type: [Number, String],
            default: 1
        },
        titles: {
            type: Array,
            default: []
        }
    },
    methods: {
        handleClickButton (index) {
            this.currentData = index + 1;
            this.$emit('click-btn', this.currentData, this.titles[index]);
        },
        resetCurrent () {
            if (this.current === 'none') {
                this.currentData = 'none';
            } else {
                this.currentData = 1;
            }
        }
    },
}
</script>

<style lang="scss" module>
    @import "./GroupButton.module.scss"
</style>