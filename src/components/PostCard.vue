<template>
  <div class="post-card">
    <div class="card-details">
      <div class="card-row">
        <span class="label">Id:</span>
        <span>{{ post.id }}</span>
      </div>
      <div class="card-row">
        <span class="label">Title:</span>
        <span>{{ post.title }}</span>
      </div>
      <div class="card-row">
        <span class="label">Body:</span>
        <span>{{ post.body }}</span>
      </div>
      <div class="card-row">
        <span class="label">User ID:</span>
        <span>{{ post.userId }}</span>
      </div>
      <div class="card-row">
        <span class="label">Tags:</span>
        <span>{{ post.tags.join(', ') }}</span>
      </div>
      <div class="card-row">
        <span class="label">Reactions:</span>
        <span>{{ post.reactions }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  post: {
    id: Number,
    title: String,
    body: String,
    userId: Number,
    tags: Array,
    reactions: Number,
  },
});
</script>

<style scoped>
.post-card {
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 8px;
  max-width: 400px;
  margin-bottom: 20px;
  margin-left: 10px;
  background-color:antiquewhite;
}

.card-details {
  padding: 10px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.card-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}

.label {
  font-weight: bold;
  margin-right: 5px;
}
</style>
