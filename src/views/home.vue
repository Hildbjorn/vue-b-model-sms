<template>
    <h1 class="title">Главная</h1>
    <div class="card__wrapper" v-for="item in items" :key="item.id">
        <Card :name="`${item.lvl} lvl`" :title="item.title" />
    </div>
</template>

<script>
import Card from '@/components/UI/Card.vue'
export default {
    components: { Card },
    data() {
        return {
            items: [
                {
                    id: 1,
                    title: 'Archer',
                    description: 'archer archer archer archer',
                    lvl: 4,
                },
                {
                    id: 2,
                    title: 'Wizard',
                    description: 'wizard wizard wizard wizard',
                    lvl: 5,
                },
            ],
        }
    }
}
</script>