<template>
  <PageHeader>{{ article.title }}</PageHeader>
  <VSheet class="pa-8" rounded :elevation="3">
    <article>
      <VImg
        v-if="article.coverPhoto"
        :src="article.coverPhoto.url"
        :width="article.coverPhoto.width"
        class="my-2"
      />
      <div v-if="!hideSubtitle" class="text-subtitle-2 my-2">
        <div class="d-flex align-center">
          <VIcon color="primary">mdi-clock</VIcon>
          <span class="pl-1">{{ dateFormatted }}</span>
        </div>
        <div v-if="article.location" class="d-flex align-center">
          <VIcon color="primary">mdi-map-marker-outline</VIcon>
          <span class="pl-1">{{ article.location }}</span>
        </div>
      </div>
      <VueMarkdown
        :source="article.content"
        :options="{ breaks: true, linkify: true }"
      />
    </article>
  </VSheet>
</template>

<script setup lang="ts">
import VueMarkdown from "vue-markdown-render";
import { Article } from "@/types";
import { formatDateFull } from "@/utils";
import PageHeader from "@/components/PageHeader.vue";

const props = withDefaults(
  defineProps<{ article: Article; hideSubtitle?: boolean }>(),
  {
    hideSubtitle: false,
  }
);

const dateFormatted = formatDateFull(props.article.publishedAt);
</script>
