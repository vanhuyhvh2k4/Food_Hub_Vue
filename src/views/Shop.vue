<template>
    <main :class="$style.wrapper">
        <header :class="$style.header">
            <div :class="$style.image">
                <img :src="shopInfo ? shopInfo.background : ''" alt="" />
                <div :class="$style.small_image">
                    <img :src="shopInfo ? shopInfo.image : ''" alt="" />
                    <fa v-if="shopInfo && shopInfo.isTick === 0 ? false : true" :class="$style.check"
                        icon="circle-check" />
                </div>
            </div>
            <article :class="$style.text">
                <h1>{{ shopInfo ? shopInfo.name : '' }}</h1>
                <small>{{ shopInfo ? shopInfo.quantity : '' }} products for sale</small>
                <p>{{ shopInfo ? shopInfo.place : '' }}</p>
            </article>
        </header>
        <div :class="$style.sort">
            <section>
                <label for="sort">Sort by: </label>
                <select id="sort">
                    <option>Popular</option>
                    <option>Price</option>
                </select>
            </section>
            <section>
                <Button onlyIcon>
                    <SVGIcon icon="filter" />
                </Button>
            </section>
        </div>
        <div :class="$style.food_list">
            <li v-for="item in foodList" :key="item.id">
                <FoodItem 
                    @click-item="handleClickFoodItem" 
                    shortFood 
                    noPlace 
                    :class="$style.food_item" 
                    :title="item.name"
                    :desc="item.description" 
                    :num-of-ratings="item.price" 
                    :is-like="item.liked === 0 ? false : true"
                    :image="item.image" 
                />
            </li>
        </div>
    </main>
</template>

<script>
    import Button from '@/components/Button/Button.vue';
    import FoodItem from '@/components/FoodItem/FoodItem.vue';
    import Overlay from '@/components/Overlay/Overlay.vue';
    import SVGIcon from '@/components/SVGIcon/SVGIcon.vue';
    import shop from '@/composables/shop.js';

    export default {
        name: "Shop",
        components: {
            Overlay,
            Button,
            SVGIcon,
            FoodItem
        },
        mixins: [shop]
    }
</script>

<style lang="scss" module>
    @import './scss/Shop.module.scss';
</style>