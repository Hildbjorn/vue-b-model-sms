<template>
    <header class="navbar">
        <div class="container">
            <div class="navbar-content">
                <router-link class="navbar-logo" to="/">{{ app.title }}</router-link>
                <ul class="navbar-list">
                    <li class="navbar-item" v-for="link in links" :key="link.alias">
                        <router-link :to="link.url" class="navbar-link">{{ link.title }}</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>
import { app, links } from "@/_config";
export default {
    data() {
        return {
            app: app,
            links: links,
        }
    },
};
</script>